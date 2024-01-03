import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NewAuctionsComponent } from './components/new-auctions/new-auctions.component';
import { WlecomeMessageComponent } from './components/wlecome-message/wlecome-message.component';



@NgModule({
  declarations: [
    HomepageComponent,
    NewAuctionsComponent,
    WlecomeMessageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomepageComponent
  ]
})
export class HomepageModule { }
