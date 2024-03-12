import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalLoginComponent } from '../modals/modal-login/modal-login.component';
import { ModalRegisterComponent } from '../modals/modal-register/modal-register.component';

import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit{

  constructor(
    private modalService: NgbModal,
    private deviceService: DeviceDetectorService
    ) {}

  ngOnInit(): void {
    console.log(this.deviceService.getDeviceInfo());
    //this.deviceService.
  }

  openRegisterModal(){
    this.modalService.open(ModalRegisterComponent);
  }

  openLoginModal(){
    this.modalService.open(ModalLoginComponent);
  }
}
