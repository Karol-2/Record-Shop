import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuctionService } from 'src/app/features/services/auction.service';
import { Auction } from 'src/app/shared/models/Auction.model';
import { LoggedUserService } from 'src/app/shared/services/logged-user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  @Input() public auction!:Auction;
  protected userId: string | null = null;
  protected showModal: boolean = false;
  protected message: string = ""

  public constructor(private loggedUserService: LoggedUserService, private auctionService: AuctionService, private router: Router){}

  public ngOnInit(): void {
    const response: string | undefined = this.loggedUserService.getLoggedUser()?.id
    if (response){
      this.userId = response
    } else {
      this.message = "You need to log in to buy an auction";
    }
  }

  protected changeVisibility(): void{
    if(this.userId){
      this.showModal = !this.showModal;
    }
    
  }

  protected buyAuction(): void{
    if (this.userId){
      const updatedAuction: Auction = {
        ...this.auction, 
        isBought: true, 
        buyerId: this.userId, 
        dateBought: new Date() }

        this.auctionService.updateAuction(this.auction.id,updatedAuction).subscribe({
          next: ()=>{this.message == "success"; this.router.navigate(["user","auctions"])},
          error: (error: HttpErrorResponse) => {this.message == "Error: " + error.error},
          complete: ()=>{this.changeVisibility()}
        })
    }
    this.message = "You need to log in to buy an auction"
    
    
  }
  
}
