import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EncabezadoComponent } from '../encabezado/encabezado.component';
import { Usuario } from '../models/usuario';
import { DownloadService } from '../services/download.service';
import { UsuarioService } from '../services/usuario.service';


@Component({
  selector: 'app-login-modulo',
  templateUrl: './login-modulo.component.html',
  styleUrls: ['./login-modulo.component.scss']
})
export class LoginModuloComponent implements OnInit {
  usuario: Usuario = new Usuario()
  usuarioDesdeBase: any
  data
  fileName = 'acta_15-11-2021_21-29_Acta-conformidad_Matias-Fuentes.pdf'

  constructor(private usuarioInyectado: UsuarioService, private Ruta: Router, private donwloadService: DownloadService) { }

  ngOnInit(): void {
  }
  
  ingresar(){
  this.usuarioInyectado.getUsuario(this.usuario.cuil).subscribe(
      res => {
        this.usuarioDesdeBase = res
        this.data = Object.values(this.usuarioDesdeBase)
        this.data[0].pass = this.usuario.pass
        this.usuarioInyectado.comprobacionUsuario(this.data[0]).subscribe(
          res => {
            this.usuarioInyectado.usuarioLogeado = this.data[0]
            if(this.data[0].primerLogin == true){
              alert("Por ser el primer inicio de sesion, debe cambiar la contraseña")
              this.Ruta.navigateByUrl("/cambioContrasena")
            }else{
              this.Ruta.navigateByUrl("/paginaInicio")
            }
          },
          err => alert("Contraseña incorrecta")
        )

        /*this.usuarioDesdeBase = res
        this.data = Object.values(this.usuarioDesdeBase)
        if(this.usuario.pass == this.data[0].pass) {
          alert("Usuario correcto")
          this.usuarioInyectado.usuarioLogeado = this.data[0]
          this.usuarioInyectado.loginCorrecto = 1
          if(this.data[0].primerLogin == true){
            alert("Por ser el primer inicio de sesion, debe cambiar la contraseña")
            this.Ruta.navigateByUrl("/cambioContrasena")
          }else{
            this.Ruta.navigateByUrl("/paginaInicio")
          }
        }else{
          alert("Contraseña incorrecta")
        }*/
      },
      err => console.error(err)
    )
  }

  returnBlob(res): Blob {
    console.log('file download!')
    return new Blob([res], { type: 'application/pdf'})
  }

  download() {
    this.donwloadService.downloadActaConformidad(this.fileName).subscribe(res => {
      if (res) {
        const url =window.URL.createObjectURL(this.returnBlob(res));
        window.open(url)
      }
    })
  }
}
