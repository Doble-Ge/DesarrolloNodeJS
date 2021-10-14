import { Component, OnInit } from '@angular/core';
import { Correo } from '../models/correoClave';
import { CorreoClaveService } from '../services/correo-clave.service';

@Component({
  selector: 'app-recuperar-clave',
  templateUrl: './recuperar-clave.component.html',
  styleUrls: ['./recuperar-clave.component.scss']
})
export class RecuperarClaveComponent implements OnInit {
  mail: Correo = new Correo()
  constructor(private mailInyectado: CorreoClaveService) { }

  ngOnInit(): void {
  }

  enviarCorreo(){
    this.generarClave()
    this.mailInyectado.postMail(this.mail).subscribe(
      res => {
        console.log(res)
      },
      err => console.error(err)
    )
  }

  generarClave(){
    const clave = '1231245'
    this.mail.mensaje = `Tu nueva clave de recuperacion es: ${clave}`
  }

}
