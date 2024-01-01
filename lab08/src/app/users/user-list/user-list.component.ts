import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'], 
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