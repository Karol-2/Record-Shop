import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { TodosService } from '../services/todos.service';
import { Todo } from '../models/Todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoResolver implements Resolve<Todo> {
  constructor(private todoService: TodosService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Todo> {
    return this.todoService.getById(route.params['id'])
  }
}
