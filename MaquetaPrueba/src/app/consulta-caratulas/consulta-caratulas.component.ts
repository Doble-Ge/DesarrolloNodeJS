import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Caratula } from '../models/caratula';
import { CaratulaExterno } from '../models/caratulaExterno';
import { CaratulaNota } from '../models/caratulaNota';
import { CaratulaOficio } from '../models/caratulaOficios';
import { CaratulasService } from '../services/caratulas.service';

@Component({
  selector: 'app-consulta-caratulas',
  templateUrl: './consulta-caratulas.component.html',
  styleUrls: ['./consulta-caratulas.component.scss']
})
export class ConsultaCaratulasComponent implements OnInit {
  caratulasNota: Array<CaratulaNota> = new Array<CaratulaNota>() 
  caratulasMensura: Array<Caratula> = new Array<Caratula>()
  caratulasExterno: Array<CaratulaExterno> = new Array<CaratulaExterno>()
  caratulasOficio: Array<CaratulaOficio> = new Array<CaratulaOficio>()
  arr: Array<CaratulaNota> = new Array<CaratulaNota>() 
  data
  index = 0
  tipoCaratula:string
  constructor(private caratulaInyectada: CaratulasService, private Ruta: Router) {

   }

  ngOnInit(): void {
   
  }

  seleccionarTipoCaratula(seleccion:number){
    if (seleccion == 1) {
      this.tipoCaratula = "Notas"
      this.caratulaInyectada.listarCaratulaNota().subscribe((caratulasNotaDesdeAPI)=>{
        this.caratulasNota = caratulasNotaDesdeAPI
        this.data = Object.values(this.caratulasNota)
        this.arr = this.data[0]
        console.log(this.arr)
      })
      
    }
    if (seleccion == 2) {
      this.tipoCaratula = "Mensuras"
      this.caratulaInyectada.listarCaratulaMensura().subscribe((caratulasMensuraDesdeAPI)=>{
        this.caratulasMensura = caratulasMensuraDesdeAPI
        this.data = Object.values(this.caratulasMensura)
        this.arr = this.data[0]
        console.log(this.arr)
      })
    }
    if (seleccion == 3) {
      this.tipoCaratula = "Oficios"
      this.caratulaInyectada.listarCaratulaOficio().subscribe((caratulasOficioDesdeAPI)=>{
        this.caratulasOficio = caratulasOficioDesdeAPI
        this.data = Object.values(this.caratulasOficio)
        this.arr = this.data[0]
        console.log(this.arr)
      })
    }
    if (seleccion == 4) {
      this.tipoCaratula = "ExpedientesExternos"
      this.caratulaInyectada.listarCaratulaExterno().subscribe((caratulasExternoDesdeAPI)=>{
        this.caratulasExterno = caratulasExternoDesdeAPI
        this.data = Object.values(this.caratulasExterno)
        this.arr = this.data[0]
        console.log(this.arr)
      })
    }
  }

  verCaratulaNota(caratula: CaratulaNota){
    this.caratulaInyectada.caratulaNota = caratula
    this.Ruta.navigateByUrl('/caratulaNotaImprimir')

  }

  verCaratulaMensura(caratula: Caratula) {
    this.caratulaInyectada.caratulaExp = caratula
    this.Ruta.navigateByUrl("/caratulaImprimir")
  }

  verCaratulaOficio(caratula: CaratulaOficio) {
    this.caratulaInyectada.caratulaOficio = caratula
    this.Ruta.navigateByUrl("/caratulaOficiosImprimir")
  }

  verCaratulaExterno(caratula: CaratulaExterno) {
    this.caratulaInyectada.caratulaExterno = caratula
    this.Ruta.navigateByUrl("/caratulaExternoImprimir")
  }



}  
