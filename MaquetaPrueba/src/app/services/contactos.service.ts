import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contacto } from '../models/contactos';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {
contactos: Contacto = new Contacto()
  API_URL: string = 'http://localhost:3000/api'
  constructor(private http: HttpClient) { }

  crearContacto(contacto: Contacto): Observable<Contacto> {
    return this.http.post<Contacto>(this.API_URL + '/contacto', contacto)
  }

  listarContactos() : Observable<Contacto[]>{
    return this.http.get<Contacto[]>(this.API_URL + '/contacto')
  }
}
