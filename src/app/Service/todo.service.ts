import { ToDo } from './../Model/to-do';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

   baseUrl="http://localhost:3000/task"

  constructor(private http:HttpClient) { }

  //get all todo

  getAllTodo():Observable<ToDo[]>{
    return this.http.get<ToDo[]>(`${this.baseUrl}`)
  }

  //create a new todo

  createTodo(todo:ToDo):Observable<Object>{
    return this.http.post(`${this.baseUrl}`,todo)
  }

  //delete a todo

  deleteTodo(id :number):Observable<Object>{
 return this.http.delete(`${this.baseUrl}/${id}`)
  }

  //get single todo

  getSingleTodo(id:number):Observable<ToDo>{
    return this.http.get<ToDo>(`${this.baseUrl}/${id}`)
  }


    //edit the todo
    editTodo(id:number, todo:ToDo):Observable<Object>{
      return this.http.put(`${this.baseUrl}/${id}`,todo)
    }


}
