import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from 'src/app/features/auth/auth.service';
import { InterceptorService } from 'src/app/interceptor.service';
import { ProfilesService } from 'src/app/features/profiles-manager/profiles.service';


@NgModule({
  providers: [
    AuthService,
    ProfilesService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ]
})
export class CoreModule {}
