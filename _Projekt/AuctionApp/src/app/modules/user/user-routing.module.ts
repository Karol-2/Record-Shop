import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';
import { UserAuctionsComponent } from './components/user-auctions/user-auctions.component';
import { UserOrdersComponent } from './components/user-orders/user-orders.component';
import { UserPanelComponent } from './pages/user-panel/user-panel.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { UserResolver } from 'src/app/core/resolvers/user.resolver';

const routes: Routes = [
  {
    path: '',
    component: UserPanelComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard], //TODO: FIX
    children: [
      { path: 'details', component: ProfileComponent , resolve: {user: UserResolver}},
      { path: 'edit', component: EditFormComponent, resolve: {user: UserResolver} },
      { path: 'auctions', component: UserAuctionsComponent,resolve: {user: UserResolver} },
      { path: 'orders', component: UserOrdersComponent, resolve: {user: UserResolver} },
      { path: '', redirectTo: 'details', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
