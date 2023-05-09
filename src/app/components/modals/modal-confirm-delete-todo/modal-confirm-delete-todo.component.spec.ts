import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConfirmDeleteTodoComponent } from './modal-confirm-delete-todo.component';

describe('ModalConfirmDeleteTodoComponent', () => {
  let component: ModalConfirmDeleteTodoComponent;
  let fixture: ComponentFixture<ModalConfirmDeleteTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalConfirmDeleteTodoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalConfirmDeleteTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
