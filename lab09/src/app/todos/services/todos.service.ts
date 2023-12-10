import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo.model';
import { Observable } from 'rxjs';
import { TodoCreate } from '../models/TodoCreate.model';

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

  public update(todoId: number,todo: TodoCreate): Observable<TodoCreate>{
    return this.httpClient.put<TodoCreate>('http://localhost:3000/todos/'+todoId, todo)
  }

  public create(todo: TodoCreate): Observable<TodoCreate>{
    return this.httpClient.post<TodoCreate>('http://localhost:3000/todos/', todo)
  }
  public delete(id: number): Observable<Todo>{
    return this.httpClient.delete<Todo>(`http://localhost:3000/todos/${id}`)
  }

}
