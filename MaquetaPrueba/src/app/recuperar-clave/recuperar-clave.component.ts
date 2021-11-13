import { Component, OnInit } from '@angular/core';
import { Correo } from '../models/correoClave';
import { CorreoClaveService } from '../services/correo-clave.service';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-recuperar-clave',
  templateUrl: './recuperar-clave.component.html',
  styleUrls: ['./recuperar-clave.component.scss']
})
export class RecuperarClaveComponent implements OnInit {
  mail: Correo = new Correo()
  cuil: string
  usuarioDesdeBase
  clave: string
  constructor(private mailInyectado: CorreoClaveService, private usuarioInyectado: UsuarioService) { }

  ngOnInit(): void {

  }

  enviarCorreo(){
    this.generarClave()
    this.getUsuario()
    this.mailInyectado.postMail(this.mail).subscribe(
      res => {
        console.log(res)
        this.updateClave()
      },
      err => console.error(err)
    )
  }

  generarClave(){
    
    this.clave = (Math.floor(Math.random() * (999999 - 100000)) + 100000).toString()
    this.mail.mensaje = `Tu nueva clave de recuperacion es: ${this.clave}`
  }

  getUsuario(){
    this.usuarioInyectado.getUsuario(this.cuil).subscribe(
      res => {
        this.usuarioDesdeBase = Object.values(res)
        console.log(this.usuarioDesdeBase)
      },
      err => console.error(err)
    )
  }

  updateClave(){
    this.usuarioDesdeBase[0].pass = this.clave
    this.usuarioDesdeBase[0].primerLogin = true
    
    this.usuarioInyectado.updateContraseña(this.cuil, this.usuarioDesdeBase[0]).subscribe(
      res => {
        alert("Nueva contraseña enviada al email")
      },
      err => console.error(err)
    )
  }

}
