import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


export interface Usuario{
  nombre: string;
  usuario: string;
  email: string;
  contra: string; 
  confirmarcontra: string;
}

const USERS_KEY = 'my-usuarios';

@Injectable({
  providedIn: 'root'
})

export class RegistroserviceService {

  private _storage: Storage
  newUsuario: Usuario = <Usuario>{};
  
  
  constructor(private storage: Storage) {
    this.init();
   }

   async init(){
    const storage = await this.storage.create();
    this._storage = storage;
  }

  async addDatos(dato: Usuario):Promise<any>{
    return this.storage.get(USERS_KEY).then((datos: Usuario[])=>{
      if (datos) {
        datos.push(dato);
        return this.storage.set(USERS_KEY, datos);
      }else {
        return this.storage.set(USERS_KEY, [dato]);
      }
    }) //puede llevar ;
  }

  async getUsuarios(): Promise<Usuario[]>{
    return this.storage.get(USERS_KEY);
  }

  async setUser(nombre: string) {
    return this.storage.set('username', nombre);
  }

  async getUser(): Promise<string> {
    return this.storage.get('username');
  }
}
