import { Component, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-confirm-delete-todo',
  templateUrl: './modal-confirm-delete-todo.component.html'
})
export class ModalConfirmDeleteTodoComponent {
  @Output() delete: EventEmitter<any> = new EventEmitter();

  public todoName = "test";

  constructor(
    public activeModal: NgbActiveModal,
  ) {}

  closeModal(): void {
    this.activeModal.close();
  }

  confirmDelete(){
    this.delete.emit();
    this.closeModal();
  }
}
