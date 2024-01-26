import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';
import { UserAuctionsComponent } from './components/user-auctions/user-auctions.component';
import { UserPanelComponent } from './pages/user-panel/user-panel.component';
import { RouterModule } from '@angular/router';
import { UserRoutingModule } from './user-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { AuctionModule } from '../auction/auction.module';
import { AuctionPanelComponent } from './components/auction-panel/auction-panel.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { UserDisplayComponent } from './components/user-display/user-display.component';


@NgModule({
  declarations: [
    ProfileComponent,
    EditFormComponent,
    UserAuctionsComponent,
    UserPanelComponent,
    AuctionPanelComponent,
    SideBarComponent,
    UserManagementComponent,
    UserDisplayComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    SharedModule,
    RouterModule,
    UserRoutingModule,
    ReactiveFormsModule,
    AuctionModule
  ]
})
export class UserModule { }
