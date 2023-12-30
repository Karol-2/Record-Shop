import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  private adminUsername: string = "admin"
  private adminPassword: string = "admin";

  public getUsername(): string{
    return this.adminUsername;
  }

  public loginUser(username: string, password: string): boolean{
    if( username === this.adminUsername && this.adminPassword === password){
      localStorage.setItem("user","admin")
      return true
    }
    return false
  }

  public logout(){
    localStorage.removeItem("user")
  }

  public isUserLoggedIn(): boolean{
    return localStorage.getItem("user") ? true : false;
  }
}
