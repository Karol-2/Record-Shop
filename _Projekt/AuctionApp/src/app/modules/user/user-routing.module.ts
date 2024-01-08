import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';
import { UserAuctionsComponent } from './components/user-auctions/user-auctions.component';
import { UserPanelComponent } from './pages/user-panel/user-panel.component';
import { auctionsResolver } from 'src/app/core/resolvers/auctions.resolver';

const routes: Routes = [
  {
    path: '',
    component: UserPanelComponent,
    children: [
      { path: 'details', component: ProfileComponent },
      { path: 'edit', component: EditFormComponent},
      { path: 'auctions', component: UserAuctionsComponent, resolve:{ auctions: auctionsResolver} },
      { path: '', redirectTo: 'details', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
