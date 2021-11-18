import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ChildActivationStart, Router } from '@angular/router';
import { CorreoObservacion } from 'src/app/models/correoObservacion';
import { Historial } from 'src/app/models/historial';
import { ActaConformidad, AprobacionAgrimensura, Certificados, CitacionColindantes, CopiaEscritura, EstadoCuenta, MemoriaDescriptivas, Notificaciones, PlanoDigital, PlanoProyectoObras, Subsistencia, VisacionAgrimensores, VisacionMunicipal } from 'src/app/models/mensura';
import { CorreoClaveService } from 'src/app/services/correo-clave.service';
import { DownloadService } from 'src/app/services/download.service';
import { HistorialService } from 'src/app/services/historial.service';
import { MensuraService } from 'src/app/services/mensura.service';

@Component({
  selector: 'app-nueva-solicitud',
  templateUrl: './nueva-solicitud.component.html',
  styleUrls: ['./nueva-solicitud.component.scss']
})
export class NuevaSolicitudComponent implements OnInit {
  mailEnvio: CorreoObservacion = new CorreoObservacion()
  estadoHistorial: string
  areaHistorial: string
  id_historial: number
  id_mensura: number
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
  historialLocal: Historial = new Historial()
  constructor(private mensuraInyectada: MensuraService, private historialIny: HistorialService,
              private descargaService: DownloadService, private mailInyectado: CorreoClaveService,
              private Ruta: Router) { }

  ngOnInit(): void {
    console.log(this.historialIny.historial)
    this.historialLocal = this.historialIny.historial
    this.id_historial = this.historialLocal.id
    this.id_mensura = this.historialLocal.mensura_id
    this.estadoHistorial = this.historialLocal.estado
    this.areaHistorial = this.historialLocal.area
    this.mailEnvio.mensaje += this.historialLocal.mensura_id + ':\n'
    this.obtenerActa()
    this.obtenerAprobacion()
    this.obtenerCitacion()
    this.obtenerCertificado()
    this.obtenerCopiaEscritura()
    this.obtenerEstadoCuenta()
    this.obtenerNotificacion()
    this.obtenerMemoriaDescriptiva()
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
      },
      err => console.error(err)
    )
  }

  obtenerAprobacion(){
    this.mensuraInyectada.getAprobacion(this.historialIny.historial.mensura_id).subscribe(
      res => {
        const data = Object.values(res)
        this.aprobacionAgrimensura = data[0]
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

 obtenerMemoriaDescriptiva(){
   this.mensuraInyectada.getMemoriaDescriptiva(this.historialIny.historial.mensura_id).subscribe(
     res => {
       const data = Object.values(res)
       this.memoriaDescriptiva = data[0]
     },
     err => console.error(err)
   )
 }

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

  returnBlob(res): Blob {
    console.log('file download!')
    return new Blob([res], { type: 'application/pdf'})
  }

  descargaActaPDF(nombrePDf: string){
    this.descargaService.downloadActaConformidad(nombrePDf).subscribe(res => {
      if (res) {
        const url = window.URL.createObjectURL(this.returnBlob(res));
        window.open(url)
      }
    })
  }

  descargaAprobacionPDF(nombrePDF: string) {
    this.descargaService.downloadAprobacionAgrimensor(nombrePDF).subscribe(res => {
      if (res) {
        const url = window.URL.createObjectURL(this.returnBlob(res))
        window.open(url)
      }
    })
  }

  descargaCertificadoPDF(nombrePDF: string) {
    this.descargaService.downloadCeritificado(nombrePDF).subscribe(res => {
      if (res) {
        const url = window.URL.createObjectURL(this.returnBlob(res))
        window.open(url)
      }
    })
  }

  descargaCitacionPDF(nombrePDF: string) {
    this.descargaService.downloadCitacionColindante(nombrePDF).subscribe(res => {
      if (res) {
        const url = window.URL.createObjectURL(this.returnBlob(res))
        window.open(url)
      }
    })
  }

  descargaCopiaEscrituraPDF(nombrePDF: string) {
    this.descargaService.downloadCopiaEscritura(nombrePDF).subscribe(res => {
      if (res) {
        const url = window.URL.createObjectURL(this.returnBlob(res))
        window.open(url)
      }
    })
  }

  descargaNotificacionPDF(nombrePDF: string){
    this.descargaService.downloadNotificacion(nombrePDF).subscribe(res => {
      if (res) {
        const url = window.URL.createObjectURL(this.returnBlob(res))
        window.open(url)
      }
    })
  }

  descargaPlanoDigitalPDF(nombrePDF: string){
    this.descargaService.downloadPlanoDigital(nombrePDF).subscribe(res => {
      if (res) {
        const url = window.URL.createObjectURL(this.returnBlob(res))
        window.open(url)
      }
    })
  }

  descargaPlanoProyectoPDF(nombrePDF: string) {
    this.descargaService.downloadPlanoProyecto(nombrePDF).subscribe(res => {
      if (res) {
        const url = window.URL.createObjectURL(this.returnBlob(res))
        window.open(url)
      }
    })
  }

  descargaSubsistenciaPDF(nombrePDF: string) {
    this.descargaService.downloadSubsistencia(nombrePDF).subscribe(res => {
      if (res) {
        const url = window.URL.createObjectURL(this.returnBlob(res))
        window.open(url)
      }
    })
  }

  descargaVisacionAgrimensoresPDF(nombrePDF: string) {
    this.descargaService.downloadVisacionAgrimensores(nombrePDF).subscribe(res => {
      if (res) {
        const url = window.URL.createObjectURL(this.returnBlob(res))
        window.open(url)
      }
    })
  }

  descargaVisacionMunicipalPDF(nombrePDF: string) {
    this.descargaService.downloadVisacionMunicipal(nombrePDF).subscribe(res => {
      if (res) {
        const url = window.URL.createObjectURL(this.returnBlob(res))
        window.open(url)
      }
    })
  }

  updateSubsistencia(){
    const id = this.subsistencia.id
    delete this.subsistencia.id
    delete this.subsistencia.mensura_id
    delete this.subsistencia.pdf_subsistencia
    delete this.subsistencia.titulo_subsistencia
    this.mailEnvio.mensaje += 'Subsistencia: ' + this.subsistencia.observacion + '\n'
    this.mensuraInyectada.updateSubsistencia(id, this.subsistencia).subscribe(
      res => {
        console.log(res)
      },
      err => console.error(err)
    )
  }

  updateCertificado(){
    const id = this.certificado.id
    delete this.certificado.informe_catastral
    delete this.certificado.mensura_id
    delete this.certificado.pdf_certificado
    this.mailEnvio.mensaje += 'Certificado: ' + this.certificado.observacion + '\n'
    this.mensuraInyectada.updateCertificados(id, this.certificado).subscribe(
      res => {
        console.log(res)
      },
      err => console.error(err)
    )
  }

  updateEstadoCuenta(){
    const id = this.estadoCuenta.id
    delete this.estadoCuenta.db_nodb
    delete this.estadoCuenta.id
    delete this.estadoCuenta.mensura_id
    this.mailEnvio.mensaje += 'Estado cuenta: ' + this.estadoCuenta.observacion + '\n'
    this.mensuraInyectada.updateEstadoCuenta(id, this.estadoCuenta).subscribe(
      res => {
        console.log(res)
      },
      err => console.error(err)
    )
  }
  
  updateCopiaEscrituras(){
    const id = this.copiaEscritura.id
    delete this.copiaEscritura.id
    delete this.copiaEscritura.mensura_id
    delete this.copiaEscritura.pdf_escritura
    this.mailEnvio.mensaje += 'Copia escrituras: ' + this.copiaEscritura.observacion + '\n'
    this.mensuraInyectada.updateCopiaEscritura(id, this.estadoCuenta).subscribe(
      res => {
        console.log(res)
      },
      err => console.error(err)
    )
  }

  updateVisacionAgrimensores(){
    const id = this.visacionAgrimensores.id 
    delete this.visacionAgrimensores.id
    delete this.visacionAgrimensores.mensura_id
    delete this.visacionAgrimensores.pdf_visado_agrimensores
    delete this.visacionAgrimensores.tipo
    this.mailEnvio.mensaje += 'Visacion Agrimensores: ' + this.visacionAgrimensores.observacion + '\n'
    this.mensuraInyectada.updateVisacionAgrimensores(id, this.visacionAgrimensores).subscribe(
      res => {
        console.log(res)
      },
      err => console.error(err)
    )
  }

  updateNotificacion(){
    const id = this.notificacion.id
    delete this.notificacion.id
    delete this.notificacion.mensura_id
    delete this.notificacion.pdf_notificacion
    this.mailEnvio.mensaje += 'Notificacion: ' + this.notificacion.observacion + '\n'
    this.mensuraInyectada.updateNotificaciones(id, this.notificacion).subscribe(
      res => {
        console.log(res)
      },
      err => console.error(err)
    )
  }

  updateCitacion(){
    const id = this.citacionColindante.id
    delete this.citacionColindante.id
    delete this.citacionColindante.mensura_id
    delete this.citacionColindante.pdf_citacion
    this.mailEnvio.mensaje += 'Citacion: ' + this.citacionColindante.observacion + '\n'
    this.mensuraInyectada.updateCitacionColindante(id, this.citacionColindante).subscribe(
      res => {
        console.log(res)
      },
      err => console.error(err)
    )
  }

  updateActaConformidad(){
    const id = this.actaConformidad.id
    delete this.actaConformidad.id
    delete this.actaConformidad.mensura_id
    delete this.actaConformidad.pdf_acta
    this.mailEnvio.mensaje += 'Acta conformidad: ' + this.actaConformidad.observacion + '\n'
    this.mensuraInyectada.updateActaConformidad(id, this.actaConformidad).subscribe(
      res => {
        console.log(res)
      },
      err => console.error(err)
    )
  }

  updateMemoria(){
    const id = this.memoriaDescriptiva.id
    delete this.memoriaDescriptiva.id
    delete this.memoriaDescriptiva.db_nodbmem
    delete this.memoriaDescriptiva.cantidad
    delete this.memoriaDescriptiva.mensura_id
    this.mailEnvio.mensaje += 'Memoria descriptiva: ' + this.memoriaDescriptiva.observacion + '\n'
    this.mensuraInyectada.updateMemoriasDescriptivas(id, this.memoriaDescriptiva).subscribe(
      res => {
        console.log(res)
      },
      err => console.error(err)
    )
  }

  updateVisacionMunicipal(){
    const id = this.visacionMunicipal.id
    delete this.visacionMunicipal.id
    delete this.visacionMunicipal.pdf_visacion_municipal
    delete this.visacionMunicipal.mensura_id
    this.mailEnvio.mensaje += 'Visacion municipal: ' + this.memoriaDescriptiva.observacion + '\n'
    this.mensuraInyectada.updateVisacionMunicipal(id, this.visacionMunicipal).subscribe(
      res => {
        console.log(res)
      },
      err => console.error(err)
    )
  }

  updatePlanoProyecto(){
    const id = this.planoProyecto.id
    delete this.planoProyecto.id
    delete this.planoProyecto.pdf_proyecto_obra
    delete this.planoProyecto.mensura_id
    this.mailEnvio.mensaje += 'Plano proyecto obra: ' + this.planoProyecto.observacion + '\n'
    this.mensuraInyectada.updatePlanoProyectoObras(id, this.planoProyecto).subscribe(
      res => {
        console.log(res)
      },
      err => console.error(err)
    )
  }

  updateAprobacion(){
    const id = this.aprobacionAgrimensura.id
    delete this.aprobacionAgrimensura.id
    delete this.aprobacionAgrimensura.mensura_id
    delete this.aprobacionAgrimensura.pdf_aprobacion_agrimensura
    this.mailEnvio.mensaje += 'Aprobacion: ' + this.aprobacionAgrimensura.observacion + '\n'
    this.mensuraInyectada.updateAprobacionAgrimensura(id, this.aprobacionAgrimensura).subscribe(
      res => {
        console.log(res)
      },
      err => console.error(err)
    )
  }

  updatePlanoDigital(){
    const id = this.planoDigital.id
    delete this.planoDigital.id
    delete this.planoDigital.mensura_id
    delete this.planoDigital.pdf_plano_digital
    this.mailEnvio.mensaje += 'Plano digital: ' + this.planoDigital.observacion + '\n'
    this.mensuraInyectada.updatePlanoDigital(id, this.planoDigital).subscribe(
      res => {
        console.log(res)
      },
      err => console.error(err)
    )
  }

  seleccionarEstado(event: any){
    this.historialLocal.estado = event.target.value 
  }

  seleccionarArea(event: any) {
    this.historialLocal.area = event.target.value
    console.log(this.historialLocal.area)
  }

  updateEstadoHistorial(){
    delete this.historialLocal.id
    delete this.historialLocal.area
    delete this.historialLocal.fechahora
    delete this.historialLocal.mensura_id
    delete this.historialLocal.usuario
    this.historialIny.updateHistorial(this.id_historial, this.historialLocal).subscribe(
      res => {
        console.log(res)
        this.estadoHistorial = this.historialLocal.estado
        alert('Se ha actualizado el estado con éxito.')
      },
      err => console.log(err)
    )
  }

  updateAreaHistorial(){
    delete this.historialLocal.id
    delete this.historialLocal.estado
    delete this.historialLocal.fechahora
    delete this.historialLocal.mensura_id
    delete this.historialLocal.usuario
    console.log(this.historialLocal.area)
    this.historialIny.updateHistorial(this.id_historial, this.historialLocal).subscribe(
      res => {
        console.log(res)
        this.areaHistorial = this.historialLocal.area
        alert('Se ha actualizado el área con éxito')
      },
      err => console.log(err)
    )
  }

  enviarCorreo(){
    this.mailEnvio.email = this.historialLocal.mail_user
    
    this.mailEnvio.asunto += this.historialLocal.usuario
    this.mailInyectado.postMail(this.mailEnvio).subscribe(
      res => {
        console.log(res)
      },
      err => console.error(err)
    )

  }

  pasarHistorial(){
    this.Ruta.navigateByUrl('/generarCaratulaMensura')
  }
}
