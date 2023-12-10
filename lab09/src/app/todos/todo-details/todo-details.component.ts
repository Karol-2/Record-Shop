import { Component, OnInit } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Todo } from '../models/Todo.model';
import { Location } from '@angular/common'
 

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.scss']
})
export class TodoDetailsComponent implements OnInit {

  protected todo!: Todo
  
  constructor(
    private toDosService: TodosService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location

  ){}

  ngOnInit(): void {
    this.route.data.subscribe((data)=>{
      // console.log(data);
      this.todo = data['todo'];
    });

  }

  public delete(id: number){
    this.toDosService.delete(id).subscribe((res)=>{
      console.log("removed" + id)
      console.log(res)
      this.router.navigate(["/list"])
    })
  }

  public goToFormEdit(id: number){
    this.router.navigate(["form", id])
  }

  protected goBack(){
    this.location.back()
  }

}
