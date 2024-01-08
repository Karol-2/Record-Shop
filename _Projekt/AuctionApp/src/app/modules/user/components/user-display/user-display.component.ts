import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { UserService } from 'src/app/features/services/user.service';
import { Auction } from 'src/app/shared/models/Auction.model';
import { User } from 'src/app/shared/models/User.model';

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.scss']
})
export class UserDisplayComponent {
  @Input() public user!: User;
  @Input() public auctionsTab!: Auction[];
  protected message: string = "";

  public constructor(private userService: UserService){};

  protected removeUser(userId: string): void{
    console.log('click');
    const usersAuctions: Auction[] = this.auctionsTab.filter((auction: Auction) => auction.buyerId === userId)
    if(usersAuctions.length > 0){
      this.message = "Cannot remove user with existing auctions! You have to delete auctions ("+ usersAuctions.length+ ") that this user bought in order to delete this user."
      return
    }

    this.userService.deleteUser(userId).subscribe({
      next: ()=>{this.message = "Success"},
      error: (error: HttpErrorResponse)=> {this.message = "ERROR, " + error.error.mess}
    })
    
  }
}
