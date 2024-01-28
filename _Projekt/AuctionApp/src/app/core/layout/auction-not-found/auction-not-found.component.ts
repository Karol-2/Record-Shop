import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auction-not-found',
  templateUrl: './auction-not-found.component.html',
  styleUrls: ['./auction-not-found.component.scss']
})
export class AuctionNotFoundComponent{

  public constructor(private router: Router){}

  protected goToSearch(): void{
    this.router.navigate(['auctions','search']);
  }

}
