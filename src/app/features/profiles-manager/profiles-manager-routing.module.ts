import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ProfilesTableComponent } from 'src/app/features/profiles-manager/profiles-table/profiles-table.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { CreateProfileComponent } from 'src/app/features/profiles-manager/create-profile/create-profile.component';
import { ProfilesManagerComponent } from 'src/app/features/profiles-manager/profiles-manager.component';
import { ProfileDetailsResolverService } from 'src/app/features/profiles-manager/profile-details/profile-details-resolver.service';

const profilesRoutes: Route[] = [
  {
    path: '',
    component: ProfilesManagerComponent,
    children: [
      {
        path: 'profiles',
        component: ProfilesTableComponent,
        data: { animation: 'Profiles' },
      },
      {
        path: 'profiles/:id',
        component: ProfileDetailsComponent,
        resolve: { details: ProfileDetailsResolverService },
      },
      {
        path: 'profiles/:id/edit',
        component: EditProfileComponent,
        resolve: { details: ProfileDetailsResolverService },
      },
      {
        path: 'create-profile',
        component: CreateProfileComponent,
        data: { animation: 'Create' },
      },
    ],
  },

];

@NgModule({
  imports: [
    RouterModule.forChild(profilesRoutes),
  ],
  exports: [RouterModule],
})
export class ProfilesManagerRoutingModule {}
