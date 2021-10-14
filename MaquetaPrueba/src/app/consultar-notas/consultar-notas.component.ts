import { Component, OnInit } from '@angular/core';
import { Notas } from '../models/notas';
import { NotasExternasService } from '../services/notas-externas.service';

@Component({
  selector: 'app-consultar-notas',
  templateUrl: './consultar-notas.component.html',
  styleUrls: ['./consultar-notas.component.scss']
})
export class ConsultarNotasComponent implements OnInit {
  notas: Array<Notas> = new Array<Notas>()
  data
  arr
  constructor(private notasInyectadas: NotasExternasService) { }

  ngOnInit(): void {
    this.notasInyectadas.listarNotas().subscribe((notasDesdeAPI)=>{
      this.notas = notasDesdeAPI
      this.data = Object.values(this.notas)
      this.arr = this.data[0]
      console.log(this.arr)
    })
  }

}
