import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Auction } from 'src/app/shared/models/Auction.model';

@Component({
  selector: 'app-auction-details',
  templateUrl: './auction-details.component.html',
  styleUrls: ['./auction-details.component.scss']
})
export class AuctionDetailsComponent implements OnInit{
  protected auction!: Auction;

  public constructor(private route: ActivatedRoute){}

  public ngOnInit(): void {
    window.scrollTo(0, 0);

    this.route.data.subscribe((data: Data) => {
      this.auction = data['auction'].auction;
    });
  }


}
