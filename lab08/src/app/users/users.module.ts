import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserRoutingModule } from './users-routing.module';
import { FormsModule } from '@angular/forms';
import { OnlyTextDirective } from './directives/only-text.directive';
import { ZipCodeDirective } from './directives/zip-code.directive';



@NgModule({
  declarations: [
    UserListComponent,
    UserDetailsComponent,
    UserFormComponent,
    OnlyTextDirective,
    ZipCodeDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ], 
  exports: [
    UserRoutingModule
  ]
})
export class UsersModule { }
