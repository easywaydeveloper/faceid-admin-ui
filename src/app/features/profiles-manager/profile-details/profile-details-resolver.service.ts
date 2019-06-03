import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ProfilesService } from 'src/app/features/profiles-manager/profiles.service';
import { Observable } from 'rxjs';
import { ProfileDetails } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProfileDetailsResolverService implements Resolve<ProfileDetails> {

  constructor(private profilesService: ProfilesService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProfileDetails> {
    const userId = route.paramMap.get('id');
    return this.profilesService.getProfile(parseInt(userId, 10));
  }
}
