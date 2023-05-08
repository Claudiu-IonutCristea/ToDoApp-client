import { ToDo, IToDoItem } from './Classes/ToDo';

export const TODOs: ToDo[] = [
  new ToDo(
    'ToDo A',
    new Array<IToDoItem>(
      {
        text: 'This is the first ToDo',
        completed: false,
      },
      {
        text: 'This is the second ToDoItem of the first ToDo',
        completed: false,
      },
      {
        text: 'This ToDoItem is completed',
        completed: true,
      }
    )
  ),

  new ToDo(
    'ToDo B',
    new Array<IToDoItem>(
      {
        text: 'This is the second ToDo',
        completed: true,
      },
      {
        text: 'This is the second ToDoItem of the first ToDo',
        completed: true,
      }
    )
  ),
];
