import { Injectable } from '@angular/core';
import { User } from '../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class LoggedUserService {

  constructor() { }

  private user: User | null = null

  public getLoggedUser(): User | null {return this.user}

  public setLoggedUser(user: null | User){this.user = user}
}
