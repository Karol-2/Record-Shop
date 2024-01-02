import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import LoginUser from '../dto/login-user.model';
import Tokens from '../dto/tokens.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  public login(user: LoginUser): Observable<Tokens>{
    return this.httpClient.post<Tokens>("http://localhost:3000/login",user)
  }
}
