import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/shared/models/User.model';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  protected usersTab: User[] = [];
  protected message: string = ""

  public constructor(private route: ActivatedRoute){};

  public ngOnInit(): void {
    this.route.data.subscribe((data) => {
      console.log(data['usersTab']);
      
      this.usersTab = data['usersTab'];   
    });
  }

  protected removeUser(userId: string): void{
    console.log('click');
    
  }



}
