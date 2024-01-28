import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private route: ActivatedRoute, private router: Router) {}

  public ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.originalAuctions = data['auctions'].auctions;
      this.filterAuctions();
    });

    this.queryParamsSubscription = this.route.queryParams.subscribe(params => {
      if (params) {
        this.filterAuctions();
      }
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

    this.auctions = this.originalAuctions.filter(auction => {
      if (type !== null && auction.type !== type) {
        return false;
      }

      if (artistName !== null && !auction.artistName.toLowerCase().includes(artistName.toLowerCase())) {
        return false;
      }

      if (category !== null && auction.category !== category) {
        return false;
      }

      if (showFinished !== null && auction.isBought !== showFinished) {
        return false;
      }

      if(showOngoing !== null && auction.isBought === showOngoing ) {
        return false
      }

      return true;
    });
  }
}
