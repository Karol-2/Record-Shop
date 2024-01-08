import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Auction } from 'src/app/shared/models/Auction.model';
import { User } from 'src/app/shared/models/User.model';
import { LoggedUserService } from 'src/app/shared/services/logged-user.service';

@Component({
  selector: 'app-user-auctions',
  templateUrl: './user-auctions.component.html',
  styleUrls: ['./user-auctions.component.scss']
})
export class UserAuctionsComponent implements OnInit {
  protected auctions: Auction[] = [];
  protected user!: User;

  public constructor(private route:ActivatedRoute, private loggedUserService: LoggedUserService){};

  public ngOnInit(): void {

    this.loggedUserService.loggedUserChanged().subscribe((user) => {
      if(user){
        this.user = user;
      }
      
    });
    this.loggedUserService.loadUserFromLocalStorage();

    this.route.data.subscribe((data) => {
      const result: Auction[] = data['auctions'].auctions;

      this.auctions = result.filter((auction: Auction)=> auction.buyerId === this.user.id)      
    });
  }

}
