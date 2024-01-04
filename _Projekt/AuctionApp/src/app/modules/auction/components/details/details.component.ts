import { Component, Input } from '@angular/core';
import { Auction } from 'src/app/shared/models/Auction.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  @Input() public auction!:Auction;
  
}
