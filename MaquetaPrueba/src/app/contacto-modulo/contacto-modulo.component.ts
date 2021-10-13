import { Component, OnInit } from '@angular/core';
import { Contacto } from '../models/contactos';
import { ContactosService } from '../services/contactos.service';

@Component({
  selector: 'app-contacto-modulo',
  templateUrl: './contacto-modulo.component.html',
  styleUrls: ['./contacto-modulo.component.scss']
})
export class ContactoModuloComponent implements OnInit {
  contacto: Contacto = new Contacto()
  constructor(private contactosInyectados: ContactosService) { }

  ngOnInit(): void {
  }

  agregarContacto(){
    this.contactosInyectados.crearContacto(this.contacto).subscribe(
      res => {
        console.log(res)
      },
      err => console.error(err)
    )
  }

}
