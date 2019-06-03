import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileDetailsRS } from 'src/app/interfaces';
import { map, takeUntil } from 'rxjs/operators';
import { LoadingService } from 'src/app/features/profiles-manager/loading.service';
import { Subject } from 'rxjs';
import { MatDialog, Sort } from '@angular/material';
import { PhotoModalComponent } from 'src/app/features/profiles-manager/profile-details/photo-modal/photo-modal.component';
import { defaultCompare } from 'src/app/features/profiles-manager/compare';

@Component({
  selector: 'profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss'],
})
export class ProfileDetailsComponent implements OnInit, OnDestroy {
  userDetails: ProfileDetailsRS;
  unsubscribe$: Subject<void> = new Subject();
  isLoading: boolean;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private loadingService: LoadingService,
              private dialog: MatDialog,
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

  openPhoto(event: MouseEvent): void {
    this.dialog.open(PhotoModalComponent, {
      maxWidth: '640px',
      data: { src: event.target['src'] },
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  sortData(sort: Sort) {
    if (!sort.active || sort.direction === '') {
      return;
    }

    const data = this.userDetails.authAlerts;
    this.userDetails.authAlerts = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'dateTime':
          return defaultCompare(a.dateTime, b.dateTime, isAsc);
        case 'authStatus':
          return defaultCompare(a.authStatus, b.authStatus, isAsc);
        default:
          return 0;
      }
    });
  }

}
