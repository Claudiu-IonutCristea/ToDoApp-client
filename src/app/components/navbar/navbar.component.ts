import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalLoginComponent } from '../modals/modal-login/modal-login.component';
import { ModalRegisterComponent } from '../modals/modal-register/modal-register.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  constructor(private modalService: NgbModal) {}

  openRegisterModal(){
    this.modalService.open(ModalRegisterComponent);
  }

  openLoginModal(){
    this.modalService.open(ModalLoginComponent);
  }
}
