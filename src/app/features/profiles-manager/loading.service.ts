import { Injectable } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterEvent,
} from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  public loading$: Observable<boolean>;
  private loadingSync$: BehaviorSubject<boolean>;

  constructor(private router: Router) {
    router.events.subscribe((routerEvent: RouterEvent) => this.checkRouterEvent(routerEvent));
    this.loadingSync$ = new BehaviorSubject<boolean>(false);
    this.loading$ = this.loadingSync$.asObservable();
  }

  private checkRouterEvent(routerEvent: RouterEvent): void {
    if (routerEvent instanceof NavigationStart) {
      this.loadingSync$.next(true);
    }

    if (routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError) {
      this.loadingSync$.next(false);
    }
  }
}
