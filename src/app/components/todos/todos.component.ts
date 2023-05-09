import { Component, Input } from '@angular/core';
import { ToDo, IToDoItem } from 'src/app/Classes/ToDo';
import { TODOs } from 'src/app/mock-todos';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalConfirmDeleteTodoComponent } from '../modals/modal-confirm-delete-todo/modal-confirm-delete-todo.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html'
})

export class TodosComponent{
  todos: ToDo[] = TODOs;

  constructor(
    private modalService: NgbModal
    ) {}

  addNewItem(todo: ToDo, text: string){
    if(text){
     todo.todoItems.push({
       text: text,
       completed: false
      })
    }
    
  }

  addTodo(title: string){
    if(title){
      this.todos.unshift(new ToDo(title));
    }
  }

  updateCheck(item: IToDoItem){
    item.completed = !item.completed;
  }

  deleteItem(todo: ToDo, item: IToDoItem){
    const i: number = todo.todoItems.indexOf(item);
    todo.todoItems.splice(i, 1);
  }

  deleteTodo(todo: ToDo){
    const modalRef = this.modalService.open(ModalConfirmDeleteTodoComponent);
    modalRef.componentInstance.todoName = todo.title;
    modalRef.componentInstance.delete.subscribe(() => {
      const i: number = this.todos.indexOf(todo, 0);
      this.todos.splice(i, 1);
    })
  }
}
