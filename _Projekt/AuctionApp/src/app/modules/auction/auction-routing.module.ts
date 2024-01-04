import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuctionListComponent } from './pages/auction-list/auction-list.component';
import { AuctionDetailsComponent } from './pages/auction-details/auction-details.component';
import { AuctionFormComponent } from './pages/auction-form/auction-form.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full'
  },
  {
    path: 'search',
    component: AuctionListComponent
  },
  {
    path: 'details/:id',
    component: AuctionDetailsComponent //resolver
  },
  {
    path: 'form',
    component: AuctionFormComponent //guard
  },
  {
    path: 'form/:id',
    component: AuctionFormComponent //guard
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuctionRoutingModule {}
