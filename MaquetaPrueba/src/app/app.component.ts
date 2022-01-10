import { Component } from '@angular/core';
import { CaratulasService } from './services/caratulas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'catastro';
  constructor(public caratulaInyectada: CaratulasService){
  }

  
}
