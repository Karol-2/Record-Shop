import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeMessageComponent } from './components/welcome-message/welcome-message.component';
import { NewAuctionsComponent } from './components/new-auctions/new-auctions.component';
import { HomepageComponent } from './pages/homepage/homepage.component';



@NgModule({
  declarations: [
    WelcomeMessageComponent,
    NewAuctionsComponent,
    HomepageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomepageModule { }
