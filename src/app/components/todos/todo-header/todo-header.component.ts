import { Component, Input } from '@angular/core';
import { ToDo } from 'src/app/classes/ToDo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html'
})
export class TodoHeaderComponent{
  @Input() todo!: ToDo;

  private _editing = false;
  public get editing() { return this._editing; }


  constructor(
    private todoService: TodoService
  ) {}

  editTitleConfirm(newTitle: string){
    this._editing = false;
    if(!newTitle || newTitle === this.todo.title) return;

    this.todoService.editTodoTitleConfirm(this.todo, newTitle);
  }

  editTitleStart(){
    this._editing = true;
  }

  editTitleCancel(){
    this._editing = false;
  }
}
