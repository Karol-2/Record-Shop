import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/shared/models/User.model';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  protected usersTab: User[] = [];

  public constructor(private route: ActivatedRoute){};

  public ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.usersTab = data['usersTab'];   
    });

  }

  public onUserRemoved(users: User[]): void {
   this.usersTab = users;
  }

  
}
