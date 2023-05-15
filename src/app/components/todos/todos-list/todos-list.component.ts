import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ToDo } from 'src/app/classes/ToDo';
import { StorageService } from 'src/app/services/storage.service';
import { ITodoChangedEventArgs, TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html'
})

export class TodosListComponent implements OnInit, OnDestroy{
  @Input() useLocalStorage = false;

  todos = new Array<ToDo>;

  constructor(
    private storageService: StorageService,
    private todoService: TodoService,
  ) {}

  ngOnInit(): void {
    this.todos = this.storageService.getTodosFromStorage(this.useLocalStorage);

    this.todoService.todoChanged.subscribe(args => {
      this.onTodoChanged(args);
    })
  }

  ngOnDestroy(): void {
    this.todoService.todoChanged.unsubscribe();
  }

  onTodoChanged(changes: ITodoChangedEventArgs){
    this.storageService.save(this.useLocalStorage, this.todos, changes)
  }

  addTodo(title: string){
    if(!title) return;

    this.todoService.newTodo(this.todos, title);
  }
}
