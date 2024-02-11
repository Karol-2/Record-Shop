import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/User.model';
import { LoggedUserService } from 'src/app/shared/services/logged-user.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit{

  protected user!: User|null;

  public constructor(private router: Router, private loggedUserService: LoggedUserService) {}

  public ngOnInit(): void {
    this.user = this.loggedUserService.getLoggedUser();
  }

  protected navigateToDetails(): void {
    this.router.navigate(['user','details']);
  }

  protected navigateToEdit(): void {
    this.router.navigate(['user','edit']);
  }

  protected navigateToAuctions(): void {
    this.router.navigate(['user','auctions']);
  }

  protected navigateToUserManagemenet(): void {
    this.router.navigate(['user','manage']);
  }

  protected navigateToAddForm(): void{
    this.router.navigate(['auctions','form']);
  }
}
