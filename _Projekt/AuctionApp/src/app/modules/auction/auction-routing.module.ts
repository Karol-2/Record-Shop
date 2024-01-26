import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuctionListComponent } from './pages/auction-list/auction-list.component';
import { AuctionDetailsComponent } from './pages/auction-details/auction-details.component';
import { AuctionFormComponent } from './pages/auction-form/auction-form.component';
import { auctionsResolver } from 'src/app/core/resolvers/auctions.resolver';
import { auctionResolver } from 'src/app/core/resolvers/auction.resolver';
import { adminGuard } from 'src/app/core/guards/admin.guard';
import { leaveGuard } from 'src/app/core/guards/leave.guard';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full'
  },
  {
    path: 'search',
    component: AuctionListComponent,
    resolve:{ auctions: auctionsResolver}
  },
  {
    path: 'details/:id',
    component: AuctionDetailsComponent,
    resolve:{auction: auctionResolver}
  },
  {
    path: 'form',
    component: AuctionFormComponent,
    canActivate:[adminGuard],
    canDeactivate:[leaveGuard]
  },
  {
    path: 'form/:id',
    component: AuctionFormComponent,
    resolve:{auction: auctionResolver},
    canActivate:[adminGuard],
    canDeactivate:[leaveGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuctionRoutingModule {}
