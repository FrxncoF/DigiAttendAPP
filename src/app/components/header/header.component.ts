import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  public ingresado = localStorage.getItem('ingresado');

  constructor(private menu: MenuController) { }

  ngOnInit() {}

  public openMenu(){
    this.menu.open('custom');
  }
}
