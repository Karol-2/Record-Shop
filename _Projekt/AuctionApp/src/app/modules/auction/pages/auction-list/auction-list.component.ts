import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Auction } from 'src/app/shared/models/Auction.model';

@Component({
  selector: 'app-auction-list',
  templateUrl: './auction-list.component.html',
  styleUrls: ['./auction-list.component.scss'],
})
export class AuctionListComponent implements OnInit {
  protected auctions!: Auction[];

  public constructor(private route: ActivatedRoute) {}

  public ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.auctions = data['auctions'].auctions;
    });
  }
}
