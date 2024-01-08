import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/features/services/user.service';
import { Auction } from 'src/app/shared/models/Auction.model';
import { User } from 'src/app/shared/models/User.model';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  protected usersTab: User[] = [];
  protected auctionsTab: Auction[] = [];

  public constructor(private route: ActivatedRoute){};

  public ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.usersTab = data['usersTab'];   
    });

    this.route.data.subscribe((data) => {
      this.auctionsTab = data['auctionsTab'].auctions;   
    });
  }

  
}
