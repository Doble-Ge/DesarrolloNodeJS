import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss']
})
export class EncabezadoComponent implements OnInit {
  login = 0
  texto: string
  esExterno: boolean = false
  constructor(public UsuarioInyectado: UsuarioService, private Ruta: Router) { }

  ngOnInit(): void {
    this.UsuarioInyectado.usuarioLogeado.nombre = localStorage.getItem('nombre')
    this.UsuarioInyectado.usuarioLogeado.apellido = localStorage.getItem('apellido')
    this.UsuarioInyectado.usuarioLogeado.perfila_id = parseInt(localStorage.getItem('perfil_id'))
    this.UsuarioInyectado.usuarioLogeado.email = localStorage.getItem('email')
    this.UsuarioInyectado.loginCorrecto = parseInt(localStorage.getItem('logeado'))
    console.log(this.UsuarioInyectado.usuarioLogeado)
    console.log(this.UsuarioInyectado.loginCorrecto)
  }

  cerrarSesion(){
    this.UsuarioInyectado.loginCorrecto = 0
    console.log(this.UsuarioInyectado.loginCorrecto)
    this.UsuarioInyectado.usuarioLogeado.id = null
    this.UsuarioInyectado.usuarioLogeado.apellido = null
    this.UsuarioInyectado.usuarioLogeado.nombre = null
    this.UsuarioInyectado.usuarioLogeado.pass = null
    this.UsuarioInyectado.usuarioLogeado.email = null
    this.UsuarioInyectado.usuarioLogeado.cuil = null
    this.UsuarioInyectado.usuarioLogeado.perfila_id = null
    this.UsuarioInyectado.usuarioLogeado.primerLogin = null
    localStorage.removeItem('nombre')
    localStorage.removeItem('apellido')
    localStorage.removeItem('mail')
    localStorage.removeItem('perfil_id')
    localStorage.removeItem('logeado')
    this.Ruta.navigateByUrl("#")
  }
}
