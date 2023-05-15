import { Component, Input } from '@angular/core';
import { ToDo, IToDoItem } from 'src/app/classes/ToDo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-item-list',
  templateUrl: './todo-item-list.component.html'
})
export class TodoItemListComponent {
  @Input() todo!: ToDo;

  constructor(
    private todoService: TodoService
  ) {}

  addNewItem(text: string){
    if(!text) return;

    this.todoService.newItem(this.todo, text);
  }
}


