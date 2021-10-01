import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../services/usuario.service';


@Component({
  selector: 'app-modulo-registro',
  templateUrl: './modulo-registro.component.html',
  styleUrls: ['./modulo-registro.component.scss']
})
export class ModuloRegistroComponent implements OnInit {
  usuario: Usuario = new Usuario()

  constructor(private usuarioInyectado: UsuarioService) { }
  ngOnInit(): void {
    console.log(this.usuarioInyectado.usuario)
    this.usuario = this.usuarioInyectado.usuario
  }

  agregarUsuario(){
  
    console.log(this.usuario)
    this.usuarioInyectado.crearUsuario(this.usuario).subscribe(
      res => {
        console.log(res)
      },
      err => console.error(err)
    )
    alert('El usuario ha sido registrado correctamente')
  }
  
}
