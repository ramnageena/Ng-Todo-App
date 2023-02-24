import { ToDo } from './../../Model/to-do';
import { Component } from '@angular/core';
import { TodoService } from 'src/app/Service/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  allTodo!:ToDo[]

  constructor(private serviceApi:TodoService,

  ){}

  ngOnInit(): void {
    this.getAllTodo();

    }

  getAllTodo(){
    this.serviceApi.getAllTodo().subscribe(res=>{
      this.allTodo=res;
    })

  }


  deleteTodo(id:number){
    this.serviceApi.deleteTodo(id).subscribe(res=>{
      this.getAllTodo();
    })

  }
}
