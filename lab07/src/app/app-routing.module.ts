import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { Zad1Component } from './zad1/zad1.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Zad3Component } from './zad3/zad3.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomepageComponent,
    title: 'Home'
  },
  {
    path: 'zad1',
    component: Zad1Component,
    title: 'Zadanie 1'
  },
  {
    path: 'zad3',
    component: Zad3Component,
    title: 'Zadanie 3'
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
