import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Type } from 'src/app/shared/enums/Type.enum';
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

  ngOnInit(): void {
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

  ngOnDestroy(): void {
    if (this.queryParamsSubscription) {
      this.queryParamsSubscription.unsubscribe();
    }
  }

  private filterAuctions(): void {
    const type: string | null = this.route.snapshot.queryParamMap.get('type') || null;
    const artistName: string | null = this.route.snapshot.queryParamMap.get('artistName') || null;
    const categoryIdString: string | null = this.route.snapshot.queryParamMap.get('categoryId');
    const categoryId: number | null = categoryIdString ? +categoryIdString : null;
    const showFinished: boolean | null = this.route.snapshot.queryParamMap.get('showFinished') === 'true' || null;

    this.auctions = this.originalAuctions.filter(auction => {
      if (type !== null && auction.type !== type) {
        return false;
      }

      if (artistName !== null && !auction.artistName.toLowerCase().includes(artistName.toLowerCase())) {
        return false;
      }

      if (categoryId !== null && auction.categoryId !== categoryId) {
        return false;
      }

      if (showFinished !== null && auction.isBought !== showFinished) {
        return false;
      } else {
        return true
      }

      return true;
    });
  }

  protected goToForm(): void {
    this.router.navigate(['auctions', 'form']);
  }

}
