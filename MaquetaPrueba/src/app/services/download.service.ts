import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {
  API_URL = 'http://localhost:3000/api/'

  constructor(private http: HttpClient) { }

  downloadNotaExp(x: string): Observable<any> {
    const param = new HttpParams().set('filename', x);
    const options = {
      params: param
    };
    return this.http.get(this.API_URL + 'notasExpPDF/download', {...options, responseType: 'blob'})
  }

  downloadActaConformidad(x: string): Observable<any>{
    const param = new HttpParams().set('filename', x);
    const options = {
      params: param
    };
    return this.http.get(this.API_URL + 'acta_conformidadPDF/download', {...options, responseType: 'blob'});
  }

  downloadAprobacionAgrimensor(x: string): Observable<any>{
    const param = new HttpParams().set('filename', x);
    const options = {
      params: param
    };
    return this.http.get(this.API_URL + 'aprobacion_agrimensuraPDF/download', {...options, responseType: 'blob'});
  }

  downloadCeritificado(x: string): Observable<any>{
    const param = new HttpParams().set('filename', x);
    const options = {
      params: param
    };
    return this.http.get(this.API_URL + 'certificadoPDF/download', {...options, responseType: 'blob'});
  }

  downloadCitacionColindante(x: string): Observable<any>{
    const param = new HttpParams().set('filename', x);
    const options = {
      params: param
    };
    return this.http.get(this.API_URL + 'citacion_colindantePDF/download', {...options, responseType: 'blob'});
  }

  downloadCopiaEscritura(x: string): Observable<any>{
    const param = new HttpParams().set('filename', x);
    const options = {
      params: param
    };
    return this.http.get(this.API_URL + 'copia_escrituraPDF/download', {...options, responseType: 'blob'});
  }

  downloadNotificacion(x: string): Observable<any>{
    const param = new HttpParams().set('filename', x);
    const options = {
      params: param
    };
    return this.http.get(this.API_URL + 'notificacionPDF/download', {...options, responseType: 'blob'});
  }

  downloadPlanoDigital(x: string): Observable<any>{
    const param = new HttpParams().set('filename', x);
    const options = {
      params: param
    };
    return this.http.get(this.API_URL + 'plano_digitalPDF/download', {...options, responseType: 'blob'});
  }

  downloadPlanoProyecto(x: string): Observable<any>{
    const param = new HttpParams().set('filename', x);
    const options = {
      params: param
    };
    return this.http.get(this.API_URL + 'plano_proyecto_obraPDF/download', {...options, responseType: 'blob'});
  }

  downloadSubsistencia(x: string): Observable<any>{
    const param = new HttpParams().set('filename', x);
    const options = {
      params: param
    };
    return this.http.get(this.API_URL + 'subsistenciaPDF/download', {...options, responseType: 'blob'});
  }

  downloadVisacionAgrimensores(x: string): Observable<any>{
    const param = new HttpParams().set('filename', x);
    const options = {
      params: param
    };
    return this.http.get(this.API_URL + 'visacion_agrimensoresPDF/download', {...options, responseType: 'blob'});
  }

  downloadVisacionMunicipal(x: string): Observable<any>{
    const param = new HttpParams().set('filename', x);
    const options = {
      params: param
    };
    return this.http.get(this.API_URL + 'visacion_municipalPDF/download', {...options, responseType: 'blob'});
  }
}
