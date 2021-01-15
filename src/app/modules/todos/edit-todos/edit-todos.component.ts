import { Todo } from 'src/app/core/models/Todo.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-edit-todos',
  templateUrl: './edit-todos.component.html',
  styleUrls: ['./edit-todos.component.scss'],
})
export class EditTodosComponent implements OnInit {
  @Input() description!: string;
  @Input() title!: string;
  @Output() UpdatedTodo = new EventEmitter<Todo>();
  constructor() {}

  ngOnInit(): void {
    this.UpdatedTodo.emit({
      title: this.title,
      description: this.description,
    });
  }
}
