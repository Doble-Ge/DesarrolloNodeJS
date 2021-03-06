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

  updateActaConformidad(id: any, nuevaActa){
    return this.http.put(this.API_URL + '/acta_conformidad/' + id, nuevaActa)
  }
 
  getActa(mensura_id: number){
    return this.http.get(this.API_URL + '/acta_conformidad/' + mensura_id)
  }

  guardarAprobacionAgrimensura (aprobacion: AprobacionAgrimensura): Observable<AprobacionAgrimensura>{
    return this.http.post<AprobacionAgrimensura>(this.API_URL + '/aprobacion_agrimensura', aprobacion)
  }

  guardarAprobacionAgrimensuraPDF (pdf: any): Observable<any>{
    return this.http.post<any>(`${this.API_URL}/aprobacion_agrimensuraPDF`,pdf)
  }

  getAprobacion(mensura_id: number){
    return this.http.get(this.API_URL + '/aprobacion_agrimensura/' + mensura_id)
  }

  updateAprobacionAgrimensura (id: any, nuevaAprobacion){
    return this.http.put(this.API_URL + '/aprobacion_agrimensura/' + id, nuevaAprobacion)
  }

  guardarCertificados (certificado: Certificados): Observable<Certificados>{
    return this.http.post<Certificados>(this.API_URL + '/certificado', certificado)
  }

  guardarCertificadosPDF (pdf: any): Observable<any>{
    return this.http.post<any>(`${this.API_URL}/certificadoPDF`,pdf)
  }

  getCertificado(mensura_id: number){
    return this.http.get(this.API_URL + '/certificado/' + mensura_id)
  }

  updateCertificados (id: any, nuevoCertificado){
    return this.http.put(this.API_URL + '/certificado/' + id, nuevoCertificado)
  }

  guardarCitacionColindantes (citacion: CitacionColindantes): Observable<CitacionColindantes>{
    return this.http.post<CitacionColindantes>(this.API_URL + '/citacion_colindante',citacion)
  }

  guardarCitacionColindantesPDF (pdf: any): Observable<any>{
    return this.http.post<any>(`${this.API_URL}/citacion_colindantePDF`,pdf)
  }

  getCitacion (mensura_id: number){
    return this.http.get(this.API_URL + '/citacion_colindante/' + mensura_id)
  }

  updateCitacionColindante (id: any, nuevaCitacion){
    return this.http.put(this.API_URL + '/citacion_colindante/' + id, nuevaCitacion)
  }

  guardarCopiaEscritura(copia: CopiaEscritura): Observable<CopiaEscritura>{
    return this.http.post<CopiaEscritura>(this.API_URL + '/copia_escritura',copia)
  }

  guardarCopiaEscrituraPDF (pdf: any): Observable<any>{
    return this.http.post<any>(`${this.API_URL}/copia_escrituraPDF`,pdf)
  }

  getCopiaEscritura (mensura_id:number) {
    return this.http.get(this.API_URL + '/copia_escritura/' + mensura_id)
  }

  updateCopiaEscritura (id: any, nuevaCopiaE){
    return this.http.put(this.API_URL + '/copia_escritura/' + id, nuevaCopiaE)
  }

  guardarEstadoCuenta(estadoC: EstadoCuenta): Observable<EstadoCuenta>{
    return this.http.post<EstadoCuenta>(this.API_URL + '/estado_cuenta',estadoC)
  }

  updateEstadoCuenta (id: any, nuevoEstadoC){
    return this.http.put(this.API_URL + '/estado_cuenta/' + id, nuevoEstadoC)
  }

  getEstadoCuenta (mensura_id: number) {
    return this.http.get(this.API_URL + '/estado_cuenta/' + mensura_id)
  }

  guardarMemoriasDescriptivas (memoriaD: MemoriaDescriptivas): Observable<MemoriaDescriptivas>{
    return this.http.post<MemoriaDescriptivas>(this.API_URL + '/memoria_descriptiva',memoriaD)
  }

  updateMemoriasDescriptivas(id: any, nuevaMemoria){
    return this.http.put(this.API_URL + '/memoria_descriptiva/' + id, nuevaMemoria)
  }

  getMemoriaDescriptiva (mensura_id: number){
    return this.http.get(this.API_URL + '/memoria_descriptiva/' + mensura_id)
  }

  guardarNotificaciones (notificacion: Notificaciones): Observable<Notificaciones>{
    return this.http.post<Notificaciones>(this.API_URL + '/notificacion',notificacion)
  }
  
  guardarNotificacionesPDF(pdf: any): Observable<any>{
    return this.http.post<any>(`${this.API_URL}/notificacionPDF`,pdf)
  }

  getNotifiaciones (mensura_id: number){
    return this.http.get(this.API_URL + '/notificacion/' + mensura_id)
  }

  updateNotificaciones(id:any, nuevaNotificacion){
    return this.http.put(this.API_URL + '/notificacion/' + id, nuevaNotificacion)
  }

  guardarPlanoDigital (plano: PlanoDigital): Observable<PlanoDigital>{
    return this.http.post<PlanoDigital>(this.API_URL + '/plano_digital',plano)
  }

  getPlanoDigital (mensura_id: number){
    return this.http.get(this.API_URL + '/plano_digital/' + mensura_id)
  }

  guardarPlanoDigitalPDF (pdf: any): Observable<any>{
    return this.http.post<any>(`${this.API_URL}/plano_digitalPDF`,pdf)
  }

  updatePlanoDigital(id: any, nuevoPlanoD){
    return this.http.put(this.API_URL + '/plano_digital/' + id,nuevoPlanoD)
  }

  guardarPlanoProyectoObras (planoProyecto: PlanoProyectoObras): Observable<PlanoProyectoObras>{
    return this.http.post<PlanoProyectoObras>(this.API_URL + '/plano_proyecto_obra',planoProyecto)
  }

  guardarPlanoProyectoObrasPDF (pdf: any): Observable<any>{
    return this.http.post<any>(`${this.API_URL}/plano_proyecto_obraPDF`,pdf)
  }

  getPlanoProyecto(mensura_id: number) {
    return this.http.get(this.API_URL + '/plano_proyecto_obra/' + mensura_id)
  }

  updatePlanoProyectoObras(id: any, nuevoPlanoP){
    return this.http.put(this.API_URL + '/plano_proyecto_obra/' + id, nuevoPlanoP)
  }

  guardarSubsistencia(subsistencia: Subsistencia): Observable<Subsistencia>{
    return this.http.post<Subsistencia>(this.API_URL + '/subsistencia/',subsistencia)
  }

  getSubsistencia (mensura_id:number){
    return this.http.get(this.API_URL + '/subsistencia/' + mensura_id)
  }

  guardarSubsistenciaPDF(pdf: any): Observable<any>{
    return this.http.post<any>(`${this.API_URL}/subsistenciaPDF`,pdf)
  }

  updateSubsistencia(id:any, nuevaSubsistencia){
    return this.http.put(this.API_URL + '/subsistencia/' + id, nuevaSubsistencia)
  }

  guardarVisacionAgrimensores(visacionA: VisacionAgrimensores): Observable<VisacionAgrimensores>{
    return this.http.post<VisacionAgrimensores>(this.API_URL + '/visacion_agrimensores',visacionA)
  }

  getVisacionAgrimensores(mensura_id:number) {
    return this.http.get(this.API_URL + '/visacion_agrimensores/' + mensura_id)
  }

  guardarVisacionAgrimensoresPDF(pdf: any): Observable<any>{
    return this.http.post<any>(`${this.API_URL}/visacion_agrimensoresPDF`,pdf)
  }

  updateVisacionAgrimensores(id:any, nuevaVisacionA){
    return this.http.put(this.API_URL + '/visacion_agrimensores/' + id, nuevaVisacionA)
  }

  guardarVisacionMunicipal(visacionM: VisacionMunicipal): Observable<VisacionMunicipal>{
    return this.http.post<VisacionMunicipal>(this.API_URL + '/visacion_municipal',visacionM)
  }

  guardarVisacionMunicipalPDF(pdf: any): Observable<any>{
    return this.http.post<any>(`${this.API_URL}/visacion_municipalPDF`,pdf)
  }

  updateVisacionMunicipal(id: any, nuevaVisacionM){
    return this.http.put(this.API_URL + '/visacion_municipal/' + id, nuevaVisacionM)
  }

  getVisacionMunicipal (mensura_id: number){
    return this.http.get(this.API_URL + '/visacion_municipal/' + mensura_id)
  }


}
