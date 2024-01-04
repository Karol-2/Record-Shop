import { Injectable } from '@angular/core';
import { User } from '../models/User.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggedUserService {

  private currentUser: User | null = null;
  private userSubject = new Subject<User | null>();

  constructor() {
    this.loadUserFromLocalStorage();
  }

  private loadUserFromLocalStorage(): void {
    const storedUser = localStorage.getItem('loggedUser');
    if (storedUser) {
      this.currentUser = JSON.parse(storedUser);
      this.notifyUserChange();
    }
  }

  loggedUserChanged(): Subject<User | null> {
    return this.userSubject;
  }

  getLoggedUser(): User | null {
    return this.currentUser;
  }

  setLoggedUser(user: User ): void {
    this.currentUser = user;
    localStorage.setItem('loggedUser', JSON.stringify(user));
    this.notifyUserChange()
  }

  logout(): void{
    this.currentUser = null;
    localStorage.removeItem('loggedUser');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('accessToken');
    this.notifyUserChange();
  }

  private notifyUserChange(): void {
    this.userSubject.next(this.currentUser);
  }
  
}

