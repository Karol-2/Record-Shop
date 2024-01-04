import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Auction } from 'src/app/shared/models/Auction.model';

@Component({
  selector: 'app-auction-preview',
  templateUrl: './auction-preview.component.html',
  styleUrls: ['./auction-preview.component.scss']
})
export class AuctionPreviewComponent {

  public constructor(private router:Router){};

  @Input() public auction!: Auction;

  protected goToDetails(): void{
    this.router.navigate(["auctions","details", this.auction.id])
  }
}
