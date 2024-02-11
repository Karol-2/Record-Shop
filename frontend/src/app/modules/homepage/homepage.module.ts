import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { WelcomeBannerComponent } from './components/welcome-banner/welcome-banner.component';
import { NewAuctionsComponent } from './components/new-auctions/new-auctions.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    HomepageComponent,
    WelcomeBannerComponent,
    NewAuctionsComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    HomepageComponent,
  ]
})
export class HomepageModule { }
