import { Component, OnInit } from '@angular/core';

class Usuario{
  nombre: string
  apellido: string
  password: string
  cuil: number
  email: string
  tipoUsuario: string

  constructor(){
    this.nombre = ""
    this.apellido = ""
    this.password = ""
    this.cuil
    this.email = ""
    this.tipoUsuario = ""
  }
}

@Component({
  selector: 'app-modulo-registro',
  templateUrl: './modulo-registro.component.html',
  styleUrls: ['./modulo-registro.component.scss']
})
export class ModuloRegistroComponent implements OnInit {
  usuario: Usuario = new Usuario()

  constructor() { }

  ngOnInit(): void {
  }

  agregarUsuario(){
    nombre: this.usuario.nombre
    apellido: this.usuario.apellido
    password: this.usuario.password
    cuil: this.usuario.cuil
    email: this.usuario.email
    tipoUsuario: this.usuario.tipoUsuario
  
    console.log(this.usuario)
    alert('El usuario ha sido registrado correctamente')
  }
  

}
