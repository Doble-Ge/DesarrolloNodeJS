import { Component, OnInit } from '@angular/core';
import { solicitudUsuario } from '../models/solicitudUsuario';
import { SolicitudesUsuariosService } from '../services/solicitudes-usuarios.service';

@Component({
  selector: 'app-solicitud-registro',
  templateUrl: './solicitud-registro.component.html',
  styleUrls: ['./solicitud-registro.component.scss']
})
export class SolicitudRegistroComponent implements OnInit {

  solicitud: solicitudUsuario = new solicitudUsuario()

  constructor(private solicitudInyectada: SolicitudesUsuariosService) { }

  ngOnInit(): void {
  }

  agregarSolicitud(){
    
      this.solicitudInyectada.crearSolicitud(this.solicitud).subscribe(
        res => {
          console.log(res)
        },
        err => console.error(err)
      )
    }
}
