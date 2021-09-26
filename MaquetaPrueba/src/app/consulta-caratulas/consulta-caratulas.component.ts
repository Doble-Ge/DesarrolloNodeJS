import { Component, OnInit } from '@angular/core';
import { Caratula } from '../models/caratula';
import { CaratulaNota } from '../models/caratulaNota';
import { CaratulasService } from '../services/caratulas.service';

@Component({
  selector: 'app-consulta-caratulas',
  templateUrl: './consulta-caratulas.component.html',
  styleUrls: ['./consulta-caratulas.component.scss']
})
export class ConsultaCaratulasComponent implements OnInit {
  caratulasNota: Array<CaratulaNota> = new Array<CaratulaNota>()
  arr: Array<CaratulaNota> = new Array<CaratulaNota>() 
  
  constructor(private caratulaInyectada: CaratulasService) {

   }

  ngOnInit(): void {
    this.caratulaInyectada.listarCaratulaNota().subscribe((caratulasNotaDesdeAPI)=>{
      this.caratulasNota = caratulasNotaDesdeAPI as []
      console.log(caratulasNotaDesdeAPI)
      console.log(this.caratulasNota)
    })
  }

}  
