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



@NgModule({
  declarations: [
    AuctionListComponent,
    AuctionDetailsComponent,
    SearchFormComponent,
    DetailsComponent,
    AuctionFormComponent,
    AuctionPreviewComponent,
  ],
  imports: [
    CommonModule,
    AuctionRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuctionModule { }
