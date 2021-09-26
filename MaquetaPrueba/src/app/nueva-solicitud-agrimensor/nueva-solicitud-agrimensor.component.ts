import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nueva-solicitud-agrimensor',
  templateUrl: './nueva-solicitud-agrimensor.component.html',
  styleUrls: ['./nueva-solicitud-agrimensor.component.scss']
})
export class NuevaSolicitudAgrimensorComponent implements OnInit {
  tipoFormulario: string;
  textoForm;
  constructor() { }

  ngOnInit(): void {
  }



  escribirHTML(numero: number){
    if (numero == 1){
      document.getElementById("formEditar").innerHTML = ` <form action="">
      <div class="form-group">
          <label for="control">Titularidad de propiedad inmueble</label>
          <input type="text" name="control" class="form-control w-25">
      </div>
      <br>
      <div class="form-group">
          <label for="observaciones">Adjuntar archivo</label>
          <input type="file" name="observaciones" class="form-control w-25"> 
      </div>
      
  </form>`;
    }
    if (numero == 2){
      document.getElementById("formEditar").innerHTML = ` <form action="">
      <div class="form-group">
          <label for="Informe catastral">Informe catastral</label>
          <input type="text" name="infCatastral" class="form-control w-25">
      </div>
      <br>
      <div class="form-group">
          <label for="adjunto">Adjuntar archivo</label>
          <input type="file" name="adjunto" class="form-control w-25"> 
      </div>
      
  </form>
      `
    }
    if (numero == 3){
      document.getElementById("formEditar").innerHTML = ` <form action="">
      <div class="form-group">
          <label for="Estado de cuenta">Estado de cuenta (Debe/No debe):</label>
          <input type="text" name="estadoCuenta" class="form-control w-25">
      </div>  
  </form>
      `;
    }
    if (numero == 4){
      document.getElementById("formEditar").innerHTML = `
      `;
    }
    if (numero == 5){
      document.getElementById("formEditar").innerHTML = `<form action="">
      <div class="form-group">
          <select>
              <option value = "agrimensor">Agrimensor</option>
              <option value = "particular">Particular</option>
          </select>
      </div>  
      </form>
      `;
    }
    if (numero == 6){
      document.getElementById("formEditar").innerHTML = `<form action="">
      <div class="form-group">
          <label for="Estado de cuenta">Adjuntar</label>
          <input type="file" name="adjuntar" class="form-control w-25">
      </div>  
  </form>
      `;
    }
    if (numero == 7){
      document.getElementById("formEditar").innerHTML = `<form action="">
      <div class="form-group">
          <label for="Ligado">Ligados:</label>
          <input type="file" name="Ligados" class="form-control w-25">
      </div>  
  </form>
      `;
    }
    if (numero == 8){
      document.getElementById("formEditar").innerHTML = `
      `;
    }
    if (numero == 9){
      document.getElementById("formEditar").innerHTML = `<form action="">
      <div class="form-group">
          <label for="Estado de cuenta">Estado de cuenta (Debe/No debe): </label>
          <select>
              <option>Debe</option>
              <option>No debe</option>
          </select>
          <label>Cuanto</label>
          <input type="text" name="estadoCuenta" class="form-control w-25">
      </div>  
      `;
    }
    if (numero == 10){
      document.getElementById("formEditar").innerHTML = `
      <form action="">
      <div class="form-group">
      <label for="datoAdjuntar">Adjunto</label>
      <input type="file" name="datoAdjuntar" class="form-control w-25">
        </div>  
      </form>
      `;
    }
    if (numero == 11){
      document.getElementById("formEditar").innerHTML = `<form action="">
      <div class="form-group">
          <label for="datoAdjuntar">Adjunto</label>
          <input type="file" name="datoAdjuntar" class="form-control w-25">
      </div>  
  </form>
      `;
    }
    if (numero == 12){
      document.getElementById("formEditar").innerHTML = `<form action="">
      <div class="form-group">
          <label for="datoAdjuntar">Adjunto</label>
          <input type="file" name="datoAdjuntar" class="form-control w-25">
      </div>  
  </form>
      `;
    }
    if (numero == 13){
      document.getElementById("formEditar").innerHTML = `<form action="">
      <div class="form-group">
          <label for="datoAdjuntar">Adjunto</label>
          <input type="file" name="datoAdjuntar" class="form-control w-25">
      </div>  
  </form>
      `;
    }
  }
}
