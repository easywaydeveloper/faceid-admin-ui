import { Component, Input, OnInit } from '@angular/core';
import { ProfileSummary } from 'src/app/interfaces';

@Component({
  selector: 'profile-item',
  templateUrl: './profile-item.component.html',
  styleUrls: ['./profile-item.component.scss'],
})
export class ProfileItemComponent implements OnInit {

  @Input() profile: ProfileSummary;

  constructor() { }

  ngOnInit() {
  }

}
