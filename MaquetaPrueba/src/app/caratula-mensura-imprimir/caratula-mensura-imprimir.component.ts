import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Caratula } from '../models/caratula';
import { CaratulasService } from '../services/caratulas.service';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels} from '@techiediaries/ngx-qrcode';

@Component({
  selector: 'app-caratula-mensura-imprimir',
  templateUrl: './caratula-mensura-imprimir.component.html',
  styleUrls: ['./caratula-mensura-imprimir.component.scss']
})
export class CaratulaMensuraImprimirComponent implements OnInit {
  caratula: Caratula = new Caratula()

  constructor(private ruta: ActivatedRoute, public CaratulaExpedienteIny: CaratulasService) { }

  value = '/caratulaImprimir'
  elementType = NgxQrcodeElementTypes.URL;
  errorCorrectionLevel = NgxQrcodeErrorCorrectionLevels.HIGH
  

  ngOnInit(): void {
    this.caratula = this.CaratulaExpedienteIny.caratulaExp
    //this.caratula = JSON.parse(this.ruta.snapshot.params.caratula)
    console.log(this.caratula)
  }

}
