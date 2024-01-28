import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuctionService } from 'src/app/features/services/auction.service';
import { User } from 'src/app/shared/models/User.model';
import { LoggedUserService } from 'src/app/shared/services/logged-user.service';

@Component({
  selector: 'app-admin-options',
  templateUrl: './admin-options.component.html',
  styleUrls: ['./admin-options.component.scss']
})
export class AdminOptionsComponent implements OnInit {
  @Input() public auctionId: string = "";

  protected showModal: boolean = false;
  protected message: string = "";
  protected user!: User | null;

  public constructor(private router: Router, private auctionService: AuctionService, private loggedUserService: LoggedUserService){}

  public ngOnInit(): void {
    this.user = this.loggedUserService.getLoggedUser();
  }

  protected editAuction(): void{
    this.router.navigate(["auctions","form", this.auctionId]);
  }

  protected deleteAuction(): void{
    this.auctionService.deleteAuction(this.auctionId).subscribe({
      next: ()=>{this.router.navigate(["auctions"]);},
      error: (err: HttpErrorResponse) => {this.message = err.error.message;},
      complete: ()=>{this.changeVisibility();}
    });
  }

  protected changeVisibility(): void{
    this.showModal = !this.showModal;
  }

}
