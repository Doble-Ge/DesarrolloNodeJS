import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { SolicitudesMensuraComponent } from './solicitudes-mensura/solicitudes-mensura.component';
import { NuevaSolicitudComponent } from './solicitudes-mensura/nueva-solicitud/nueva-solicitud.component';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { NuevaSolicitudAgrimensorComponent } from './nueva-solicitud-agrimensor/nueva-solicitud-agrimensor.component';
import { PaginaErrorComponent } from './pagina-error/pagina-error.component';
import { ContactoModuloComponent } from './contacto-modulo/contacto-modulo.component';
import { LoginModuloComponent } from './login-modulo/login-modulo.component';
import { ModuloRegistroComponent } from './modulo-registro/modulo-registro.component';
import { FormsModule } from '@angular/forms';
import { ExpedienteMensuraComponent } from './expediente-mensura/expediente-mensura.component';
import { CaratulaMensuraImprimirComponent } from './caratula-mensura-imprimir/caratula-mensura-imprimir.component';
import { CaratulaNotaImprimirComponent } from './caratula-nota-imprimir/caratula-nota-imprimir.component';
import { CaratulaOficiosImprimirComponent } from './caratula-oficios-imprimir/caratula-oficios-imprimir.component';
import { CaratulaExternoImprimirComponent } from './caratula-externo-imprimir/caratula-externo-imprimir.component';
import { CaratulasService } from './services/caratulas.service';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { HttpClientModule } from '@angular/common/http';
import { ConsultaCaratulasComponent } from './consulta-caratulas/consulta-caratulas.component'

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    SolicitudesMensuraComponent,
    NuevaSolicitudComponent,
    PaginaInicioComponent,
    NuevaSolicitudAgrimensorComponent,
    PaginaErrorComponent,
    ContactoModuloComponent,
    LoginModuloComponent,
    ModuloRegistroComponent,
    ExpedienteMensuraComponent,
    CaratulaMensuraImprimirComponent,
    CaratulaNotaImprimirComponent,
    CaratulaOficiosImprimirComponent,
    CaratulaExternoImprimirComponent,
    ConsultaCaratulasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxQRCodeModule,
    HttpClientModule
  ],
  providers: [
    CaratulasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
