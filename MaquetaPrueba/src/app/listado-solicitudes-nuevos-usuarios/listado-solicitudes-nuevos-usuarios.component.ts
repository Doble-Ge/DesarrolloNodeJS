import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { solicitudUsuario } from '../models/solicitudUsuario';
import { Usuario } from '../models/usuario';
import { SolicitudesUsuariosService } from '../services/solicitudes-usuarios.service';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-listado-solicitudes-nuevos-usuarios',
  templateUrl: './listado-solicitudes-nuevos-usuarios.component.html',
  styleUrls: ['./listado-solicitudes-nuevos-usuarios.component.scss']
})
export class ListadoSolicitudesNuevosUsuariosComponent implements OnInit {
  solicitudes: Array<solicitudUsuario> = new Array<solicitudUsuario>()
  usuarioAceptado: Usuario = new Usuario
  data
  arr
  constructor(private solicitudesInyectadas: SolicitudesUsuariosService, private Ruta: Router, private usuarioIny: UsuarioService) { }

  ngOnInit(): void {
    this.solicitudesInyectadas.listarSolicitudes().subscribe((solicitudesDesdeAPI)=>{
      this.solicitudes = solicitudesDesdeAPI
      this.data = Object.values(this.solicitudes)
      this.arr = this.data[0]
      console.log(this.arr)
    })
  }


  eliminarSolicitud(id){
    this.solicitudesInyectadas.eliminarSolicitud(id).subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)
    )
    
  }

  pasarUsuario(solicitud: solicitudUsuario){
    this.usuarioAceptado.nombre = solicitud.nombre
    this.usuarioAceptado.apellido = solicitud.apellido
    this.usuarioAceptado.email = solicitud.email
    this.usuarioAceptado.cuil = solicitud.cuil
    this.usuarioIny.usuario = this.usuarioAceptado
    this.Ruta.navigateByUrl('/registro')
    this.eliminarSolicitud(solicitud.id)
  }
}

