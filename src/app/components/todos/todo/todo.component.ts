import { Component, Input } from '@angular/core';
import { ToDo } from '../../../classes/ToDo';
import { TodoService } from 'src/app/services/todo.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html'
})
export class TodoComponent{
  @Input() todo!: ToDo;
  @Input() parentList!: ToDo[];

  constructor(
    private todoService: TodoService
  ) {}

  deleteTodo(){
    this.todoService.deleteTodo(this.parentList, this.todo);
  }
}
