import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Caratula } from '../models/caratula';
import { CaratulaExterno } from '../models/caratulaExterno';
import { CaratulaNota } from '../models/caratulaNota';
import { CaratulaOficio } from '../models/caratulaOficios';

@Injectable({
  providedIn: 'root'
})
export class CaratulasService {

  API_URL: string = 'http://localhost:3000/api'
  caratulaExp: Caratula = new Caratula()
  caratulaExterno: CaratulaExterno = new CaratulaExterno()
  caratulaNota: CaratulaNota = new CaratulaNota()
  caratulaOficio: CaratulaOficio = new CaratulaOficio()
  constructor(private http: HttpClient) {
    
   }
   //metodos BD caratula nota
   guardarCaratulaNota(caratula: CaratulaNota): Observable<CaratulaNota> {
    return this.http.post<CaratulaNota>(this.API_URL + '/nota', caratula)
   }

   listarCaratulaNota() : Observable<CaratulaNota[]>{
     return this.http.get<CaratulaNota[]>(this.API_URL + '/nota')
   }
   //metodos BD caratula oficio
   guardarCaratulaOficio(caratula: CaratulaOficio): Observable<CaratulaOficio> {
     return this.http.post<CaratulaOficio>(this.API_URL + '/oficio', caratula)
   }
   //metodos BD caratula externo
   guardarCaratulaExterno(caratula: CaratulaExterno): Observable<CaratulaExterno> {
     return this.http.post<CaratulaExterno>(this.API_URL + '/externo', caratula)
   }
   //metodos BD caratula mensura
   guardarCaratulaMensura(caratula: Caratula): Observable<CaratulaExterno> {
     return this.http.post<CaratulaExterno>(this.API_URL + '/mensura', caratula)
   }
}
