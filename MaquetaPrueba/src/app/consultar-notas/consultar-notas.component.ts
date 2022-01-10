import { Component, OnInit } from '@angular/core';
import { Notas } from '../models/notas';
import { DownloadService } from '../services/download.service';
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
  constructor(private notasInyectadas: NotasExternasService,private descargaService: DownloadService) { }

  ngOnInit(): void {
    this.notasInyectadas.listarNotas().subscribe((notasDesdeAPI)=>{
      this.notas = notasDesdeAPI
      this.data = Object.values(this.notas)
      this.arr = this.data[0]
      console.log(this.arr)
    })
  }

  descargarNotaPDF(nombrePDF: string) {
    this.descargaService.downloadNotaExp(nombrePDF).subscribe(res => {
      if (res) {
        const url = window.URL.createObjectURL(this.returnBlob(res))
        window.open(url)
      }
    })
  }

  returnBlob(res): Blob {
    console.log('file download!')
    return new Blob([res], { type: 'application/pdf'})
  }

}
