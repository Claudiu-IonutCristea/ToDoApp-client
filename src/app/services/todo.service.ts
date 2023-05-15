import { Injectable, EventEmitter } from '@angular/core';
import { IToDoItem, ToDo } from '../classes/ToDo';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalConfirmDeleteTodoComponent } from '../components/modals/modal-confirm-delete-todo/modal-confirm-delete-todo.component';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public todoChanged = new EventEmitter<ITodoChangedEventArgs>();

  constructor(
    private modalService: NgbModal
  ) { }

  public newItem(todo: ToDo, itemText: string){
    const newItem: IToDoItem = {
      text: itemText,
      completed: false,
    }

    todo.todoItems.push(newItem);

    this.todoChanged.emit({
      type: TodoChangedTypes.newItem,
      todo: todo,
      item: newItem,
    })
  }

  public newTodo(todoList: ToDo[], title: string){
    const newTodo = new ToDo(title);

    todoList.unshift(newTodo);

    this.todoChanged.emit({
      type: TodoChangedTypes.newToDo,
      todo: newTodo,
      text: title,
    })
  }

  public deleteItem(todo: ToDo, item: IToDoItem){
    const i = todo.todoItems.indexOf(item);
    todo.todoItems.splice(i, 1);

    this.todoChanged.emit({
      type: TodoChangedTypes.deleteItem,
      todo: todo,
      item: item,
    })
  }

  public deleteTodo(todoList: ToDo[], todo: ToDo){
    const modalRef = this.modalService.open(ModalConfirmDeleteTodoComponent);
    const instance = modalRef.componentInstance as ModalConfirmDeleteTodoComponent;

    instance.todoName = todo.title;
    instance.delete.subscribe(confirmDelete => {
      if(confirmDelete){
        const i = todoList.indexOf(todo);
        todoList.splice(i, 1);

        this.todoChanged.emit({
          type: TodoChangedTypes.deleteTodo,
          todo: todo,
        })
      }
    });
  }

  public itemCheckChanged(todo: ToDo, item: IToDoItem){
    item.completed = !item.completed;

    this.todoChanged.emit({
      type: TodoChangedTypes.itemCheckChange,
      todo: todo,
      item: item,
    })
  }

  public editItemTextConfirm(todo: ToDo, item: IToDoItem, newText: string){
    item.text = newText;

    this.todoChanged.emit({
      type: TodoChangedTypes.editItemTextConfirm,
      todo: todo,
      item: item,
      text: newText,
    })
  }

  public editTodoTitleConfirm(todo: ToDo, newTitle: string){
    todo.title = newTitle;

    this.todoChanged.emit({
      type: TodoChangedTypes.editToDoTitleConfirm,
      todo: todo,
      text: newTitle,
    })
  }
}

export interface ITodoChangedEventArgs {
  type: TodoChangedTypes,
  todo: ToDo,
  item?: IToDoItem,
  text?: string,
}

export enum TodoChangedTypes{
  newItem,
  newToDo,

  deleteItem,
  deleteTodo,

  itemCheckChange,

  editItemTextConfirm,
  editToDoTitleConfirm,
}