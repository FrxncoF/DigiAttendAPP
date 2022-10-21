import { Component,OnInit } from '@angular/core';
import { Router , NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{

  public hasHeader = true;

  constructor(private router:Router) {
    router.events.forEach((event) => {
      if(event instanceof NavigationStart) {
        this.hasHeader =  event.url !== '/inicio' && event.url !== '/';
      }
    });
  }

  ngOnInit(){
    this.checkDarkTheme();
  }

  checkDarkTheme() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    if(prefersDark.matches) {
      document.body.classList.toggle('dark');
    }
  }

}
