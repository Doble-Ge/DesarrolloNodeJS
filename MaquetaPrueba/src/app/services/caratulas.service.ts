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

   listarCaratulaOficio() : Observable<CaratulaOficio[]>{
     return this.http.get<CaratulaOficio[]>(this.API_URL + '/oficio')
   }

   obternerCaratula(id){
     return this.http.get(this.API_URL + '/oficio/' + id)
   } 

   //metodos BD caratula externo
   guardarCaratulaExterno(caratula: CaratulaExterno): Observable<CaratulaExterno> {
     return this.http.post<CaratulaExterno>(this.API_URL + '/externo', caratula)
   }

   listarCaratulaExterno(): Observable<CaratulaExterno[]> {
    return this.http.get<CaratulaExterno[]>(this.API_URL + '/externo')
   }

   //metodos BD caratula mensura
   guardarCaratulaMensura(caratula: Caratula): Observable<Caratula> {
     return this.http.post<Caratula>(this.API_URL + '/mensura', caratula)
   }
   listarCaratulaMensura(): Observable<Caratula[]> {
    return this.http.get<Caratula[]>(this.API_URL + '/mensura')
   }
   
   getCaratulaMensura(id): Observable<Caratula> {
     return this.http.get<Caratula>(this.API_URL + '/mensura/' + id)
   }

   updateCaratulaMensura(id: any, caratula: Caratula): Observable<Caratula> {
     return this.http.put<Caratula>(this.API_URL + '/mensura/' + id, caratula)
   }
}
