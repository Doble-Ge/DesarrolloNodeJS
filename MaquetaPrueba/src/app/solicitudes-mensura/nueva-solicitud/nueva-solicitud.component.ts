import { Component, OnInit } from '@angular/core';
import { HistorialService } from 'src/app/services/historial.service';
import { MensuraService } from 'src/app/services/mensura.service';

@Component({
  selector: 'app-nueva-solicitud',
  templateUrl: './nueva-solicitud.component.html',
  styleUrls: ['./nueva-solicitud.component.scss']
})
export class NuevaSolicitudComponent implements OnInit {

  constructor(private mensuraInyectada: MensuraService, private historialIny: HistorialService) { }

  ngOnInit(): void {
    console.log(this.historialIny.historial)
    this.mensuraInyectada.getActa(this.historialIny.historial.mensura_id).subscribe(
      res => {
        console.log(res)
      },
      err => console.error(err)
    )
  }

}
