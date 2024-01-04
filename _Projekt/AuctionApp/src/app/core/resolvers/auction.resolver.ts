import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import Message from 'src/app/features/dto/message.model';
import { AuctionService } from 'src/app/features/services/auction.service';
import { Auction } from 'src/app/shared/models/Auction.model';

export const auctionResolver: ResolveFn<Auction | Message> = (route, state) => {
  return inject(AuctionService).getAuction(route.params['id']); //TODO: do smth with message
};

