import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, tap } from 'rxjs';
import { AuctionService } from 'src/app/features/services/auction.service';
import { Auction } from 'src/app/shared/models/Auction.model';

@Component({
  selector: 'app-new-auctions',
  templateUrl: './new-auctions.component.html',
  styleUrls: ['./new-auctions.component.scss']
})
export class NewAuctionsComponent implements OnInit {
  protected auctionsTab: Auction[] = [];

  public constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.auctionsTab = data['auctions']
        .auctions
        .sort((a:Auction, b: Auction) => new Date(a.dateCreated).getTime() - new Date(b.dateCreated).getTime())
        .splice(0,3);
     
    });
  }
}
