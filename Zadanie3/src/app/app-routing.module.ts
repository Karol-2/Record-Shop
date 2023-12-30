import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalListComponent } from './zoo/animal-list/animal-list.component';
import { AnimalAddComponent } from './zoo/animal-add/animal-add.component';
import { LeavePageGuard } from './shared/guards/leave-page.guard';
import { UserAccessGuard } from './shared/guards/user-access.guard';
import { AnimalDetailsComponent } from './zoo/animal-details/animal-details.component';

const routes: Routes = [
  {
    path:'',
    component: AnimalListComponent
  },
  {
    path:'add',
    component: AnimalAddComponent,
    canActivate: [UserAccessGuard],
    canDeactivate: [LeavePageGuard]
  },
  {
    path:"details/:id",
    component: AnimalDetailsComponent,
    canActivate: [UserAccessGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
