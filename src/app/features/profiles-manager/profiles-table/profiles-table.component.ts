import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProfilesService } from 'src/app/features/profiles-manager/profiles.service';
import { ProfileSummary } from 'src/app/interfaces';
import { Subject } from 'rxjs';
import { LoadingService } from 'src/app/features/profiles-manager/loading.service';
import { map, takeUntil } from 'rxjs/operators';
import { Sort } from '@angular/material';

@Component({
  selector: 'profiles-table',
  templateUrl: './profiles-table.component.html',
  styleUrls: ['./profiles-table.component.scss'],
})
export class ProfilesTableComponent implements OnInit, OnDestroy {
  isLoading: boolean;
  contentLoading: boolean;
  unsubscribe$: Subject<void> = new Subject();

  constructor(private profilesService: ProfilesService,
              private loadingService: LoadingService,
  ) { }

  clientProfiles: ProfileSummary[];

  ngOnInit() {
    this.contentLoading = true;
    this.loadingService.loading$.pipe(
      takeUntil(this.unsubscribe$),
      map(loading => this.isLoading = loading),
    ).subscribe();

    this.profilesService.getProfiles().pipe(
      takeUntil(this.unsubscribe$),
      map(profiles => {
        this.clientProfiles = profiles;
        this.contentLoading = false;
      }),
    ).subscribe();
  }

  sortData(sort: Sort) {
    if (!sort.active || sort.direction === '') {
      return;
    }

    const data = this.clientProfiles;
    this.clientProfiles = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'fullName':
          return this.compare(a.fullName, b.fullName, isAsc);
        case 'login':
          return this.compare(a.login, b.login, isAsc);
        case 'failureCount':
          return this.compare(a.failureCount, b.failureCount, isAsc);
        case 'successCount':
          return this.compare(a.successCount, b.successCount, isAsc);
        case 'clientStatus':
          return this.compare(a.clientStatus, b.clientStatus, isAsc);
        default:
          return 0;
      }
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}

