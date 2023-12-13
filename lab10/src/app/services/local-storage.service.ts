import { Injectable } from '@angular/core';
import { User } from '../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private userList: User[] = [];

  constructor() {}

  public getUserList(){
    return this.userList;
  }

  public loadUsers(){
    this.userList = JSON.parse(localStorage.getItem('users')!) || [];
  }

  public addUser(user: User){
    this.userList.push(user);
    this.changeData(this.userList)
  }
  public changeData(newUsers: User[]): void{
    localStorage.setItem('users',JSON.stringify(newUsers))
    
  }
}
