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

  constructor(private router: Router, private loggedUserService: LoggedUserService) {}

  public ngOnInit(): void {
    this.user = this.loggedUserService.getLoggedUser();
  }

  navigateToDetails() {
    this.router.navigate(['/user/details']);
  }

  navigateToEdit() {
    this.router.navigate(['/user/edit']);
  }

  navigateToAuctions() {
    this.router.navigate(['/user/auctions']);
  }

  navigateToUserManagemenet() {
    this.router.navigate(['/user/manage']);
  }
}
