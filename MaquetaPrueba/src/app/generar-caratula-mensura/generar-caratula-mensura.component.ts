import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Caratula } from '../models/caratula';
import { CaratulasService } from '../services/caratulas.service';
import { HistorialService } from '../services/historial.service';

@Component({
  selector: 'app-generar-caratula-mensura',
  templateUrl: './generar-caratula-mensura.component.html',
  styleUrls: ['./generar-caratula-mensura.component.scss']
})
export class GenerarCaratulaMensuraComponent implements OnInit {
  fechaHora: Date = new Date()
  caratulaMensura: Caratula = new Caratula()
  data
  constructor(private Ruta: Router, private historialIny: HistorialService, private caratulaInyectada: CaratulasService) { }

  ngOnInit(): void {
    this.caratulaInyectada.getCaratulaMensura(this.historialIny.historial.mensura_id).subscribe(
      res => {
        console.log(res)
        this.data = Object.values(res)
        this.caratulaMensura = this.data[0]
      }
    )
  }

  generarCaratula(){
    console.log(this.caratulaMensura)
    this.caratulaMensura.planoDe = this.caratulaMensura.caratula_asunto
    this.caratulaInyectada.updateCaratulaMensura(this.historialIny.historial.mensura_id, this.caratulaMensura).subscribe(
      res => {
        console.log(res)
      },
      err => console.error(err)
    )
  }
  imprimirCaratula(Caratula){
    this.caratulaInyectada.caratulaExterno = Caratula
    this.Ruta.navigateByUrl('/caratulaExternoImprimir')
  }
}
