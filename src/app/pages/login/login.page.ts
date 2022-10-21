import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { RegistroserviceService, Usuario } from 'src/services/registroservice.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  formularioLogin: FormGroup;
  usuarios: any = undefined;
  usuario: Usuario = <Usuario>{};

  constructor( private alertController: AlertController,
              private navController: NavController,
              private registroService: RegistroserviceService,
              private fb: FormBuilder) {
                this.formularioLogin = this.fb.group({
                  'correo': new FormControl("", Validators.required),
                  'password': new FormControl("", Validators.required),
                })

              }

  ngOnInit() {
  }

  async Ingresar(){
    var f = this.formularioLogin.value;
    var a = 0;
    this.registroService.getUsuarios().then(datos=>{
      this.usuarios=datos;
      if (datos.length==0)
      {
        return null;
      }
      console.log(this.usuarios);
      for (let obj of this.usuarios) {
        console.log(f);
        console.log(obj);
        if(obj.email == f.correo && obj.contra == f.password){
          this.registroService.setUser(obj.nombre);
          a=1;
          console.log('ingresado');
          localStorage.setItem('ingresado', 'true');
          this.navController.navigateRoot('inicio');
        }
      }
    console.log(a);
    if (a==0){
      this.alertMsg();
    }
    });
  }

  async alertMsg(){
    const alert = await this.alertController.create({
      header: 'Error',
      message: ' Los datos ingresados no son correctos',
      buttons: ['Aceptar'],
    });
      await alert.present();
      return;
  }
}
