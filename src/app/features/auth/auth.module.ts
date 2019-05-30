import { NgModule } from '@angular/core';
import { LoginFormComponent } from './login-form/login-form.component';
import { AuthComponent } from 'src/app/features/auth/auth.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AuthComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'login', component: AuthComponent },
    ]),
  ],
  providers: [],
})
export class AuthModule { }
