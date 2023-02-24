import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './MyComponent/todo-list/todo-list.component';
import { EditTodoComponent } from './MyComponent/edit-todo/edit-todo.component';
import { NewTodoComponent } from './MyComponent/new-todo/new-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    EditTodoComponent,
    NewTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
