import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActaConformidad, AprobacionAgrimensura, Certificados, CitacionColindantes, CopiaEscritura, EstadoCuenta, MemoriaDescriptivas, Notificaciones, PlanoDigital, PlanoProyectoObras, Subsistencia, VisacionAgrimensores, VisacionMunicipal } from '../models/mensura';

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

  guardarEstadoCuenta(estadoC: EstadoCuenta): Observable<EstadoCuenta>{
    return this.http.post<EstadoCuenta>(this.API_URL + '/estado_cuenta',estadoC)
  }

 
  guardarMemoriasDescriptivas (memoriaD: MemoriaDescriptivas): Observable<MemoriaDescriptivas>{
    return this.http.post<MemoriaDescriptivas>(this.API_URL + '/memoria_descriptiva',memoriaD)
  }

  guardarNotificaciones (notificacion: Notificaciones): Observable<Notificaciones>{
    return this.http.post<Notificaciones>(this.API_URL + '/notificacion',notificacion)
  }
  
  guardarNotificacionesPDF(pdf: any): Observable<any>{
    return this.http.post<any>(`${this.API_URL}/notificacionPDF`,pdf)
  }

  guardarPlanoDigital (plano: PlanoDigital): Observable<PlanoDigital>{
    return this.http.post<PlanoDigital>(this.API_URL + '/plano_digital',plano)
  }

  guardarPlanoDigitalPDF (pdf: any): Observable<any>{
    return this.http.post<any>(`${this.API_URL}/plano_digitalPDF`,pdf)
  }

  guardarPlanoProyectoObras (planoProyecto: PlanoProyectoObras): Observable<PlanoProyectoObras>{
    return this.http.post<PlanoProyectoObras>(this.API_URL + '/plano_proyecto_obra',planoProyecto)
  }

  guardarPlanoProyectoObrasPDF (pdf: any): Observable<any>{
    return this.http.post<any>(`${this.API_URL}/plano_proyecto_obraPDF`,pdf)
  }

  guardarSubsistencia(subsistencia: Subsistencia): Observable<Subsistencia>{
    return this.http.post<Subsistencia>(this.API_URL + '/subsistencia',subsistencia)
  }

  guardarSubsistenciaPDF(pdf: any): Observable<any>{
    return this.http.post<any>(`${this.API_URL}/subsistenciaPDF`,pdf)
  }

  guardarVisacionAgrimensores(visacionA: VisacionAgrimensores): Observable<VisacionAgrimensores>{
    return this.http.post<VisacionAgrimensores>(this.API_URL + '/visacion_agrimensores',visacionA)
  }

  guardarVisacionAgrimensoresPDF(pdf: any): Observable<any>{
    return this.http.post<any>(`${this.API_URL}/visacion_agrimensoresPDF`,pdf)
  }

  guardarVisacionMunicipal(visacionM: VisacionMunicipal): Observable<VisacionMunicipal>{
    return this.http.post<VisacionMunicipal>(this.API_URL + '/visacion_municipal',visacionM)
  }

  guardarVisacionMunicipalPDF(pdf: any): Observable<any>{
    return this.http.post<any>(`${this.API_URL}/visacion_municipalPDF`,pdf)
  }



}
