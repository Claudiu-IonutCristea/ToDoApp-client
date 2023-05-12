import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { ToDo, ITodoChangedEvtArgs, TodoChangedTypes } from 'src/app/classes/ToDo';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html'
})
export class TodoHeaderComponent implements OnInit{
  @Input() todo?: ToDo;
  @Output() headerChanged = new EventEmitter<ITodoChangedEvtArgs>;

  editing = false;

  constructor() {}

  ngOnInit(): void {
    if(!this.todo) throw new Error(`Input todo not set for ${this}`);
  }

  editTitle(newTitle: string){
    this.headerChanged.emit({
      sender: this,
      type: TodoChangedTypes.updateTodo,
      todo: this.todo,
      textValue: newTitle,
    })
  }
}
