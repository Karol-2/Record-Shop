import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';
import { UserAuctionsComponent } from './components/user-auctions/user-auctions.component';
import { UserOrdersComponent } from './components/user-orders/user-orders.component';
import { UserPanelComponent } from './pages/user-panel/user-panel.component';

const routes: Routes = [
  {
    path: '',
    component: UserPanelComponent,
    children: [
      { path: 'details', component: ProfileComponent },
      { path: 'edit', component: EditFormComponent },
      { path: 'auctions', component: UserAuctionsComponent },
      { path: 'orders', component: UserOrdersComponent },
      { path: '', redirectTo: 'details', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
