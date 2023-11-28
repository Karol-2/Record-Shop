import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from '../user.type';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit{
  public id!: number;
  protected user!: User;
  
  public constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location,
  ) {}

  public ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      const state = this.location.getState();
      console.log('params', params);
      console.log('state', state);

      this.id = +params['id'];


    });
  }


}
