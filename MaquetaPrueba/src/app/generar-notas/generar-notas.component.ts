import { Component, OnInit } from '@angular/core';
import { Notas } from '../models/notas';

@Component({
  selector: 'app-generar-notas',
  templateUrl: './generar-notas.component.html',
  styleUrls: ['./generar-notas.component.scss']
})
export class GenerarNotasComponent implements OnInit {
  nota: Notas = new Notas()
  constructor() { }

  ngOnInit(): void {
  }

  validacion(){
    var archivo = (<HTMLInputElement> document.getElementById("archivo"))
    var path = archivo.value
    var extension = /(.pdf|.docx)$/i
    if(!extension.exec(path)){
      alert("Solo se aceptan PDF")
      archivo.value= null
    }else{
      alert("Archivo cargado")
    }
    console.log(archivo.value)

 }

 crearNota(){
   console.log(this.nota)
 }

}
