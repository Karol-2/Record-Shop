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

  public loggedUserChanged(): Subject<User | null> {
    return this.userSubject;
  }

  public getLoggedUser(): User | null {
    return this.currentUser;
  }

  public setLoggedUser(user: User ): void {
    this.currentUser = user;
    localStorage.setItem('loggedUser', JSON.stringify(user));
    this.notifyUserChange()
  }

  public logout(): void{
    this.currentUser = null;
    localStorage.removeItem('loggedUser');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('accessToken');
    this.notifyUserChange();
  }

  public loadUserFromLocalStorage(): void {
    const storedUser: string | null = localStorage.getItem('loggedUser');
    if (storedUser) {
      
      const parsedUser= JSON.parse(storedUser);
      this.currentUser = this.deserializeUser(parsedUser.user);
      this.notifyUserChange();
    }
  }

  private deserializeUser(user: any): User | null {
    if (user) {
      return {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password
      };
    }
    return null;
  }

  private notifyUserChange(): void {
    this.userSubject.next(this.currentUser);
  }
  
}

