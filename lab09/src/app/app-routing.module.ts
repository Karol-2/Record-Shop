import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todos/todo-list/todo-list.component';
import { TodoDetailsComponent } from './todos/todo-details/todo-details.component';
import { TodoFormComponent } from './todos/todo-form/todo-form.component';
import { TodoResolver } from './todos/resolvers/todo.resolver';

const routes: Routes = [
  {
    path:"list",
    component: TodoListComponent
  },
  {
    path:"details/:id",
    component: TodoDetailsComponent,
    resolve:{
      todo: TodoResolver
    }
  },
  {
    path:"form",
    component: TodoFormComponent
  },
  {
    path:"form/:id",
    component: TodoFormComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
