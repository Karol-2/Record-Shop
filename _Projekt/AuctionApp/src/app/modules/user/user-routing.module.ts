import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';
import { UserAuctionsComponent } from './components/user-auctions/user-auctions.component';
import { UserPanelComponent } from './pages/user-panel/user-panel.component';
import { auctionsResolver } from 'src/app/core/resolvers/auctions.resolver';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { UsersResolver } from 'src/app/core/resolvers/users.resolver';
import { adminGuard } from 'src/app/core/guards/admin.guard';
import { leaveGuard } from 'src/app/core/guards/leave.guard';

const routes: Routes = [
  {
    path: '',
    component: UserPanelComponent,
    children: [
      { path: 'details', component: ProfileComponent },
      { path: 'edit', component: EditFormComponent, canDeactivate:[leaveGuard] },
      {
        path: 'auctions',
        component: UserAuctionsComponent,
        resolve: { auctions: auctionsResolver },
      },
      {
        path: 'manage',
        component: UserManagementComponent,
        resolve: { usersTab: UsersResolver, auctionsTab: auctionsResolver },
        canActivate:[adminGuard]
      },
      { path: '', redirectTo: 'details', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
