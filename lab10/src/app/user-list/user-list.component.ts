import { Component, OnInit } from '@angular/core';
import { User } from '../models/User.model';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  protected userList: User[] = []
  constructor(private localStorageService: LocalStorageService){}

  ngOnInit(): void {
    this.userList = this.localStorageService.getUserList();
  }


}
