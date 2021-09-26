import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import { CaratulaOficio } from '../models/caratulaOficios';
import { CaratulasService } from '../services/caratulas.service';

@Component({
  selector: 'app-caratula-oficios-imprimir',
  templateUrl: './caratula-oficios-imprimir.component.html',
  styleUrls: ['./caratula-oficios-imprimir.component.scss']
})
export class CaratulaOficiosImprimirComponent implements OnInit {
  caratulaOficios: CaratulaOficio = new CaratulaOficio()

  constructor(private ruta: ActivatedRoute, public CaratulaExpedienteIny: CaratulasService) { }

  value = '/caratulaOficiosImprimir'
  elementType = NgxQrcodeElementTypes.URL;
  errorCorrectionLevel = NgxQrcodeErrorCorrectionLevels.HIGH
  
  ngOnInit(): void {
    this.caratulaOficios = this.CaratulaExpedienteIny.caratulaOficio
    console.log(this.caratulaOficios)
  }

}
