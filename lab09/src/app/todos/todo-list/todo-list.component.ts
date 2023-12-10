import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/Todo.model';
import { Router } from '@angular/router';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoList: Todo[] = [];

  constructor(
    private router: Router,
    private toDosService: TodosService,
  ){}

  ngOnInit(): void {
    this.getAll()
  }

  public getAll(){
    this.toDosService.getAll().subscribe((res)=>{
      console.log(res)
      this.todoList = res;
    })
  }

  public delete(id: number){
    this.toDosService.delete(id).subscribe((res)=>{
      console.log("removed" + id)
      console.log(res)
    })
  }
  public goToAdd(){
    this.router.navigate(["form"])
  }
  public goToFormEdit(id: number){
    this.router.navigate(["form", id])
  }
  public showDetails(id: number){
    this.router.navigate(["details",id])
  }
}
