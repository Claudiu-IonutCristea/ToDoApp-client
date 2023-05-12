import { Injectable, Inject, Optional } from '@angular/core';
import { ToDo } from '../Classes/ToDo';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  public TODOSLOCAL = 'todoslocal';


  saveLocal(todos: ToDo[]){
    localStorage.setItem('todoslocal', JSON.stringify(todos));
  }

}
