import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MainComponent } from './layout/main/main.component';
import { NavComponent } from './layout/nav/nav.component';
import { RouterModule } from '@angular/router';
import { LoggedUserService } from '../shared/services/logged-user.service';
import { SharedModule } from "../shared/shared.module";
import { PageForbiddenComponent } from './layout/page-forbidden/page-forbidden.component';
import { AuctionNotFoundComponent } from './layout/auction-not-found/auction-not-found.component';
import { MaterialModule } from '../modules/material/material.module';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainComponent,
    NavComponent,
    PageForbiddenComponent,
    AuctionNotFoundComponent,
    PageNotFoundComponent
  ],
  providers: [
    LoggedUserService
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MainComponent,
  ]
    
})
export class CoreModule { }
