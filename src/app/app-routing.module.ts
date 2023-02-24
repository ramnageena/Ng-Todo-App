import { EditTodoComponent } from './MyComponent/edit-todo/edit-todo.component';
import { NewTodoComponent } from './MyComponent/new-todo/new-todo.component';
import { TodoListComponent } from './MyComponent/todo-list/todo-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:"todoList",pathMatch:'full'},
  {path:"todoList" ,component:TodoListComponent},
  {path:"addTodo", component:NewTodoComponent},
  {path:"editTodo/:id", component:EditTodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
