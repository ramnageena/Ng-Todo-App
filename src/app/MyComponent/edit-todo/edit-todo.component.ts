import { TodoService } from 'src/app/Service/todo.service';
import { Component } from '@angular/core';
import { ActivatedRoute,  Router } from '@angular/router';
import { ToDo } from 'src/app/Model/to-do';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent {
  id!:number
  todo!:ToDo

  constructor(private serviceApi:TodoService,
    private route:ActivatedRoute,
    private router:Router) {

  }

  ngOnInit(): void {
   this.id=this.route.snapshot.params['id']
    this.serviceApi.getSingleTodo(this.id).subscribe(res=>{
      this.todo=res;
    })
  }

  updateTodo(){
    this.serviceApi.editTodo(this.id,this.todo).subscribe(res=>{
      this.router.navigate(['/'])
    })
  }

}
