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
  numero= 20
  value = String(this.numero)
  elementType = NgxQrcodeElementTypes.URL;
  errorCorrectionLevel = NgxQrcodeErrorCorrectionLevels.HIGH
  
  ngOnInit(): void {
    this.caratulaOficios = this.CaratulaExpedienteIny.caratulaOficio
    console.log(this.caratulaOficios)

    this.value = 
  `Agente Interviniente: ${this.caratulaOficios.agenteInterviniente} 
Diligenciador: ${this.caratulaOficios.diligenciador}
Asunto: ${this.caratulaOficios.caratula_asunto}
Fecha: ${this.caratulaOficios.fecha}`
  
  }

  

}
