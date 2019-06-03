import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileDetails } from 'src/app/interfaces';
import { map, takeUntil } from 'rxjs/operators';
import { LoadingService } from 'src/app/features/profiles-manager/loading.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss'],
})
export class ProfileDetailsComponent implements OnInit, OnDestroy {
  userDetails: ProfileDetails;
  unsubscribe$: Subject<void> = new Subject();
  isLoading: boolean;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private loadingService: LoadingService,
  ) { }

  ngOnInit() {
    this.loadingService.loading$.pipe(
      takeUntil(this.unsubscribe$),
      map(loading => this.isLoading = loading),
    ).subscribe();
    this.route.data.subscribe(({ details }) => this.userDetails = details);
  }

  onEdit(): void {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
