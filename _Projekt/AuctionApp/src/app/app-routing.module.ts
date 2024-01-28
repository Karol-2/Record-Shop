import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/layout/page-not-found/page-not-found.component';
import { HomepageComponent } from './modules/homepage/pages/homepage/homepage.component';
import { AuthGuard } from './core/guards/auth.guard';
import { PageForbiddenComponent } from './core/layout/page-forbidden/page-forbidden.component';
import { AuctionNotFoundComponent } from './core/layout/auction-not-found/auction-not-found.component';
import { auctionsResolver } from './core/resolvers/auctions.resolver';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomepageComponent,
    resolve:{ auctions: auctionsResolver}
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./modules/user/user.module').then((m) => m.UserModule),
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
  },
  {
    path: 'auctions',
    loadChildren: () =>
      import('./modules/auction/auction.module').then((m) => m.AuctionModule),
  },
  {
    path: '403',
    component: PageForbiddenComponent,
  },
  { path: 'auction-404', component: AuctionNotFoundComponent },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
