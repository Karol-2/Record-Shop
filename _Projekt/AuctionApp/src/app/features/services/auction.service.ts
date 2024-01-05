import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auction } from 'src/app/shared/models/Auction.model';
import CreateAuction from '../dto/create-auction.model';
import Message from '../dto/message.model';

@Injectable({
  providedIn: 'root'
})
export class AuctionService {
 
  constructor(private httpClient: HttpClient) { }

  public getAuctions(): Observable<Auction[]>{
    return this.httpClient.get<Auction[]>("auctions");
  }

  public getAuction(id: string): Observable<Auction>{
    return this.httpClient.get<Auction>("auctions/"+id);
  }

  public createAuction(auction: CreateAuction): Observable<Auction>{
    return this.httpClient.post<Auction>("auctions", auction);
  }

  public updateAuction(id: string, newAuction: Auction): Observable<Auction>{
    return this.httpClient.put<Auction>("auctions/"+id, newAuction);
  }

  public deleteAuction(id: string): Observable<Message>{
    return this.httpClient.delete<Message>("auctions/"+id );
  }


}
