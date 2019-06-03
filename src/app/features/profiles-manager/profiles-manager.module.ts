import { NgModule } from '@angular/core';
import { ProfilesManagerComponent } from 'src/app/features/profiles-manager/profiles-manager.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ProfilesManagerRoutingModule } from 'src/app/features/profiles-manager/profiles-manager-routing.module';
import { ProfilesTableComponent } from './profiles-table/profiles-table.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared.module';
import { RouterModule } from '@angular/router';
import { PageHeaderComponent } from './page-header/page-header.component';
import { UserProfileComponent } from './shared/user-profile/user-profile.component';
import { ProfileItemComponent } from './profiles-table/profile-item/profile-item.component';
import { FilterProfilesPipe } from './profiles-table/filter-profiles.pipe';

@NgModule({
  declarations: [
    ProfilesManagerComponent,
    ProfilesTableComponent,
    ProfileDetailsComponent,
    CreateProfileComponent,
    EditProfileComponent,
    PageHeaderComponent,
    UserProfileComponent,
    ProfileItemComponent,
    FilterProfilesPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ProfilesManagerRoutingModule,
  ],
  providers: [],
})
export class ProfilesManagerModule { }
