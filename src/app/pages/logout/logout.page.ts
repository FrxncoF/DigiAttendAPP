import { Component, OnInit } from '@angular/core';
import { RegistroserviceService } from 'src/services/registroservice.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(private registroService: RegistroserviceService) { }

  ngOnInit() {
  }

  public cerrarSesion() {
    this.registroService.delUser();
  }
}
