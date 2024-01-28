import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import LoginUser from '../dto/login-user.model';
import Tokens from '../dto/tokens.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public constructor(private httpClient: HttpClient) { }

  public login(user: LoginUser): Observable<Tokens>{
    return this.httpClient.post<Tokens>("login",user);
  }
}
