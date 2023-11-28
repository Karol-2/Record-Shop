import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  private testObj: User = {id: 1, imie: "Karol", nazwisko: "Krawczykiewicz", kodPocztowy: "82-200", wiek: 21}
  
  private userList: User[] = [this.testObj]

  public getUserList(): User[]{
    return this.userList;
  }
  public getUserById(id: number): User | string{
    const foundUser: User | undefined = this.userList.find((user)=> user.id === id);
    if(foundUser){
      return foundUser;
    }
    return `Nie znaleziono użytkownika z id: ${id}`
  }
  
  public addUser(user:User): void{
    this.userList.push(user);
  }
}
