import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

interface Lista_Menu{
  name: string,
  ruta: string,
  icon?: string
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  public lista_menu: Lista_Menu []=[
    { name: 'Registrar Asistencia', ruta: '/scan', icon: 'qr-code-outline'},
    { name: 'Quienes Somos', ruta:'/about', icon: 'rocket-outline'},
    { name: 'Configuracion', ruta:'/config', icon: 'settings-outline'},
    { name: 'Iniciar Sesion', ruta:'/login', icon: 'cloud-upload-outline'}

  ]
  constructor(private router:Router, private menu:MenuController) { }

  ngOnInit(){
    this.router.events.subscribe(event =>{
      if(event instanceof NavigationEnd){
        this.menu.close('custom');

      }
    });
  }
  public openMenu(){
    this.menu.close('custom');
  }
}
