import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserService } from '../../shared/services/user.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit{
  public id!: string;
  protected user!: User;
  protected errorMessage!: string;
  
  public constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {}

  public ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
      const result = this.userService.getUserById(this.id)
      typeof result === "string" ? this.errorMessage = result: this.user = result;
    });
  }


}
