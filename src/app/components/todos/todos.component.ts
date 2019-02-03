import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/Todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

   todos: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    // this.todos = this.todoService.getTodos();

    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });

    // this.todos = [
    //   {
    //     id: 1,
    //     title: 'Todo One',
    //     completed: false
    //   },
    //   {
    //     id: 2,
    //     title: 'Get beer',
    //     completed: true
    //   },
    //   {
    //     id: 3,
    //     title: 'Sleep!',
    //     completed: false
    //   }
    // ];
  }

  deleteTodo(todo: Todo) {
    // console.log(todo);
    this.todos = this.todos.filter(t => t.id !== todo.id);
    this.todoService.deleteTodo(todo).subscribe();
  }

  addTodo(todo: Todo) {
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
    });
  }
}
