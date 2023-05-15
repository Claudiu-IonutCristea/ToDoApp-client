import { Component, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-confirm-delete-todo',
  templateUrl: './modal-confirm-delete-todo.component.html'
})
export class ModalConfirmDeleteTodoComponent {
  @Output() delete = new EventEmitter<boolean>();

  public todoName: string = "";

  constructor(
    public activeModal: NgbActiveModal,
  ) {}

  closeModal(): void {
    this.delete.emit(false)
    this.activeModal.close();
  }

  confirmDelete(){
    this.delete.emit(true);
    this.closeModal();
  }
}
