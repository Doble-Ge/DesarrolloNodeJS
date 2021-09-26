import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import { CaratulaNota } from '../models/caratulaNota';
import { CaratulasService } from '../services/caratulas.service';

@Component({
  selector: 'app-caratula-nota-imprimir',
  templateUrl: './caratula-nota-imprimir.component.html',
  styleUrls: ['./caratula-nota-imprimir.component.scss']
})
export class CaratulaNotaImprimirComponent implements OnInit {
  caratulaNota: CaratulaNota = new CaratulaNota()

  constructor(private ruta: ActivatedRoute, public CaratulaExpedienteIny: CaratulasService) { }

  value = '/caratulaNotaImprimir'
  elementType = NgxQrcodeElementTypes.URL;
  errorCorrectionLevel = NgxQrcodeErrorCorrectionLevels.HIGH
  
  ngOnInit(): void {
    this.caratulaNota = this.CaratulaExpedienteIny.caratulaNota
    console.log(this.caratulaNota)
  }

}
