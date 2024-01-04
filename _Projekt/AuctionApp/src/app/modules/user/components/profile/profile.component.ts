import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/shared/models/User.model';
import { LoggedUserService } from 'src/app/shared/services/logged-user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  protected user!: User;

  constructor(private route: ActivatedRoute){}

  public ngOnInit(): void {
    this.route.data.subscribe((data) => {
      console.log('data', data);
      this.user = data['user'];
    });

  }
}
