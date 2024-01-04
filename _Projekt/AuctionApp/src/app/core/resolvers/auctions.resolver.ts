import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { AuctionService } from 'src/app/features/services/auction.service';
import { Auction } from 'src/app/shared/models/Auction.model';

export const auctionsResolver: ResolveFn<Auction[]> = (route, state) => {
  return inject(AuctionService).getAuctions();
};
