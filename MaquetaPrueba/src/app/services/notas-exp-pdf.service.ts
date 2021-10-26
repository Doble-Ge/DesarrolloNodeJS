import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotasExpPDFService {

  API_URL = 'http://localhost:3000/api'

  constructor(private http: HttpClient) { }

  guardarPDF(pdf: any): Observable<any>{
    return this.http.post<any>(`${this.API_URL}/notasExpPDF`,pdf)
  }
}
