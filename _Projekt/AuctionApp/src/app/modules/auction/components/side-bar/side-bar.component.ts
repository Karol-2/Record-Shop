import { Component, Input } from '@angular/core';
import { Auction } from 'src/app/shared/models/Auction.model';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  
  @Input() public auctions!: Auction[];
  protected sortValue: string = "";
  protected sortOrder: string = "";


  protected sortAuctions() {
    if (this.sortValue) {
      this.auctions.sort((a, b) => {
        const valueA = this.getValueForSorting(a, this.sortValue);
        const valueB = this.getValueForSorting(b, this.sortValue);
  
        if (this.sortOrder === 'asc') {
          return valueA < valueB ? -1 : valueA > valueB ? 1 : 0;
        } else {
          return valueB < valueA ? -1 : valueB > valueA ? 1 : 0;
        }
      });
    }
    
  }
  
  private getValueForSorting(auction: Auction, sortField: string): string | number | Date {
    switch (sortField) {
      case 'artistName':
        return auction.artistName;
      case 'albumName':
        return auction.albumName
      case 'price':
        return auction.price;
      case 'dateCreated':
        return auction.dateCreated;
      default:
        return '';
    }
  }
}
