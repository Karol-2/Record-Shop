import { Component } from '@angular/core';
import { User } from '../data/models/user.model';
import userObj from '../data/objects/user.object';

@Component({
  selector: 'app-user-details-component',
  templateUrl: './user-details-component.component.html',
  styleUrls: ['./user-details-component.component.scss']
})
export class UserDetailsComponentComponent {
  private user: User = userObj;

  protected getName(): string {
    return 'Nazywasz się ' + this.user.firstName + ' '+ this.user.lastName
  }
}
