import { Component, OnInit } from '@angular/core';
import { Contacto } from '../models/contactos';
import { ContactosService } from '../services/contactos.service';

@Component({
  selector: 'app-listado-consultas-contactos',
  templateUrl: './listado-consultas-contactos.component.html',
  styleUrls: ['./listado-consultas-contactos.component.scss']
})
export class ListadoConsultasContactosComponent implements OnInit {
  contactos: Array<Contacto> = new Array<Contacto>()
  data
  arr
  constructor(private contactosInyectados: ContactosService) { }

  ngOnInit(): void {
    this.contactosInyectados.listarContactos().subscribe((contactosDesdeAPI)=>{
      this.contactos = contactosDesdeAPI
      this.data = Object.values(this.contactos)
      this.arr = this.data[0]
      console.log(this.arr)
    })
  }

}
