import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-solicitudes-mensura',
  templateUrl: './solicitudes-mensura.component.html',
  styleUrls: ['./solicitudes-mensura.component.scss']
})
export class SolicitudesMensuraComponent implements OnInit {
  usuarioLocal: Usuario = new Usuario()
  constructor(private usuarioInyectado: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioLocal = this.usuarioInyectado.usuarioLogeado
  }

}
