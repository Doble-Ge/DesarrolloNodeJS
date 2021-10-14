import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Correo } from '../models/correoClave';

@Injectable({
  providedIn: 'root'
})
export class CorreoClaveService {
  API_URL: string = 'http://localhost:3000/api'
  constructor(private http:HttpClient) { }

  postMail(mail: Correo): Observable<Correo> {
    return this.http.post<Correo>(this.API_URL + '/envio', mail)
  }
}
