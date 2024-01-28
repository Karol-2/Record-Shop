import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/User.model';
import { LoggedUserService } from 'src/app/shared/services/logged-user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  protected user!: User;
  protected isLoading: boolean = true;

  public constructor( private loggedUserService: LoggedUserService){}

  public ngOnInit(): void {

    this.loggedUserService.loggedUserChanged().subscribe((user: User | null) => {
      if(user){
        this.user = user;
        this.isLoading = false;
      }
      
    });
    this.loggedUserService.loadUserFromLocalStorage();
  }
}
