import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { solicitudUsuario } from '../models/solicitudUsuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesUsuariosService {
  solicitud: solicitudUsuario = new solicitudUsuario()

  API_URL = 'http://localhost:3000/api'
  constructor(private http: HttpClient) { }

  crearSolicitud(solicitud: solicitudUsuario): Observable<solicitudUsuario> {
    return this.http.post<solicitudUsuario>(`${this.API_URL}/solicitudesUsuarios`, solicitud)
  }

  listarSolicitudes() : Observable<solicitudUsuario[]>{
    return this.http.get<solicitudUsuario[]>(`${this.API_URL}/solicitudesUsuarios`)
  }

  eliminarSolicitud(id: number) {
    return this.http.delete(`${this.API_URL}/solicitudesUsuarios/${id}`)
  }
}

