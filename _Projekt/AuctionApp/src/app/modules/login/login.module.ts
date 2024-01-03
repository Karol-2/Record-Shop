import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { AuthService } from 'src/app/features/services/auth.service';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    LoginFormComponent,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [
    AuthService
  ],
  exports: [
    LoginFormComponent
  ]
})
export class LoginModule { }
