import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../Todo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent implements OnInit{
onCheckBoxClick(arg0: Todo) {
}

  @Input() todo!: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  onClick(todo:Todo) {
    this.todoDelete.emit(todo);
    console.log("Onclick Triggered")
  }
  constructor(){}
  ngOnInit(): void {
  }
}
