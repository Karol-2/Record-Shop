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
    return this.userSubject.value;
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
