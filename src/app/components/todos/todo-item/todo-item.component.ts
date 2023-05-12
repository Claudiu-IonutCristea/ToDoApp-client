import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ToDo, IToDoItem, ITodoChangedEvtArgs, TodoChangedTypes } from 'src/app/classes/ToDo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html'
})

export class TodoItemComponent implements OnInit{
  @Input() item?: IToDoItem;
  @Output() itemChanged = new EventEmitter<ITodoChangedEvtArgs>;

  editing = false;
  
  constructor() {}

  ngOnInit(): void {
    if(!this.item) throw new Error(`Input item not set for ${this}`);
  }

  deleteItem(){
    this.itemChanged.emit({
      sender: this,
      type: TodoChangedTypes.deleteItem,
      item: this.item,
    });
  }

  updateCheck(){
    this.itemChanged.emit({
      sender: this,
      type: TodoChangedTypes.updateItemCheck,
      item: this.item,
    });
  }

  editText(newText: string){
    this.itemChanged.emit({
      sender: this,
      type: TodoChangedTypes.updateItem,
      item: this.item,
    })
  }
}
