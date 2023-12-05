import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { TodoFormComponent } from './todo-form/todo-form.component';



@NgModule({
  declarations: [
    TodoListComponent,
    TodoDetailsComponent,
    TodoFormComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    TodoListComponent
  ]
})
export class TodosModule { }
