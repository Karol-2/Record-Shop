import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {

  constructor(private router: Router) {}

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
