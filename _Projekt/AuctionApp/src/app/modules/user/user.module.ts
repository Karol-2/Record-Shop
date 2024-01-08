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


@NgModule({
  declarations: [
    ProfileComponent,
    EditFormComponent,
    UserAuctionsComponent,
    UserPanelComponent,
    AuctionPanelComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    UserRoutingModule,//THISSSSS
    ReactiveFormsModule,
    MaterialModule,
    AuctionModule
  ]
})
export class UserModule { }
