import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuctionService } from 'src/app/features/services/auction.service';

@Component({
  selector: 'app-admin-options',
  templateUrl: './admin-options.component.html',
  styleUrls: ['./admin-options.component.scss']
})
export class AdminOptionsComponent {
  @Input() public auctionId: string = "";

  protected showModal: boolean = false;
  protected message: string = "";

  public constructor(private router: Router, private auctionService: AuctionService,){};

  protected editAuction(): void{
    this.router.navigate(["auctions","form", this.auctionId])
  }

  protected deleteAuction(): void{
    this.auctionService.deleteAuction(this.auctionId).subscribe({
      next: ()=>{this.router.navigate(["auctions"])},
      error: (err: HttpErrorResponse) => {this.message = err.error.message},
      complete: ()=>{this.changeVisibility()}
    })
  }

  protected changeVisibility(): void{
    this.showModal = !this.showModal;
  }

}
