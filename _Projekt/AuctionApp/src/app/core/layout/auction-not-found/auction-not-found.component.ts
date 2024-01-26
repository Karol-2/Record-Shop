import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Navigation, Router } from '@angular/router';

@Component({
  selector: 'app-auction-not-found',
  templateUrl: './auction-not-found.component.html',
  styleUrls: ['./auction-not-found.component.scss']
})
export class AuctionNotFoundComponent{

  constructor(private router: Router){}

  protected goToSearch(): void{
    this.router.navigate(['auctions','search'])
  }

}
