import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../services/usuario.service';


@Component({
  selector: 'app-login-modulo',
  templateUrl: './login-modulo.component.html',
  styleUrls: ['./login-modulo.component.scss']
})
export class LoginModuloComponent implements OnInit {
  usuario: Usuario = new Usuario()
  usuarioDesdeBase: any
  data
  constructor(private usuarioInyectado: UsuarioService, private Ruta: Router) { }

  ngOnInit(): void {
  }
  
  ingresar(){
  this.usuarioInyectado.getUsuario(this.usuario.cuil).subscribe(
      res => {
        this.usuarioDesdeBase = res
        this.data = Object.values(this.usuarioDesdeBase)
        if(this.usuario.pass == this.data[0].pass) {
          alert("Felicitaciones por poner bien la contraseña")
        }else{
          alert("Contraseña incorrecta")
        }
      },
      err => console.error(err)
    )
  }
}
