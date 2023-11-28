import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'], 
  providers: [UserService]
})
export class UserListComponent implements OnInit{
  public userList!: User[];

  public constructor( 
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    ){}

  public ngOnInit(): void {
      this.userList = this.userService.getUserList();
    }
  
  protected details(user: User): void{
    this.router.navigate([user.id],{ relativeTo: this.activatedRoute})
  }
}
