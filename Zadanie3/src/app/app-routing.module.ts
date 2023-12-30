import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalListComponent } from './zoo/animal-list/animal-list.component';
import { AnimalAddComponent } from './zoo/animal-add/animal-add.component';

const routes: Routes = [
  {
    path:'',
    component: AnimalListComponent
  },
  {
    path:'add',
    component: AnimalAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
