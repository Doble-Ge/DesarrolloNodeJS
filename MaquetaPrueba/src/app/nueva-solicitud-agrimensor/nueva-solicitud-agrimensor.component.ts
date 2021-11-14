import { Component, OnInit } from '@angular/core';
import { Caratula } from '../models/caratula';
import { Historial } from '../models/historial';
import { ActaConformidad, AprobacionAgrimensura, Certificados, CitacionColindantes, CopiaEscritura, EstadoCuenta, id_Mensuras, MemoriaDescriptivas, Notificaciones, PlanoDigital, PlanoProyectoObras, Subsistencia, VisacionAgrimensores, VisacionMunicipal } from '../models/mensura';
import { CaratulasService } from '../services/caratulas.service';
import { HistorialService } from '../services/historial.service';
import { MensuraService } from '../services/mensura.service';

@Component({
  selector: 'app-nueva-solicitud-agrimensor',
  templateUrl: './nueva-solicitud-agrimensor.component.html',
  styleUrls: ['./nueva-solicitud-agrimensor.component.scss']
})
export class NuevaSolicitudAgrimensorComponent implements OnInit {
  stringNombreArchivo: string
  historial: Historial = new Historial()
  tipoFormulario: string;
  textoForm;
  nroBtn: number;
  acta: ActaConformidad = new ActaConformidad()
  aprobacion: AprobacionAgrimensura = new AprobacionAgrimensura()
  certificado: Certificados = new Certificados()
  citacion: CitacionColindantes = new CitacionColindantes()
  copia: CopiaEscritura = new CopiaEscritura()
  estadoCuenta: EstadoCuenta = new EstadoCuenta()
  memoriaD: MemoriaDescriptivas = new MemoriaDescriptivas()
  notificacion: Notificaciones = new Notificaciones()
  planoDigital: PlanoDigital = new PlanoDigital()
  planoProyectoObras: PlanoProyectoObras = new PlanoProyectoObras()
  susbsitencia: Subsistencia = new Subsistencia()
  visacionA: VisacionAgrimensores = new VisacionAgrimensores()
  visacionM: VisacionMunicipal = new VisacionMunicipal()
  caratula: Caratula = new Caratula()
  id: id_Mensuras = new id_Mensuras()

  id_mensura: any 

  FechaHora: Date = new Date()
  pdf
  constructor(private mensuraInyectada: MensuraService, private caratulaInyectada: CaratulasService,
              private historialInyectado: HistorialService) { }

  ngOnInit(): void {
  }

  validacion(event){
     var archivo = (<HTMLInputElement> document.getElementById("archivo"))
     var path = archivo.value
     this.stringNombreArchivo = archivo.value
     var extension = /(.pdf)$/i
     if(!extension.exec(path)){
       alert("Solo se aceptan PDF")
       archivo.value= null
     }else{
       alert("Archivo cargado")
       if(event.target.files.length > 0){
        const file = event.target.files[0]
        this.pdf = file
      }
     }
     console.log(archivo.value.substring(12))

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

  agregarActaConformidad(){
    const formdata = new FormData()
    formdata.append("myFile",this.pdf)
    const nombreArchivo = `${this.FechaHora.getDate()}-${this.FechaHora.getMonth()}-${this.FechaHora.getHours()}-${this.FechaHora.getMinutes()}_${this.stringNombreArchivo.substring(12)}`
    this.acta.pdf_acta += nombreArchivo
    this.mensuraInyectada.guardarActaConformidad(this.acta).subscribe(
      res => {
        console.log(res)
        this.id.id_acta_conformidad = Object.values(res)[1].id
        this.mensuraInyectada.guardarActaConformidadPDF(formdata).subscribe(
          res => {
            console.log(res)
          },
          err => console.error(err)
        )
      },
      err => console.error(err)
    )
  }

  agregarAprobacionAgrimensura(){
    const formdata = new FormData()
    formdata.append("myFile",this.pdf)
    this.mensuraInyectada.guardarAprobacionAgrimensura(this.aprobacion).subscribe(
      res => {
        console.log(res)
        this.id.id_aprobacion_agrimensura = Object.values(res)[1].id
        this.mensuraInyectada.guardarAprobacionAgrimensuraPDF(formdata).subscribe(
          res => {
            console.log(res)
          },
          err => console.error(err)
        )
      },
      err => console.error(err)
    )
  }

  agregarCertificado(){
    const formdata = new FormData()
    formdata.append("myFile",this.pdf)
    this.mensuraInyectada.guardarCertificados(this.certificado).subscribe(
      res => {
        console.log(res)
        this.id.id_certificado = Object.values(res)[1].id
        this.mensuraInyectada.guardarCertificadosPDF(formdata).subscribe(
          res => {
            console.log(res)
          },
          err => console.error(err)
        )
      },
      err => console.error(err)
    )
  }

  agregarCitacionColindante(){
    const formdata = new FormData()
    formdata.append("myFile",this.pdf)
    this.mensuraInyectada.guardarCitacionColindantes(this.citacion).subscribe(
      res => {
        console.log(res)
        this.id.id_citacion_colindante = Object.values(res)[1].id
        this.mensuraInyectada.guardarCitacionColindantesPDF(formdata).subscribe(
          res => {
            console.log(res)
          },
          err => console.error(err)
        )
      },
      err => console.error(err)
    )
  }

  agregarCopiaEscritura(){
    const formdata = new FormData()
    formdata.append("myFile",this.pdf)
    this.mensuraInyectada.guardarCopiaEscritura(this.copia).subscribe(
      res => {
        console.log(res)
        this.id.id_copia_escritura = Object.values(res)[1].id
        this.mensuraInyectada.guardarCopiaEscrituraPDF(formdata).subscribe(
          res => {
            console.log(res)
          },
          err => console.error(err)
        )
      },
      err => console.error(err)
    )
  }

  agregarEstadoCuenta(){
    this.mensuraInyectada.guardarEstadoCuenta(this.estadoCuenta).subscribe(
      res => {
        console.log(res)
        this.id.id_estado_cuenta = Object.values(res)[1].id
      },
      err => console.error(err)
    )
  }

  agregarMemoriasDescriptivas(){
    this.mensuraInyectada.guardarMemoriasDescriptivas(this.memoriaD).subscribe(
      res => {
        console.log(res)
        this.id.id_memoria_descriptiva = Object.values(res)[1].id
      },
      err => console.error(err)
    )

  }

  agregarNotificaciones(){
    const formdata = new FormData()
    formdata.append("myFile",this.pdf)
    this.mensuraInyectada.guardarNotificaciones(this.notificacion).subscribe(
      res => {
        console.log(res)
        this.id.id_notificacion = Object.values(res)[1].id
        this.mensuraInyectada.guardarNotificacionesPDF(formdata).subscribe(
          res => {
            console.log(res)
          },
          err => console.error(err)
        )
      },
      err => console.error(err)
    )

  }

  agregarPlanoDigital(){
    const formdata = new FormData()
    formdata.append("myFile",this.pdf)
    this.mensuraInyectada.guardarPlanoDigital(this.planoDigital).subscribe(
      res => {
        console.log(res)
        this.id.id_planoDigital = Object.values(res)[1].id
        this.mensuraInyectada.guardarPlanoDigitalPDF(formdata).subscribe(
          res => {
            console.log(res)
          },
          err => console.error(err)
        )
      },
      err => console.error(err)
    )

  }

  agregarPlanoProyectoObras(){
    const formdata = new FormData()
    formdata.append("myFile",this.pdf)
    this.mensuraInyectada.guardarPlanoProyectoObras(this.planoProyectoObras).subscribe(
      res => {
        console.log(res)
        this.id.id_plano_proyecto_obra = Object.values(res)[1].id
        this.mensuraInyectada.guardarPlanoProyectoObrasPDF(formdata).subscribe(
          res => {
            console.log(res)
          },
          err => console.error(err)
        )
      },
      err => console.error(err)
    )
  }

  agregarSubsistencia(){
    const formdata = new FormData()
    formdata.append("myFile",this.pdf)
    this.mensuraInyectada.guardarSubsistencia(this.susbsitencia).subscribe(
      res => {
        console.log(res)
        this.id.id_subsistencia = Object.values(res)[1].id
        this.mensuraInyectada.guardarSubsistenciaPDF(formdata).subscribe(
          res => {
            console.log(res)
          },
          err => console.error(err)
        )
      },
      err => console.error(err)
    )

  }

  agregarVisacionAgrimensores(){
    const formdata = new FormData()
    formdata.append("myFile",this.pdf)
    this.mensuraInyectada.guardarVisacionAgrimensores(this.visacionA).subscribe(
      res => {
        console.log(res)
        this.id.id_visacion_agrimensores = Object.values(res)[1].id
        this.mensuraInyectada.guardarVisacionAgrimensoresPDF(formdata).subscribe(
          res => {
            console.log(res)
          },
          err => console.error(err)
        )
      },
      err => console.error(err)
    )
  }

  agregarVisacionMunicipal(){
    const formdata = new FormData()
    formdata.append("myFile",this.pdf)
    this.mensuraInyectada.guardarVisacionMunicipal(this.visacionM).subscribe(
      res => {
        console.log(res)
        this.id.id_visacion_municipal = Object.values(res)[1].id
        this.mensuraInyectada.guardarVisacionMunicipalPDF(formdata).subscribe(
          res => {
            console.log(res)
          },
          err => console.error(err)
        )
      },
      err => console.error(err)
    )
  }

  generarCaratula(){
    this.caratulaInyectada.guardarCaratulaMensura(this.caratula).subscribe(
      res => {
        console.log(res)
        this.id_mensura = Object.values(res)[1].id
        console.log(this.id_mensura)
        
        this.updateSubsistencia(this.id.id_subsistencia)
        this.updateActaConformidad(this.id.id_acta_conformidad)
        this.updateAprobacionAgrimensura(this.id.id_aprobacion_agrimensura)
        this.updateCertificado(this.id.id_certificado)
        this.updateCitacionColindante(this.id.id_citacion_colindante)
        this.updateCopiaEscritura(this.id.id_copia_escritura)
        this.updateEstadoCuenta(this.id.id_estado_cuenta)
        //this.updateMemoriaDescriptiva(this.id.id_memoria_descriptiva)
        this.updateNotificacion(this.id.id_notificacion)
        this.updatePlanoDigital(this.id.id_planoDigital)
        this.updatePlanoProyectoObra(this.id.id_plano_proyecto_obra)
        this.updateVisacionAgrimensores(this.id.id_visacion_agrimensores)
        this.updateVisacionMunicipal(this.id.id_visacion_municipal)
        this.historial.fechahora = `${this.FechaHora.getDate()}/${this.FechaHora.getMonth()}/${this.FechaHora.getFullYear()}  ${this.FechaHora.getHours()}:${this.FechaHora.getMinutes()}`
        console.log(this.historial.fechahora)
        this.historial.mensura_id = this.id_mensura
        console.log(this.historial)
        
        this.historialInyectado.guardarHistorial(this.historial).subscribe(
          res =>{
            console.log(res)
          },
          err => console.error(err)
        )       
      },
      err => console.error(err)
    )
  }

  updateSubsistencia(id: any){
    delete this.susbsitencia.id
    delete this.susbsitencia.pdf_subsistencia
    delete this.susbsitencia.titulo_subsistencia
    this.susbsitencia.mensura_id = this.id_mensura
    this.mensuraInyectada.updateSubsistencia(id, this.susbsitencia).subscribe(
      res => {
        console.log(res)
      },
      err => console.error(err)
    )
  }

  updateActaConformidad(id: any){
    delete this.acta.id
    delete this.acta.pdf_acta
    this.acta.mensura_id = this.id_mensura

    this.mensuraInyectada.updateActaConformidad(id, this.acta).subscribe(
      res => {
        console.log(res)
      },
      err => console.error(err)
    )
  }

  updateAprobacionAgrimensura(id:any){
    delete this.aprobacion.id
    delete this.aprobacion.pdf_aprobacion_agrimensura
    this.aprobacion.mensura_id = this.id_mensura

    this.mensuraInyectada.updateAprobacionAgrimensura(id, this.aprobacion).subscribe(
      res => {
        console.log(res)
      },
      err => console.error(err)
    )
  }

  updateCertificado(id:any){
    delete this.certificado.id
    delete this.certificado.informe_catastral
    delete this.certificado.pdf_certificado
    this.certificado.mensura_id = this.id_mensura

    this.mensuraInyectada.updateCertificados(id, this.certificado).subscribe(
      res => {
        console.log(res)
      },
      err => console.error(err)
    )
  }

  updateCitacionColindante(id:any){
    delete this.citacion.id
    delete this.citacion.pdf_citacion
    this.citacion.mensura_id = this.id_mensura

    this.mensuraInyectada.updateCitacionColindante(id, this.citacion).subscribe(
      res => {
        console.log(res)
      },
      err => console.error(err)
    )
  }

  updateCopiaEscritura(id:any){
    delete this.copia.id
    delete this.copia.pdf_escritura
    this.copia.mensura_id = this.id_mensura
    
    this.mensuraInyectada.updateCopiaEscritura(id, this.copia).subscribe(
      res => {
        console.log(res)
      },
      err => console.error(err)
    )
  }

  updateEstadoCuenta(id: any){
    delete this.estadoCuenta.id
    delete this.estadoCuenta.db_nodb
    this.estadoCuenta.mensura_id = this.id_mensura

    this.mensuraInyectada.updateEstadoCuenta(id, this.estadoCuenta).subscribe(
      res => {
        console.log(res)
      },
      err => console.error(err)
    )
  }

  updateMemoriaDescriptiva(id: any){
    delete this.memoriaD.id
    delete this.memoriaD.cantidad
    delete this.memoriaD.db_nodbmem
    this.memoriaD.mensura_id = this.id_mensura
    
    this.mensuraInyectada.updateMemoriasDescriptivas(id, this.memoriaD).subscribe(
      res => {
        console.log(res)
      },
      err => console.error(err)
    )
  }
  
  updateNotificacion(id:any){
    delete this.notificacion.id
    delete this.notificacion.pdf_notificacion
    this.notificacion.mensura_id = this.id_mensura

    this.mensuraInyectada.updateNotificaciones(id, this.notificacion).subscribe(
      res => {
        console.log(res)
      },
      err => console.error(err)
    )
  }

  updatePlanoDigital(id: any){
    delete this.planoDigital.id
    delete this.planoDigital.pdf_plano_digital
    this.planoDigital.mensura_id = this.id_mensura

    this.mensuraInyectada.updatePlanoDigital(id, this.planoDigital).subscribe(
      res => {
        console.log(res)
      },
      err => console.error(err)
    )
  }

  updatePlanoProyectoObra(id: any){
    delete this.planoProyectoObras.id
    delete this.planoProyectoObras.pdf_proyecto_obra
    this.planoProyectoObras.mensura_id = this.id_mensura

    this.mensuraInyectada.updatePlanoProyectoObras(id, this.planoProyectoObras).subscribe(
      res => {
        console.log(res)
      },
      err => console.error(err)
    )
  }

  updateVisacionAgrimensores(id: any){
    delete this.visacionA.id
    delete this.visacionA.pdf_visado_agrimensores
    this.visacionA.mensura_id = this.id_mensura

    this.mensuraInyectada.updateVisacionAgrimensores(id, this.visacionA).subscribe(
      res => {
        console.log(res)
      },
      err => console.error(err)
    )
  }

  updateVisacionMunicipal(id: any){
    delete this.visacionM.id
    delete this.visacionM.pdf_visacion_municipal
    this.visacionM.mensura_id = this.id_mensura

    this.mensuraInyectada.updateVisacionMunicipal(id, this.visacionM).subscribe(
      res => {
        console.log(res)
      },
      err => console.error(err)
    )
  }

}
