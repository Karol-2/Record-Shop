import { RouterModule, Routes } from "@angular/router";
import { UserListComponent } from "./user-list/user-list.component";
import { UserDetailsComponent } from "./user-details/user-details.component";
import { NgModule } from "@angular/core";
import { UserFormComponent } from "./user-form/user-form.component";

const routes: Routes = [
    {
      path: '',
      pathMatch: "full",
      component: UserListComponent
    },
    {
      path: 'form',
      pathMatch: "full",
      component: UserFormComponent
    },
    {
      path: ':id',
      component: UserDetailsComponent
    },
    
  ]
  
  @NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [
      RouterModule
    ]
  })
  
  export class UserRoutingModule {}
  