import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';
import { UserAuctionsComponent } from './components/user-auctions/user-auctions.component';
import { UserOrdersComponent } from './components/user-orders/user-orders.component';
import { UserPanelComponent } from './pages/user-panel/user-panel.component';
import { RouterModule } from '@angular/router';
import { UserRoutingModule } from './user-routing.module';


@NgModule({
  declarations: [
    ProfileComponent,
    EditFormComponent,
    UserAuctionsComponent,
    UserOrdersComponent,
    UserPanelComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    UserRoutingModule //THISSSSS
  ]
})
export class UserModule { }
