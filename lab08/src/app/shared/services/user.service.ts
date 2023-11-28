import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  
  private userList: User[] = []

  public getUserList(): User[]{
    return this.userList;
  }
  public getUserById(id: string): User | string{
    const foundUser: User | undefined = this.userList.find((user)=> String(user.id) === id);
    if(foundUser){
      return foundUser;
    }
    return `Nie znaleziono użytkownika z id: ${id}`
  }
  
  public addUser(user:User): void{
    this.userList = [...this.userList, user]
    console.log(this.userList);
  }
}
