import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss']
})
export class UserPanelComponent {
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

  navigateToOrders() {
    this.router.navigate(['/user/orders']);
  }
}
