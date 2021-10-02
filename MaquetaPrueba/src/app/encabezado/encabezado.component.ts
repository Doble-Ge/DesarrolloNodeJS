import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss']
})
export class EncabezadoComponent implements OnInit {
  login = 0
  texto: string
  constructor(public UsuarioInyectado: UsuarioService) { }

  ngOnInit(): void {
  }

}
