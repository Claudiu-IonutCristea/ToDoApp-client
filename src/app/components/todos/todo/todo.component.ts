import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ITodoChangedEvtArgs, ToDo, TodoChangedTypes } from '../../../classes/ToDo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html'
})
export class TodoComponent implements OnInit{
  @Input() todo?: ToDo;
  @Output() todoChanged = new EventEmitter<ITodoChangedEvtArgs>;

  constructor() {}

  ngOnInit(): void {
    if(!this.todo) throw new Error(`Input todo not set for ${this}`);
  }

  deleteTodo(){
    this.todoChanged.emit({
      sender: this,
      type: TodoChangedTypes.deleteTodo,
      todo: this.todo,
    })
  }

  emitEventFromChild(args: ITodoChangedEvtArgs){
    this.todoChanged.emit({
      sender: args.sender,
      type: args.type,
      todo: args.todo ? args.todo : this.todo,
      item: args.item,
      textValue: args.textValue,
    })
  }
}
