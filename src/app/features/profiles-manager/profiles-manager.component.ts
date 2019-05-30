import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { transitionAnimation } from 'src/app/features/profiles-manager/router-animation';

@Component({
  selector: 'profiles-manager',
  templateUrl: './profiles-manager.component.html',
  styleUrls: ['./profiles-manager.component.scss'],
  animations: [transitionAnimation],
})
export class ProfilesManagerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
