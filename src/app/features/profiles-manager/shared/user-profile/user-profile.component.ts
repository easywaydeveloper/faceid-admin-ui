import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfilesService } from 'src/app/features/profiles-manager/profiles.service';
import { ProfileDetails } from 'src/app/interfaces';
import { init } from 'protractor/built/launcher';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  @Input() user: ProfileDetails;

  profileForm: FormGroup;
  selectedImageUrl: string;

  defaultProfileConfig = {
    jobInterval: 3600,
    searchFaceDuration: 20,
    similarity: 0.8,
  };

  constructor(private fb: FormBuilder,
              private profileService: ProfilesService,
  ) {}

  ngOnInit() {
    const initialValues = this.prepareInitialValues();
    this.profileForm = this.fb.group({
      imageBase64: [initialValues.imageBase64, Validators.required],
      name: [initialValues.name, Validators.required],
      lastName: [initialValues.lastName, Validators.required],
      email: [initialValues.email, [Validators.required, Validators.email]],
      login: [initialValues.login, Validators.required],
      configRequest: this.fb.group({
        jobInterval: [initialValues.jobInterval, Validators.required],
        searchFaceDuration: [initialValues.searchFaceDuration, Validators.required],
        similarity: [initialValues.similarity, Validators.required],
      }),
    });
    this.selectedImageUrl = initialValues.imageBase64;
  }


  onFileChanged(evt): void {
    const rawFile = evt.target.files[0];
    const fileReader = new FileReader();
    if (rawFile) {
      fileReader.readAsDataURL(rawFile);
    }

    fileReader.onloadend = () => {
      this.selectedImageUrl = fileReader.result as string;
      this.profileForm.patchValue({ imageBase64: this.selectedImageUrl });
    };
  }

  onSubmit(): void {
    this.profileService.createProfile(this.profileForm.getRawValue())
      .subscribe(
        rs => console.log(rs),
        err => console.log('ERR', err),
      );
  }

  get title() {
    return this.user ? 'Edit' : 'Add';
  }

  private prepareInitialValues() {
    let values = {
      imageBase64: '',
      name: '',
      lastName: '',
      email: '',
      login: '',
      jobInterval: this.defaultProfileConfig.jobInterval,
      searchFaceDuration: this.defaultProfileConfig.searchFaceDuration,
      similarity: this.defaultProfileConfig.similarity,
    };

    if (this.user) {
      const { imageBase64, name, lastName, email, login, configRequest } = this.user;

      values = {
        imageBase64,
        name,
        lastName,
        email,
        login,
        jobInterval: configRequest.jobInterval,
        searchFaceDuration: configRequest.searchFaceDuration,
        similarity: configRequest.similarity,
      };
    }

    return values;
  }

}
