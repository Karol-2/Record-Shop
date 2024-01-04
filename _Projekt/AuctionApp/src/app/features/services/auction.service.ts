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

  public getAuction(id: string): Observable<Auction | Message>{
    return this.httpClient.get<Auction | Message>("auctions/"+id);
  }

  public createAuction(auction: CreateAuction): Observable<CreateAuction | Message>{
    return this.httpClient.post<CreateAuction | Message>("auctions", auction);
  }

  public updateAuction(id: string, newAuction: Auction): Observable<Auction | Message>{
    return this.httpClient.put<Auction | Message>("auctions/"+id, newAuction);
  }

  public deleteAuction(id: string): Observable<Message>{
    return this.httpClient.delete<Message>("auctions/"+id );
  }


}
