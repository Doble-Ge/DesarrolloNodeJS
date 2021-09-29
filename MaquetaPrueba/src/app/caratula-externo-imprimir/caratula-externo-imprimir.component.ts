import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import { CaratulaExterno } from '../models/caratulaExterno';
import { CaratulasService } from '../services/caratulas.service';

@Component({
  selector: 'app-caratula-externo-imprimir',
  templateUrl: './caratula-externo-imprimir.component.html',
  styleUrls: ['./caratula-externo-imprimir.component.scss']
})
export class CaratulaExternoImprimirComponent implements OnInit {
  caratulaExterno: CaratulaExterno = new CaratulaExterno()

  constructor(private ruta: ActivatedRoute, public CaratulaExternoIny: CaratulasService) { }

  value = '/caratulaExternoImprimir'
  elementType = NgxQrcodeElementTypes.URL;
  errorCorrectionLevel = NgxQrcodeErrorCorrectionLevels.HIGH
  ngOnInit(): void {
    this.caratulaExterno = this.CaratulaExternoIny.caratulaExterno
  
    console.log(this.caratulaExterno)
    this.value = 
  `AgenteInterviniente: ${this.caratulaExterno.agenteInterviniente} 
NRO Origen: ${this.caratulaExterno.numeroOrigen}
Asunto: ${this.caratulaExterno.caratula_asunto}
Fecha: ${this.caratulaExterno.fecha}  `
  }

}
