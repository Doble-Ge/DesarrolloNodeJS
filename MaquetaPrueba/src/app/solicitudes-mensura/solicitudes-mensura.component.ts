import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  historialSeleccionado: Historial = new Historial()
  data
  mostrarAgregar: boolean = false
  mostrarControles: boolean = false
  arr
  prioridad
  constructor(private usuarioInyectado: UsuarioService, private Ruta: Router, private historialInyectado: HistorialService) { }

  ngOnInit(): void {

    this.usuarioLocal = this.usuarioInyectado.usuarioLogeado
    if (this.usuarioLocal.perfila_id == 10 || this.usuarioLocal.perfila_id == 11 || this.usuarioLocal.perfila_id == 12){
      this.mostrarAgregar = true
    }else{
      this.mostrarControles = true
    } 
    this.historialInyectado.leerHistoriales().subscribe((historialesDesdeAPI)=>{
      this.historiales = historialesDesdeAPI
      this.data = Object.values(this.historiales)
      this.arr = this.data[0]
      console.log(this.arr)
    })
  }

  pasarHistorial(historial: Historial){
    this.historialSeleccionado.mensura_id = historial.mensura_id
    this.historialSeleccionado.estado = historial.estado
    this.historialSeleccionado.usuario = historial.usuario
    this.historialSeleccionado.fechahora = historial.fechahora
    this.historialSeleccionado.area = historial.area
    this.historialSeleccionado.id = historial.id
    this.historialSeleccionado.mail_user = historial.mail_user
    this.historialInyectado.historial = this.historialSeleccionado
    this.Ruta.navigateByUrl('/controlMensura')
  }
}
