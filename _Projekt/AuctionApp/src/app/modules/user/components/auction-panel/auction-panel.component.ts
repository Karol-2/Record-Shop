import { Component, Input } from '@angular/core';
import { Auction } from 'src/app/shared/models/Auction.model';

@Component({
  selector: 'app-auction-panel',
  templateUrl: './auction-panel.component.html',
  styleUrls: ['./auction-panel.component.scss']
})
export class AuctionPanelComponent {
  @Input() public auction!: Auction;
}
