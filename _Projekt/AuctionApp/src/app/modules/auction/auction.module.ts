import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuctionListComponent } from './pages/auction-list/auction-list.component';
import { AuctionDetailsComponent } from './pages/auction-details/auction-details.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { DetailsComponent } from './components/details/details.component';
import { AuctionFormComponent } from './pages/auction-form/auction-form.component';
import { AuctionPreviewComponent } from './components/auction-preview/auction-preview.component';
import { AuctionRoutingModule } from './auction-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuctionTitlePipe } from './pipes/auction-title.pipe';
import { FormPhotosComponent } from './components/form-photos/form-photos.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminOptionsComponent } from './components/admin-options/admin-options.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';



@NgModule({
  declarations: [
    AuctionListComponent,
    AuctionDetailsComponent,
    SearchFormComponent,
    DetailsComponent,
    AuctionFormComponent,
    AuctionPreviewComponent,
    AuctionTitlePipe,
    FormPhotosComponent,
    AdminOptionsComponent,
    SideBarComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuctionRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuctionModule { }
