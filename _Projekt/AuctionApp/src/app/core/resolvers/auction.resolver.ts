import { inject } from '@angular/core';
import { NavigationExtras, ResolveFn, Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { AuctionService } from 'src/app/features/services/auction.service';
import { Auction } from 'src/app/shared/models/Auction.model';

export const auctionResolver: ResolveFn<Auction | null> = (route, state) => {

  const auctionId = route.params['id'];
  const auctionService: AuctionService = inject(AuctionService);
  const router: Router = inject(Router);

    return auctionService.getAuction(auctionId).pipe(
      catchError(error => {
        if (error.status === 404) {
          router.navigate(['/auction-404']);
          return of(null); 
        } else {
          console.error('Error occurred while resolving auction:', error);
          throw error;
        }
      })
    );

};