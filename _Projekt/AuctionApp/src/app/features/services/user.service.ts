import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/User.model';
import UpdateUser from '../dto/update-user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  public getAllUsers(): Observable<User[]>{
    return this.httpClient.get<User[]>("http://localhost:3000/users")
  }

  public getUser(id: string): Observable<User>{
    return this.httpClient.get<User>("http://localhost:3000/users/" + id)
  }

  public updateUser(id: string, user: UpdateUser): Observable<UpdateUser>{
    return this.httpClient.put<UpdateUser>("http://localhost:3000/users/" + id,user)
  }
  //TODO: Add interceptor for localhost:3000
}
