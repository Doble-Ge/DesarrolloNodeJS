import { Component, OnInit } from '@angular/core';
import { ActaConformidad, AprobacionAgrimensura, Certificados, CitacionColindantes, CopiaEscritura, EstadoCuenta, MemoriaDescriptivas, Notificaciones, PlanoDigital, PlanoProyectoObras, Subsistencia, VisacionAgrimensores, VisacionMunicipal } from 'src/app/models/mensura';
import { HistorialService } from 'src/app/services/historial.service';
import { MensuraService } from 'src/app/services/mensura.service';

@Component({
  selector: 'app-nueva-solicitud',
  templateUrl: './nueva-solicitud.component.html',
  styleUrls: ['./nueva-solicitud.component.scss']
})
export class NuevaSolicitudComponent implements OnInit {
  nroBtn: number
  actaConformidad: ActaConformidad = new ActaConformidad()
  aprobacionAgrimensura: AprobacionAgrimensura = new AprobacionAgrimensura()
  certificado: Certificados = new Certificados()
  citacionColindante: CitacionColindantes = new CitacionColindantes()
  copiaEscritura: CopiaEscritura = new CopiaEscritura()
  estadoCuenta: EstadoCuenta = new EstadoCuenta()
  memoriaDescriptiva: MemoriaDescriptivas = new MemoriaDescriptivas()
  notificacion: Notificaciones = new Notificaciones()
  planoDigital: PlanoDigital = new PlanoDigital()
  planoProyecto: PlanoProyectoObras = new PlanoProyectoObras()
  subsistencia: Subsistencia = new Subsistencia()
  visacionAgrimensores: VisacionAgrimensores = new VisacionAgrimensores()
  visacionMunicipal: VisacionMunicipal = new VisacionMunicipal()
  constructor(private mensuraInyectada: MensuraService, private historialIny: HistorialService) { }

  ngOnInit(): void {
    console.log(this.historialIny.historial)
    this.obtenerActa()
    this.obtenerAprobacion()
    this.obtenerCitacion()
    this.obtenerCertificado()
    this.obtenerCopiaEscritura()
    this.obtenerEstadoCuenta()
    this.obtenerNotificacion()
    this.obtenerPlanoDigital()
    this.obtenerPlanoProyecto()
    this.obtenerSubsistencia()
    this.obtenerVisacionAgrimensores()
    this.obtenerVisacionMunicipal()
  }
  escribirHTML(numero: number){
    if (numero == 1){
      this.nroBtn = 1
    }
    if (numero == 2){
      this.nroBtn = 2
    }
    if (numero == 3){
     this.nroBtn = 3
    }
    if (numero == 4){
      this.nroBtn = 4
    }
    if (numero == 5){
     this.nroBtn = 5
    }
    if (numero == 6){
      this.nroBtn = 6
    }
    if (numero == 7){
     this.nroBtn = 7
    }
    if (numero == 8){
      this.nroBtn = 8
    }
    if (numero == 9){
      this.nroBtn=9
    }
    if (numero == 10){
      this.nroBtn = 10
    }
    if (numero == 11){
     this.nroBtn = 11
    }
    if (numero == 12){
      this.nroBtn = 12
    }
    if (numero == 13){
     this.nroBtn = 13
    }
  }
  obtenerActa(){
    this.mensuraInyectada.getActa(this.historialIny.historial.mensura_id).subscribe(
      res => {
        const data = Object.values(res)
        this.actaConformidad = data[0]
        console.log(this.actaConformidad)
      },
      err => console.error(err)
    )
  }

  obtenerAprobacion(){
    this.mensuraInyectada.getAprobacion(this.historialIny.historial.mensura_id).subscribe(
      res => {
        const data = Object.values(res)
        this.aprobacionAgrimensura = data[0]
        console.log(this.aprobacionAgrimensura)
      },
      err => console.error(err)
    )
  }

  obtenerCertificado(){
    this.mensuraInyectada.getCertificado(this.historialIny.historial.mensura_id).subscribe(
      res => {
        const data = Object.values(res)
        this.certificado = data[0]
      },
      err => console.error(err)
    )
  }

  obtenerCitacion(){
    this.mensuraInyectada.getCitacion(this.historialIny.historial.mensura_id).subscribe(
      res => {
        const data = Object.values(res)
        this.citacionColindante = data[0]
      },
      err => console.error(err)
    )
  }

  obtenerCopiaEscritura(){
    this.mensuraInyectada.getCopiaEscritura(this.historialIny.historial.mensura_id).subscribe(
      res => {
        const data = Object.values(res)
        this.copiaEscritura = data[0]
      },
      err => console.error(err)
    )
  }

  obtenerEstadoCuenta(){
    this.mensuraInyectada.getEstadoCuenta(this.historialIny.historial.mensura_id).subscribe(
      res => {
        const data = Object.values(res)
        this.estadoCuenta = data[0]
      },
      err => console.error(err)
    )
  }

  //Falta memoria descriptiva

  obtenerNotificacion(){
    this.mensuraInyectada.getNotifiaciones(this.historialIny.historial.mensura_id).subscribe(
      res => {
        const data = Object.values(res)
        this.notificacion = data[0]
      }, 
      err => console.error(err)
    )
  }

  obtenerPlanoDigital(){
    this.mensuraInyectada.getPlanoDigital(this.historialIny.historial.mensura_id).subscribe(
      res =>{
        const data = Object.values(res)
        this.planoDigital = data[0]
      },
      err => console.error(err)
    )
  }

  obtenerPlanoProyecto(){
    this.mensuraInyectada.getPlanoProyecto(this.historialIny.historial.mensura_id).subscribe(
      res => {
        const data = Object.values(res)
        this.planoProyecto = data[0]
      },
      err => console.error(err)
    )
  }

  obtenerSubsistencia(){
    this.mensuraInyectada.getSubsistencia(this.historialIny.historial.mensura_id).subscribe(
      res =>{
        const data = Object.values(res)
        this.subsistencia = data[0]
      },
      err => console.error(err)
    )
  }

  obtenerVisacionAgrimensores(){
    this.mensuraInyectada.getVisacionAgrimensores(this.historialIny.historial.mensura_id).subscribe(
      res => {
        const data = Object.values(res)
        this.visacionAgrimensores = data[0]
      },
      err => console.error(err)
    )
  }

  obtenerVisacionMunicipal(){
    this.mensuraInyectada.getVisacionMunicipal(this.historialIny.historial.mensura_id).subscribe(
      res => {
        const data = Object.values(res)
        this.visacionMunicipal = data[0]
      },
      err => console.error(err)
    )
  }

}
