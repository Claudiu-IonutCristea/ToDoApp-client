import { v4 as uuid } from 'uuid';

export class ToDo {

    constructor(title: string, todoItems?: IToDoItem[], id?: string){
        this.id = id == undefined ? uuid() : id;
        this.title = title;

        if(todoItems == null) {
            this.todoItems = new Array<IToDoItem>();
        } else {
            this.todoItems = todoItems;
        }
    }

    id: string;
    title: string;
    todoItems: Array<IToDoItem>;

    //returns percentage of todos marked as completed as a number between 0 - 100
    get complete() { return (this.todoItems.filter(todo => todo.completed == true).length / this.todoItems.length) * 100 }
}

export interface IToDoItem {
    text: string;
    completed: boolean;
}

export enum TodoChangedTypes{
    newItem,
    newToDo,

    deleteItem,
    deleteTodo,

    updateItemCheck,
    updateItem,
    updateTodo,
}
  
export interface ITodoChangedEvtArgs {
    type: TodoChangedTypes,
    item?: IToDoItem,
    todo?: ToDo,
    textValue?: string,
    sender: any,
}