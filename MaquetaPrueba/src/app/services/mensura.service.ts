import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActaConformidad, AprobacionAgrimensura, Certificados, CitacionColindantes, CopiaEscritura } from '../models/mensura';

@Injectable({
  providedIn: 'root'
})
export class MensuraService {

  API_URL: string = 'http://localhost:3000/api'

  constructor(private http: HttpClient) { }

  guardarActaConformidad (acta: ActaConformidad): Observable<ActaConformidad>{
    return this.http.post<ActaConformidad>(this.API_URL + '/acta_conformidad', acta)
  }
  guardarActaConformidadPDF (pdf: any): Observable<any>{
    return this.http.post<any>(`${this.API_URL}/acta_conformidadPDF`,pdf)
  }

  guardarAprobacionAgrimensura (aprobacion: AprobacionAgrimensura): Observable<AprobacionAgrimensura>{
    return this.http.post<AprobacionAgrimensura>(this.API_URL + '/aprobacion_agrimensura', aprobacion)
  }

  guardarAprobacionAgrimensuraPDF (pdf: any): Observable<any>{
    return this.http.post<any>(`${this.API_URL}/aprobacion_agrimensuraPDF`,pdf)
  }

  guardarCertificados (certificado: Certificados): Observable<Certificados>{
    return this.http.post<Certificados>(this.API_URL + '/certificado', certificado)
  }

  guardarCertificadosPDF (pdf: any): Observable<any>{
    return this.http.post<any>(`${this.API_URL}/certificadoPDF`,pdf)
  }

  guardarCitacionColindantes (citacion: CitacionColindantes): Observable<CitacionColindantes>{
    return this.http.post<CitacionColindantes>(this.API_URL + '/citacion_colindante',citacion)
  }

  guardarCitacionColindantesPDF (pdf: any): Observable<any>{
    return this.http.post<any>(`${this.API_URL}/citacion_colindantePDF`,pdf)
  }

  guardarCopiaEscritura(copia: CopiaEscritura): Observable<CopiaEscritura>{
    return this.http.post<CopiaEscritura>(this.API_URL + '/copia_escritura',copia)
  }

  guardarCopiaEscrituraPDF (pdf: any): Observable<any>{
    return this.http.post<any>(`${this.API_URL}/copia_escrituraPDF`,pdf)
  }


}
