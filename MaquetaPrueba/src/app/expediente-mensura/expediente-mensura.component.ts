import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Caratula } from '../models/caratula';
import { CaratulaExterno } from '../models/caratulaExterno';
import { CaratulaNota } from '../models/caratulaNota';
import { CaratulaOficio } from '../models/caratulaOficios';
import { CaratulasService } from '../services/caratulas.service';

@Component({
  selector: 'app-expediente-mensura',
  templateUrl: './expediente-mensura.component.html',
  styleUrls: ['./expediente-mensura.component.scss']
})
export class ExpedienteMensuraComponent implements OnInit {

  constructor(private ruta: Router, public CaratulaInyectada: CaratulasService) { }
  d: Date = new Date()
  tipoCaratula: string
  ngOnInit(): void {
  }


  generarCaratula(){
    numeroInterno: this.CaratulaInyectada.caratulaExp.numeroInterno
    anio: this.CaratulaInyectada.caratulaExp.anio
    agenteInterveniente: this.CaratulaInyectada.caratulaExp.agenteInterviniente
    caratula_asunto: this.CaratulaInyectada.caratulaExp.caratula_asunto
    detalle: this.CaratulaInyectada.caratulaExp.detalle_observacion
    fecha: this.CaratulaInyectada.caratulaExp.fechaIngreso
    numOrigen: this.CaratulaInyectada.caratulaExp.numOrigen
    tipoParcela: this.CaratulaInyectada.caratulaExp.tipoParcela
    dpto: this.CaratulaInyectada.caratulaExp.departamento
    this.CaratulaInyectada.caratulaExp.planoDe = this.CaratulaInyectada.caratulaExp.caratula_asunto
    profesional: this.CaratulaInyectada.caratulaExp.profesional
    matricula: this.CaratulaInyectada.caratulaExp.matricula
    comitente: this.CaratulaInyectada.caratulaExp.comitente
    dispDefinitiva: this.CaratulaInyectada.caratulaExp.disposicionDef
    archivonumero: this.CaratulaInyectada.caratulaExp.numeroArchivo
    folios: this.CaratulaInyectada.caratulaExp.folios
    cantidadParcelas: this.CaratulaInyectada.caratulaExp.cantidadParcelas
    this.CaratulaInyectada.caratulaExp.hora = this.d.getHours()
    this.CaratulaInyectada.caratulaExp.minuto = this.d.getMinutes() 
    alert("Se creo la caratula")
    console.log(this.CaratulaInyectada.caratulaExp)
    this.CaratulaInyectada.guardarCaratulaMensura(this.CaratulaInyectada.caratulaExp).subscribe(
      res => {
        console.log(res)
      },
      err => console.error(err)
    )

  }

  pasarParametro(caratulaRecibida: Caratula){
    this.CaratulaInyectada.caratulaExp = caratulaRecibida
    this.ruta.navigateByUrl('/caratulaImprimir')

  }
  //NOTAS
  generarCaratulaNota(){
    numeroInterno: this.CaratulaInyectada.caratulaNota.numeroInterno
    anio: this.CaratulaInyectada.caratulaNota.anio
    agenteInterviniente: this.CaratulaInyectada.caratulaNota.agenteInterviniente
    caratula_asunto: this.CaratulaInyectada.caratulaNota.caratula_asunto
    detalle_observacion: this.CaratulaInyectada.caratulaNota.detalle_observacion
    fecha: this.CaratulaInyectada.caratulaNota.fecha
    motivo: this.CaratulaInyectada.caratulaNota.motivo
    iniciador: this.CaratulaInyectada.caratulaNota.iniciador
    dni_iniciador: this.CaratulaInyectada.caratulaNota.dni_iniciador
    nro_origen: this.CaratulaInyectada.caratulaNota.nroOrigen
    this.CaratulaInyectada.caratulaNota.asunto = this.CaratulaInyectada.caratulaNota.caratula_asunto
    fecha_ingreso: this.CaratulaInyectada.caratulaNota.fechaIngreso
    fecha_vencimiento: this.CaratulaInyectada.caratulaNota.fechaVencimiento
    cantidad_parcelas: this.CaratulaInyectada.caratulaNota.cantidadParcelas
    this.CaratulaInyectada.caratulaNota.hora = this.d.getHours()
    this.CaratulaInyectada.caratulaNota.minuto = this.d.getMinutes() 
    alert("Se creo la caratula")
    this.CaratulaInyectada.guardarCaratulaNota(this.CaratulaInyectada.caratulaNota).subscribe(
      res => {
        console.log(res)
      },
      err => console.error(err)
    )
  }

  pasarParametroNota(caratulaRecibida: CaratulaNota){
    this.CaratulaInyectada.caratulaNota = caratulaRecibida
    this.ruta.navigateByUrl('/caratulaNotaImprimir')
  }

  //OFICIOS
  generarCaratulaOficios(){
    numeroInterno: this.CaratulaInyectada.caratulaOficio.numeroInterno
    anio: this.CaratulaInyectada.caratulaOficio.anio
    agenteInterviniente: this.CaratulaInyectada.caratulaOficio.agenteInterviniente
    caratula_asunto: this.CaratulaInyectada.caratulaOficio.caratula_asunto
    detalle: this.CaratulaInyectada.caratulaOficio.detalle_observacion
    fecha: this.CaratulaInyectada.caratulaOficio.fecha
    motivo: this.CaratulaInyectada.caratulaOficio.motivo
    expediente_origen: this.CaratulaInyectada.caratulaOficio.expedienteOrigen
    this.CaratulaInyectada.caratulaOficio.asunto_caratula = this.CaratulaInyectada.caratulaOficio.caratula_asunto
    fechaIngreso: this.CaratulaInyectada.caratulaOficio.fechaIngreso
    fechaTermino: this.CaratulaInyectada.caratulaOficio.fechaTermino
    diligenciador: this.CaratulaInyectada.caratulaOficio.diligenciador
    this.CaratulaInyectada.caratulaOficio.hora = this.d.getHours()
    this.CaratulaInyectada.caratulaOficio.minuto = this.d.getMinutes()
    alert("Se creo la caratula")
    console.log(this.CaratulaInyectada.caratulaOficio)
    this.CaratulaInyectada.guardarCaratulaOficio(this.CaratulaInyectada.caratulaOficio).subscribe(
      res => {
        console.log(res)
      },
      err => console.error(err)
    )
  }

  pasarParametroOficios(caratulaRecibida: CaratulaOficio){
    this.CaratulaInyectada.caratulaOficio = caratulaRecibida
    this.ruta.navigateByUrl('/caratulaOficiosImprimir')
    

  }

  //EXTERNO
  generarCaratulaExterno(){
    numeroInterno: this.CaratulaInyectada.caratulaExterno.numeroInterno
    anio: this.CaratulaInyectada.caratulaExterno.anio
    agenteInterviniente: this.CaratulaInyectada.caratulaExterno.agenteInterviniente
    caratula_asunto: this.CaratulaInyectada.caratulaExterno.caratula_asunto
    detalle_observacion: this.CaratulaInyectada.caratulaExterno.detalle_observacion
    fecha: this.CaratulaInyectada.caratulaExterno.fecha
    origen_expediente: this.CaratulaInyectada.caratulaExterno.origenExpediente
    fecha_iniciacion: this.CaratulaInyectada.caratulaExterno.fechaIniciacion
    codigo_origen: this.CaratulaInyectada.caratulaExterno.codigoOrigen
    nro_origen: this.CaratulaInyectada.caratulaExterno.numeroOrigen
    anio_origen: this.CaratulaInyectada.caratulaExterno.anioOrigen
    iniciador: this.CaratulaInyectada.caratulaExterno.iniciador
    this.CaratulaInyectada.caratulaExterno.asunto_caratula = this.CaratulaInyectada.caratulaExterno.caratula_asunto
    cantidad_parcelas: this.CaratulaInyectada.caratulaExterno.cantidadParcelas
    this.CaratulaInyectada.caratulaExterno.hora = this.d.getHours()
    this.CaratulaInyectada.caratulaExterno.minuto = this.d.getMinutes()
    alert("Se creo la caratula")
    console.log(this.CaratulaInyectada.caratulaExterno)
    this.CaratulaInyectada.guardarCaratulaExterno(this.CaratulaInyectada.caratulaExterno).subscribe(
      res => {
        console.log(res)
      },
      err => console.error(err)
    )
  }

  pasarParametroExterno(caratulaRecibida: CaratulaExterno){
    
    this.CaratulaInyectada.caratulaExterno = caratulaRecibida
    this.ruta.navigateByUrl('/caratulaExternoImprimir')
  }

  seleccionarTipoCaratula(seleccion:number){
    if (seleccion == 1) {
      this.tipoCaratula = "Notas"
    }
    if (seleccion == 2) {
      this.tipoCaratula = "Mensuras"
    }
    if (seleccion == 3) {
      this.tipoCaratula = "Oficios"
    }
    if (seleccion == 4) {
      this.tipoCaratula = "ExpedientesExternos"
    }
  }
}
