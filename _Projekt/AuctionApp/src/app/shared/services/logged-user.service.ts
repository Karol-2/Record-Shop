import { Injectable } from '@angular/core';
import { User } from '../models/User.model';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggedUserService {

  private userSubject: BehaviorSubject<User | null>;

  constructor() {
    const storedUser = localStorage.getItem('loggedUser');
    this.userSubject = new BehaviorSubject<User | null>(storedUser ? JSON.parse(storedUser) : null);
  }

  get loggedUserChanged() {
    return this.userSubject.asObservable();
  }

  getLoggedUser(): User | null {
    const localData: string | null = localStorage.getItem('loggedUser');
    if(localData){
      const user: User | null = JSON.parse(localData);
      return user;
    }
    return null;
  }

  setLoggedUser(user: User ): void {
    this.userSubject.next(user);
    localStorage.setItem('loggedUser', JSON.stringify(user));
  }

  logout(): void{
    this.userSubject.next(null);
    localStorage.removeItem('loggedUser');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('accessToken');
  }
}
