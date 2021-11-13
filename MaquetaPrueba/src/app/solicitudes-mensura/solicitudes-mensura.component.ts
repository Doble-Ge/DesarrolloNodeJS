import { Component, OnInit } from '@angular/core';
import { Historial } from '../models/historial';
import { Usuario } from '../models/usuario';
import { HistorialService } from '../services/historial.service';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-solicitudes-mensura',
  templateUrl: './solicitudes-mensura.component.html',
  styleUrls: ['./solicitudes-mensura.component.scss']
})
export class SolicitudesMensuraComponent implements OnInit {
  usuarioLocal: Usuario = new Usuario()
  historiales: Array<Historial> = new Array<Historial>()
  data
  arr
  prioridad
  constructor(private usuarioInyectado: UsuarioService, private historialInyectado: HistorialService) { }

  ngOnInit(): void {
    this.usuarioLocal = this.usuarioInyectado.usuarioLogeado
    this.historialInyectado.leerHistoriales().subscribe((historialesDesdeAPI)=>{
      this.historiales = historialesDesdeAPI
      this.data = Object.values(this.historiales)
      this.arr = this.data[0]
      console.log(this.arr)
    })
  }

}
