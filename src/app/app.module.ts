import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { A11yModule } from '@angular/cdk/a11y';


import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';

import { ModalRegisterComponent } from './components/modals/modal-register/modal-register.component';
import { ModalLoginComponent } from './components/modals/modal-login/modal-login.component';
import { ModalConfirmDeleteTodoComponent } from './components/modals/modal-confirm-delete-todo/modal-confirm-delete-todo.component';

import { TodoComponent } from './components/todos/todo/todo.component';
import { TodosListComponent } from './components/todos/todos-list/todos-list.component';
import { TodoItemListComponent } from './components/todos/todo-item-list/todo-item-list.component';
import { TodoItemComponent } from './components/todos/todo-item/todo-item.component';
import { TodoHeaderComponent } from './components/todos/todo-header/todo-header.component';

@NgModule({
  declarations: [
    AppComponent,

    NavbarComponent,

    ModalRegisterComponent,
    ModalLoginComponent,
    ModalConfirmDeleteTodoComponent,
    
    TodoComponent,
    TodosListComponent,
    TodoItemListComponent,
    TodoItemComponent,
    TodoHeaderComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    A11yModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
