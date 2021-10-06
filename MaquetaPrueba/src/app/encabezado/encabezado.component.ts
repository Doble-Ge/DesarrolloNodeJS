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
  constructor(public UsuarioInyectado: UsuarioService, private Ruta: Router) { }

  ngOnInit(): void {
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
    this.Ruta.navigateByUrl("/paginaInicio")
  }
}
