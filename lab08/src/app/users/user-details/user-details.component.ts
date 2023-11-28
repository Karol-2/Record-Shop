import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
  providers: [UserService]
})
export class UserDetailsComponent implements OnInit{
  public id!: number;
  protected user!: User;
  protected errorMessage!: string;
  
  public constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {}

  public ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = +params['id'];
      const result = this.userService.getUserById(this.id)
      typeof result === "string" ? this.errorMessage = result: this.user = result;
    });
  }


}
