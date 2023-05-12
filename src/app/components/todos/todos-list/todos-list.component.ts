import { Component, Input, OnInit } from '@angular/core';
import { ToDo, IToDoItem, ITodoChangedEvtArgs, TodoChangedTypes } from 'src/app/classes/ToDo';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html'
})

export class TodosListComponent implements OnInit{
  @Input() useLocalStorage = false;

  todos = new Array<ToDo>();

  ngOnInit(): void {
    if(this.useLocalStorage){
      this.todos = this.setupLocal();
    }
  }

  constructor(
    private storageService: StorageService,
  ) {}

  addTodo(title: string){
    if(title){
      // this.todos?.unshift(new ToDo(title));

      // this.storageService.saveLocal(this.todos);
      this.updateTodo({
        sender: this,
        type: TodoChangedTypes.newToDo,
        textValue: title,
      })
    }
  }

  updateTodo(args: ITodoChangedEvtArgs){
    console.log(args);
  }

  setupLocal(): ToDo[]{
    const todosLocalJson = localStorage.getItem(this.storageService.TODOSLOCAL);
    let todosLocalParsed;
    let todosLocal = new Array<ToDo>();
    if(todosLocalJson == null){
      //no local todos
      const tutorialTodo = this.tutorialTodo();
      localStorage.setItem(this.storageService.TODOSLOCAL, JSON.stringify(Array<ToDo>(tutorialTodo)));
      todosLocal.push(this.tutorialTodo());
      return todosLocal;
    }
    else{
      todosLocalParsed = JSON.parse(todosLocalJson);
    }

    for(let todo of todosLocalParsed){
      todosLocal.push(new ToDo(todo.title, todo.todoItems, todo.id));
    }

    return todosLocal;

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
