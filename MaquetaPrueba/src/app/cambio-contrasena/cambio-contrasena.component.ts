import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-cambio-contrasena',
  templateUrl: './cambio-contrasena.component.html',
  styleUrls: ['./cambio-contrasena.component.scss']
})
export class CambioContrasenaComponent implements OnInit {
  usuarioLog: Usuario = new Usuario()
  usuarioDesdeBase
  claveAntigua
  claveNueva
  data
  constructor(private usuarioInyectado: UsuarioService) { }

  ngOnInit(): void {
    
    this.usuarioLog = this.usuarioInyectado.usuarioLogeado
    console.log(this.usuarioLog)
  }

  cambiarClave(){
    this.usuarioInyectado.getUsuario(this.usuarioLog.cuil).subscribe(
        res => {
          this.usuarioDesdeBase = res
          this.data = Object.values(this.usuarioDesdeBase)
          if(this.claveAntigua == this.data[0].pass) {
            this.data[0].pass = this.claveNueva 
            this.data[0].primerLogin = false
            this.usuarioInyectado.updateContraseña(this.usuarioLog.cuil, this.data[0]).subscribe(
              res => {
                alert("Contraseña cambiada con exito")
                console.log(res)
                
              },
              err => console.error(err)
            )
          }else{
            alert("Contraseña incorrecta")
          }
        },
        err => console.error(err)
      )
    }
}
