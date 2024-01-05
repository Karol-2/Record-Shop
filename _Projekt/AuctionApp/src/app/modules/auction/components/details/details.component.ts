import { Component, Input } from '@angular/core';
import { Auction } from 'src/app/shared/models/Auction.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  @Input() public auction!:Auction;

  protected daysFromDate(startingDate: Date): number {
    const today: Date = new Date();

    const diffMs = startingDate.getTime() - today.getTime();

    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  return diffDays;
  }
  
}
