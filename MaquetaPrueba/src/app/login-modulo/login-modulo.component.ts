import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../services/usuario.service';


@Component({
  selector: 'app-login-modulo',
  templateUrl: './login-modulo.component.html',
  styleUrls: ['./login-modulo.component.scss']
})
export class LoginModuloComponent implements OnInit {
  usuario: Usuario = new Usuario()
  usuarioDesdeBase: Usuario = new Usuario()
  constructor(private usuarioInyectado: UsuarioService) { }

  ngOnInit(): void {
  }
  
  ingresar(){
    console.log(this.usuario)
    console.log(this.usuarioInyectado.getUsuario(this.usuario.cuil))
  }

}
