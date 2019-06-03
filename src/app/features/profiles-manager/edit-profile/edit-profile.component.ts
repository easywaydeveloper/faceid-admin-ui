import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileDetailsRS } from 'src/app/interfaces';
import { LoadingService } from 'src/app/features/profiles-manager/loading.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit, OnDestroy {
  profileDetails: ProfileDetailsRS;
  isLoading: boolean;
  unsubscribe$: Subject<void> = new Subject();

  constructor(private route: ActivatedRoute,
              private loadingService: LoadingService,
  ) { }

  ngOnInit() {
    this.route.data.subscribe(({ details }) => this.profileDetails = details);
    this.loadingService.loading$.pipe(takeUntil(this.unsubscribe$))
      .subscribe(loading => this.isLoading = loading);
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
