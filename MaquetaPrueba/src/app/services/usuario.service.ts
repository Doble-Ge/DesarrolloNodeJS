import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuario: Usuario = new Usuario()
  usuarioLogeado: Usuario = new Usuario()
  loginCorrecto = 0 
  API_URL: string = 'http://localhost:3000/api'
  constructor(private http: HttpClient) { }

  crearUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.API_URL + '/usuarioa', usuario)
  }

  getUsuario(cuil: string){
    return this.http.get(this.API_URL + '/usuarioa/' + cuil)
  }

  verificarLogeo(){
    return this.loginCorrecto = 1
  }

  updateContraseña(cuil: string, nuevoUsuario) {
    return this.http.put(this.API_URL + '/usuarioa/' + cuil, nuevoUsuario)
  }
  
}
