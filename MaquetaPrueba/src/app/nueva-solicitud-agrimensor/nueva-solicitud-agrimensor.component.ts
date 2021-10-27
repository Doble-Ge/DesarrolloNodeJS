import { Component, OnInit } from '@angular/core';
import { ActaConformidad, AprobacionAgrimensura, Certificados, CitacionColindantes, CopiaEscritura } from '../models/mensura';
import { MensuraService } from '../services/mensura.service';

@Component({
  selector: 'app-nueva-solicitud-agrimensor',
  templateUrl: './nueva-solicitud-agrimensor.component.html',
  styleUrls: ['./nueva-solicitud-agrimensor.component.scss']
})
export class NuevaSolicitudAgrimensorComponent implements OnInit {
  tipoFormulario: string;
  textoForm;
  nroBtn: number;
  acta: ActaConformidad = new ActaConformidad()
  aprobacion: AprobacionAgrimensura = new AprobacionAgrimensura()
  certificado: Certificados = new Certificados()
  citacion: CitacionColindantes = new CitacionColindantes()
  copia: CopiaEscritura = new CopiaEscritura()
  pdf
  constructor(private mensuraInyectada: MensuraService) { }

  ngOnInit(): void {
  }

  validacion(event){
     var archivo = (<HTMLInputElement> document.getElementById("archivo"))
     var path = archivo.value
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
     console.log(archivo.value)

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
    this.mensuraInyectada.guardarActaConformidad(this.acta).subscribe(
      res => {
        console.log(res)
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

}
