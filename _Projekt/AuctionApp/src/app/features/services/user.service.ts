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
    return this.httpClient.get<User[]>("users")
  }

  public getUser(id: string): Observable<User>{
    return this.httpClient.get<User>("users/" + id)
  }

  public updateUser(id: string, user: UpdateUser): Observable<User>{
    return this.httpClient.put<User>("users/" + id,user)
  }
  public deleteUser(id: string): Observable<String>{
    return this.httpClient.delete<String>("users/" + id) //TODO: you shure?
  }
}
