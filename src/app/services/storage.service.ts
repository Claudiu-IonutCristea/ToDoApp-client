import { Injectable, Inject, Optional } from '@angular/core';
import { ToDo, IToDoItem } from '../classes/ToDo';
import { ITodoChangedEventArgs } from './todo.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  public TODOSLOCAL = 'todoslocal';


  save(useLocalStorage: boolean, todos: ToDo[], changes: ITodoChangedEventArgs){
    if(useLocalStorage){
      //Local Storage
      localStorage.setItem(this.TODOSLOCAL, JSON.stringify(todos));

    }else{
      //Remote Storage
    }
  }

  getTodosFromStorage(useLocalStorage: boolean): ToDo[]{
    if(useLocalStorage){
      const todosLocalJson = localStorage.getItem(this.TODOSLOCAL);
      let todosLocalParsed;
      let todosLocal = new Array<ToDo>();
      if(todosLocalJson == null){
        //no local todos
        const tutorialTodo = this.tutorialTodo();
        localStorage.setItem(this.TODOSLOCAL, JSON.stringify(Array<ToDo>(tutorialTodo)));
        todosLocal.push(this.tutorialTodo());
        return todosLocal;
      }else{
        todosLocalParsed = JSON.parse(todosLocalJson);
      }

      for(let todo of todosLocalParsed){
        todosLocal.push(new ToDo(todo.title, todo.todoItems, todo.id));
      }

    return todosLocal;

    }else{
      return new Array<ToDo>;
    }
  }

  tutorialTodo(): ToDo{
    return new ToDo(
      "Tutorial",
      new Array<IToDoItem>(
        {
          text: "Test",
          completed: false
        },
        {
          text: "This is a test",
          completed: true
        },
        {
          text: "Test",
          completed: false
        },
        
      ),
      "tutorialTodo"
    );
  }

}
