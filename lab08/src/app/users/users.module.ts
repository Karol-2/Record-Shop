import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserRoutingModule } from './users-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { UserService } from '../shared/services/user.service';

@NgModule({
  declarations: [
    UserListComponent,
    UserDetailsComponent,
    UserFormComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ], 
  providers: [
    UserService
  ],
  exports: [
    UserRoutingModule
  ]
})
export class UsersModule { }
