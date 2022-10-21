import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { RegistroserviceService, Usuario } from 'src/services/registroservice.service';


interface Componente{
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[]=[
    {
      icon: 'headset-outline',
      name: 'Escanear',
      redirecTo: '/scan'
    }
  ];

  public username = this.registroService.getUser();

  constructor(private menu: MenuController, private registroService: RegistroserviceService) { }

  ngOnInit() {
  }

  openMenu(){
    this.menu.toggle();
  }
}
