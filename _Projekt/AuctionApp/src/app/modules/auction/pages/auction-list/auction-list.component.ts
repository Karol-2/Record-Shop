import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Auction } from 'src/app/shared/models/Auction.model';

@Component({
  selector: 'app-auction-list',
  templateUrl: './auction-list.component.html',
  styleUrls: ['./auction-list.component.scss'],
})
export class AuctionListComponent implements OnInit, OnDestroy {
  protected auctions: Auction[] = [];
  private originalAuctions: Auction[] = [];
  private queryParamsSubscription: Subscription | undefined;

  public constructor(private route: ActivatedRoute, private router: Router) {}

  public ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      this.originalAuctions = data['auctions'].auctions;
      this.filterAuctions();
    });

    this.queryParamsSubscription = this.route.queryParams.subscribe(() => {
      this.filterAuctions();

    });
  }

  public ngOnDestroy(): void {
    if (this.queryParamsSubscription) {
      this.queryParamsSubscription.unsubscribe();
    }
  }

  private filterAuctions(): void {
    const type: string | null = this.route.snapshot.queryParamMap.get('type') || null;
    const artistName: string | null = this.route.snapshot.queryParamMap.get('artistName') || null;
    const category: string | null = this.route.snapshot.queryParamMap.get('category');
    const showFinished: boolean | null = this.route.snapshot.queryParamMap.get('showFinished') === 'true' || null;
    const showOngoing: boolean | null = this.route.snapshot.queryParamMap.get('showOngoing') === 'true' || null;
  
    this.auctions = this.originalAuctions.filter((auction: Auction) => {
      return (
        this.filterByType(type, auction) &&
        this.filterByArtistName(artistName, auction) &&
        this.filterByCategory(category, auction) &&
        this.filterByShowFinished(showFinished, auction) &&
        this.filterByShowOngoing(showOngoing, auction)
      );
    });
  }
  
  private filterByType(type: string | null, auction: Auction): boolean {
    return type === null || auction.type === type;
  }
  
  private filterByArtistName(artistName: string | null, auction: Auction): boolean {
    return artistName === null || artistName === "" || auction.artistName.toLowerCase().includes(artistName.toLowerCase());
  }
  
  private filterByCategory(category: string | null, auction: Auction): boolean {
    return category === null || auction.category === category;
  }
  
  private filterByShowFinished(showFinished: boolean | null, auction: Auction): boolean {
    return showFinished === null || auction.isBought === showFinished;
  }
  
  private filterByShowOngoing(showOngoing: boolean | null, auction: Auction): boolean {
    return showOngoing === null || auction.isBought === showOngoing;
  }
}
