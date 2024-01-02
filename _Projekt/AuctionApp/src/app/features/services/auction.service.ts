import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auction } from 'src/app/shared/models/Auction.model';
import PaginatedAuction from '../dto/paginated-auction.model';
import CreateAuction from '../dto/create-auction.model';

@Injectable({
  providedIn: 'root'
})
export class AuctionService {
 
  constructor(private httpClient: HttpClient) { }

  public getAllAuctions(): Observable<Auction[]>{
    return this.httpClient.get<Auction[]>("http://localhost:3000/auctions");
  }

  public getAllAuctionsPaginated(page: number, pageSize: number): Observable<PaginatedAuction>{
    const params = {
      page: page.toString(),
      pageSize: pageSize.toString()
    };

    return this.httpClient.get<PaginatedAuction>("http://localhost:3000/auctions",{params});
  }

  public getAuction(id: string): Observable<Auction>{
    return this.httpClient.get<Auction>("http://localhost:3000/auctions/"+id);
  }

  public createAuction(auction: CreateAuction): Observable<CreateAuction>{
    return this.httpClient.post<CreateAuction>("http://localhost:3000/auctions", auction);
  }

  public updateAuction(id: string, newAuction: Auction): Observable<Auction>{
    return this.httpClient.put<Auction>("http://localhost:3000/auctions/"+id, newAuction);
  }

  public deleteAuction(id: string): Observable<string>{
    return this.httpClient.delete<string>("http://localhost:3000/auctions/"+id );
  }


}
