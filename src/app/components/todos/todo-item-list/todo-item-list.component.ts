import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ToDo, IToDoItem, ITodoChangedEvtArgs, TodoChangedTypes } from 'src/app/classes/ToDo';

@Component({
  selector: 'app-todo-item-list',
  templateUrl: './todo-item-list.component.html'
})
export class TodoItemListComponent implements OnInit{
  @Input() todo? : ToDo;
  @Output() todoChanged = new EventEmitter<ITodoChangedEvtArgs>;

  constructor() {}

  ngOnInit(): void {
    if(!this.todo) throw new Error(`Input todo not set for ${this}`);
  }

  addNewItem(text: string){
    this.todoChanged.emit({
      sender: this,
      type: TodoChangedTypes.newItem,
      todo: this.todo,
      textValue: text,
    })
  }

  emitEventFromChild(args: ITodoChangedEvtArgs){
    this.todoChanged.emit({
      sender: args.sender,
      type: args.type,
      todo: this.todo,
      item: args.item,
      textValue: args.textValue,
    })
  }
}


