import { Component, OnInit } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Todo } from '../models/Todo.model';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.scss']
})
export class TodoDetailsComponent implements OnInit {

  protected todo!: Todo
  
  constructor(
    private toDosService: TodosService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: Params)=> this.toDosService.getById(params['id'])),
      tap((res)=>{
          console.log(res)
      })
    ).subscribe()

  }

}
