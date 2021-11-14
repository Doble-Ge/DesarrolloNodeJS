import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Historial } from '../models/historial';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {
  historial: Historial = new Historial()
  API_URL: string = 'http://localhost:3000/api'
  constructor(private http: HttpClient) { }

  guardarHistorial(historial: Historial): Observable<Historial>{
    return this.http.post<Historial>(this.API_URL + '/historial', historial)
  }

  leerHistoriales(): Observable<Historial[]>{
    return this.http.get<Historial[]>(this.API_URL + '/historial')
  }

  updateHistorial(id:number, nuevoHistorial) {
    return this.http.put(this.API_URL + '/historial/' + id, nuevoHistorial)
  }
}
