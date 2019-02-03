import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
 @Output() addTodo: EventEmitter<any> = new EventEmitter();
  title: string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    const todo = {
      title: this.title,
      completed: false
    };

    // console.log(todo.title);
    if (todo.title !== undefined) {
      this.addTodo.emit(todo);
      document.querySelector('.form > input').value = '';
    } else {
      alert('Cannot add empty fields!');
    }
  }

}
