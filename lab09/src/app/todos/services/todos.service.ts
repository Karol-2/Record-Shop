import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAll(): Observable<Todo[]>{
    return this.httpClient.get<Todo[]>('http://localhost:3000/todos')
  }

  public getById(id: number): Observable<Todo>{
    return this.httpClient.get<Todo>(`http://localhost:3000/todos/${id}`)
  }

  public create(todo: Todo): Observable<Todo>{
    return this.httpClient.post<Todo>('http://localhost:3000/todos/', todo)
  }
  public delete(id: number): Observable<Todo>{
    return this.httpClient.delete<Todo>(`http://localhost:3000/todos/${id}`)
  }

}
