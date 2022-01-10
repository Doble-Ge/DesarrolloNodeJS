import { Component, OnInit } from '@angular/core';
import { Notas } from '../models/notas';
import { NotasExternasService } from '../services/notas-externas.service';

@Component({
  selector: 'app-generar-notas',
  templateUrl: './generar-notas.component.html',
  styleUrls: ['./generar-notas.component.scss']
})
export class GenerarNotasComponent implements OnInit {
  nota: Notas = new Notas()
  pdf
  stringNombreArchivo
  constructor(private notaInyectada: NotasExternasService) { }

  ngOnInit(): void {
  }

  validacion(event){
    var archivo = (<HTMLInputElement> document.getElementById("archivo"))
    var path = archivo.value
    this.stringNombreArchivo = archivo.value
    var extension = /(.pdf|.docx)$/i
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

 agregarNota(){
   const formdata = new FormData()
   formdata.append("notas_exp",this.pdf)
   let FechaHora: Date = new Date()
   let nombreArchivo = `notas_exp_${FechaHora.getDate()}-${FechaHora.getMonth()+1}-${FechaHora.getFullYear()}_${FechaHora.getHours()}-${FechaHora.getMinutes()}_${this.stringNombreArchivo.substring(12)}`
   this.nota.pdf_notasExp = nombreArchivo
   this.notaInyectada.crearNota(this.nota).subscribe(
    res => {
      console.log(res)
      this.notaInyectada.guardarPDF(formdata).subscribe(
        res => {
          console.log(res)
          alert('Nota enviada correctamente')
        },
        err => console.error(err)
      )
    },
    err => console.error(err)
  )
 }
 
}
