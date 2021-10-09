import { Injectable } from '@angular/core';
import { Notas } from '../models/notas';

@Injectable({
  providedIn: 'root'
})
export class NotasExternasService {
  nota: Notas = new Notas()
  constructor() { }
}
