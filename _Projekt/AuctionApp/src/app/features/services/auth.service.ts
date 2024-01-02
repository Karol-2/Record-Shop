import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import LoginUser from '../dto/login-user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  public login(user: LoginUser): Observable<Token>{
    return this.httpClient.post<Token>("http://localhost:3000/login",user)
  }
}
