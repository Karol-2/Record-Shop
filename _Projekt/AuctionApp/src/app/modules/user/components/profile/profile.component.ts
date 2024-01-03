import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/User.model';
import { LoggedUserService } from 'src/app/shared/services/logged-user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  protected user!: User;

  constructor(private loggedUserService: LoggedUserService, private router:Router){}

  public ngOnInit(): void {
    const response: string | null = localStorage.getItem("loggedUser");
    console.log("response",response);
    
    if(response){
      this.user = JSON.parse(response); //TODO: Add resolver for getting user
    } else {
      this.router.navigate(["403"]) //TODO: 403 page
    }
  }
}
