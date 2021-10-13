import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Notas } from '../models/notas';

@Injectable({
  providedIn: 'root'
})
export class NotasExternasService {
  nota: Notas = new Notas()
  API_URL: string = 'http://localhost:3000/api'
  constructor(private http: HttpClient) { }

  crearNota(nota: Notas): Observable<Notas> {
    return this.http.post<Notas>(this.API_URL + '/notasExp', nota)
  }

  listarNotas(): Observable<Notas[]>{
    return this.http.get<Notas[]>(this.API_URL + '/notasExp')
  }
}
