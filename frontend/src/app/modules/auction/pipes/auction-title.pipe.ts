import { Pipe, PipeTransform } from '@angular/core';
import { Auction } from 'src/app/shared/models/Auction.model';

@Pipe({
  name: 'auctionTitle'
})
export class AuctionTitlePipe implements PipeTransform {

  public transform(auction: Auction): string {
    
    const artist: string = auction.artistName;
    const album: string = auction.albumName;
    const type: string = auction.type;
  
    const result: string = artist +" - " + album + " | " + type;
      
    return result;
    
    
  }

}
