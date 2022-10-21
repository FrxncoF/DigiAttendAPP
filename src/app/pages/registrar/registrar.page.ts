import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { RegistroserviceService,  Usuario } from 'src/services/registroservice.service';
import { Platform, ToastController, IonList } from '@ionic/angular';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})

export class RegistrarPage implements OnInit {
  
  formularioRegistro: FormGroup;
  newUsuario: Usuario = <Usuario>{};

  isModalOpen= false;

  constructor(private registroService: RegistroserviceService, private alertController: AlertController, private toastController: ToastController, private fb:FormBuilder) {
    this.formularioRegistro = this.fb.group({
      'nombree': new FormControl("", Validators.required),
      'usuarioo': new FormControl("", Validators.required),
      'emaill': new FormControl("", Validators.required),
      'contraa': new FormControl("", Validators.required),
      'confirmarcontraa': new FormControl("", Validators.required)
    });
   }

  ngOnInit() {
  }

  //abrir modal
  setOpen(isOpen:boolean) {
    this.isModalOpen = isOpen;
  }

  async CrearUsuario(){
    //console.log('Guardar');
    var form= this.formularioRegistro.value;
    if (this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header: 'Datos Incompletos',
        message: 'Debe completar todos los datos',
        buttons: ['Aceptar'],
      });

      await alert.present();
      return;
    }

    this.newUsuario.nombre = form.nombree,
    this.newUsuario.usuario = form.usuarioo,
    this.newUsuario.email = form.emaill,
    this.newUsuario.contra = form.contraa,
    this.newUsuario.confirmarcontra = form.confirmarcontraa
    this.registroService.addDatos(this.newUsuario).then(dato=> {
      this.newUsuario = <Usuario>{};
      this.showToast('Datos Agregados');
    });
  }

  async showToast(msg){
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
}
