import { Component } from '@angular/core';
import { ToDo, IToDoItem } from 'src/app/Classes/ToDo';
import { TODOs } from 'src/app/mock-todos';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html'
})

export class TodosComponent{
  todos: ToDo[] = TODOs;


  addNewItem(todo: ToDo, text: string){
    if(text){
     todo.todoItems.push({
       text: text,
       completed: false
      })
    }
    
  }

  updateCheck(item: IToDoItem){
    item.completed = !item.completed;
  }
}
