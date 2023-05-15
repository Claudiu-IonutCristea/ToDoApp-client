import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ToDo, IToDoItem } from 'src/app/classes/ToDo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html'
})

export class TodoItemComponent implements OnInit, OnDestroy {
  @Input() item!: IToDoItem;
  @Input() todo!: ToDo;

  private _editing = false;
  public get editing() { return this._editing; }

  constructor(
    private todoService: TodoService
    ) {}

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    
  }


  deleteItem(){
    this.todoService.deleteItem(this.todo, this.item);
  }

  updateCheck(){
    this.todoService.itemCheckChanged(this.todo, this.item);
  }

  editTextStart(){
    this._editing = true;
  }

  editTextConfirm(newText: string){
    this._editing = false;
    if(!newText || newText === this.item.text) return;

    this.todoService.editItemTextConfirm(this.todo, this.item, newText);
  }

  editTextCancel(){
    this._editing = false;
  }

}
