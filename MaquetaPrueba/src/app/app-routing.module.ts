import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaratulaExternoImprimirComponent } from './caratula-externo-imprimir/caratula-externo-imprimir.component';
import { CaratulaMensuraImprimirComponent } from './caratula-mensura-imprimir/caratula-mensura-imprimir.component';
import { CaratulaNotaImprimirComponent } from './caratula-nota-imprimir/caratula-nota-imprimir.component';
import { CaratulaOficiosImprimirComponent } from './caratula-oficios-imprimir/caratula-oficios-imprimir.component';
import { ConsultaCaratulasComponent } from './consulta-caratulas/consulta-caratulas.component';
import { ContactoModuloComponent } from './contacto-modulo/contacto-modulo.component';
import { ExpedienteMensuraComponent } from './expediente-mensura/expediente-mensura.component';
import { LoginModuloComponent } from './login-modulo/login-modulo.component';
import { ModuloRegistroComponent } from './modulo-registro/modulo-registro.component';
import { NuevaSolicitudAgrimensorComponent } from './nueva-solicitud-agrimensor/nueva-solicitud-agrimensor.component';
import { PaginaErrorComponent } from './pagina-error/pagina-error.component';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { NuevaSolicitudComponent } from './solicitudes-mensura/nueva-solicitud/nueva-solicitud.component';
import { SolicitudesMensuraComponent } from './solicitudes-mensura/solicitudes-mensura.component';

const routes: Routes = [
  {
    path: '', component: LoginModuloComponent
  },
  {
    path: 'registro', component: ModuloRegistroComponent
  },
  {
    path: 'caratulaImprimir', component: CaratulaMensuraImprimirComponent
  },
  {
    path: 'caratulaNotaImprimir', component: CaratulaNotaImprimirComponent
  },
  {
    path: 'caratulaOficiosImprimir', component: CaratulaOficiosImprimirComponent
  },
  {
    path: 'caratulaExternoImprimir', component: CaratulaExternoImprimirComponent
  },
  {
    path: 'generarExpediente', component: ExpedienteMensuraComponent
  },
  {
    path: 'soliMensura', component: SolicitudesMensuraComponent
  },
  {
    path: 'agregarNuevaMensura', component: NuevaSolicitudAgrimensorComponent
    //NuevaSolicitudComponent
  },
  {
    path: 'paginaInicio', component: PaginaInicioComponent
  },
  {
    path: 'controlMensura', component: NuevaSolicitudComponent
  },
  {
    path: 'contacto', component: ContactoModuloComponent
  },
  {
    path: 'consultaCaratulas', component: ConsultaCaratulasComponent
  },

  {
    path: '**', component: PaginaErrorComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
