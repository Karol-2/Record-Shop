import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { Todo } from '../models/Todo.model';
import { TodoCreate } from '../models/TodoCreate.model';
import { TodosService } from '../services/todos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  protected newTodo: TodoCreate = {
    name: '',
    isComplete: false,
  }
  protected error: boolean = false;
  protected errorMessage: String = "";

  protected isEditMode: boolean = false;
  protected todoID: number = -1;

  constructor(
    private location: Location,
    private todoService: TodosService,
    private route: ActivatedRoute,
    private router: Router


  ){}

  public ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params['id']) {
        this.isEditMode = true;
        this.todoID = +params['id']

        this.todoService.getById(this.todoID).subscribe((todo: Todo)=>{
          this.newTodo.name = todo.name;
          this.newTodo.isComplete = todo.isComplete;
        },
        (error: HttpErrorResponse)=> {console.log("ERROR",error)})
      }
    })
  }

  protected addTodo(){
    console.log(this.newTodo)
    if(this.isEditMode){
      this.todoService.update(this.todoID,this.newTodo)
      .subscribe({
        next: ()=> console.log("zaktualizowano"),
        error: (err: HttpErrorResponse) => {
          console.log("ERROR:",err)
          this.error = true;
          this.errorMessage = String(err);
        }
      })
    }
    else{
      
      this.todoService.create(this.newTodo)
      .subscribe({
        next: ()=> console.log("dodano"),
        error: (err: HttpErrorResponse) => {
          console.log("ERROR:",err)
          this.error = true;
          this.errorMessage = String(err);
        }
      })
    }
      
  }

  protected goBack(){
    this.location.back()
  }
}
