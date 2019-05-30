import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
})
export class PageHeaderComponent {

  constructor(private router: Router) {}

  onLogout() {
    this.router.navigate(['/login']);
  }

}
