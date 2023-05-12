import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ModalRegisterComponent } from './components/modals/modal-register/modal-register.component';
import { ModalLoginComponent } from './components/modals/modal-login/modal-login.component';
import { TodosComponent } from './components/todos/todos.component';
import { ModalConfirmDeleteTodoComponent } from './components/modals/modal-confirm-delete-todo/modal-confirm-delete-todo.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ModalRegisterComponent,
    ModalLoginComponent,
    TodosComponent,
    ModalConfirmDeleteTodoComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
