import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private route: ActivatedRoute, private loggedUserService: LoggedUserService){}

  public ngOnInit(): void {

    this.loggedUserService.loggedUserChanged().subscribe((user) => {
      if(user){
        this.user = user;
        this.isLoading = false;
      }
      
    });
    this.loggedUserService.loadUserFromLocalStorage();
  }
}
