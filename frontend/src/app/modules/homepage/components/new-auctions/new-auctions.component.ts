import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Auction } from 'src/app/shared/models/Auction.model';

@Component({
  selector: 'app-new-auctions',
  templateUrl: './new-auctions.component.html',
  styleUrls: ['./new-auctions.component.scss']
})
export class NewAuctionsComponent implements OnInit {
  protected auctionsTab: Auction[] = [];

  public constructor(private route: ActivatedRoute){}

  public ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      this.auctionsTab = data['auctions']
        .auctions
        .sort((a: Auction, b: Auction) => new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime())
        .splice(0,3);
     
    });
  }
}
