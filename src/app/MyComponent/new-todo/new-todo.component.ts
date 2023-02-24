import { ToDo } from './../../Model/to-do';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from 'src/app/Service/todo.service';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css']
})
export class NewTodoComponent {

  todObj:ToDo=new ToDo();

  constructor(private serviceApi:TodoService,
    private router:Router
  ){}

  newTodo(){
    this.serviceApi.createTodo(this.todObj).subscribe(res=>{
      this.router.navigate(['/'])
    })
  }

}
