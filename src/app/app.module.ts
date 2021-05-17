import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PersonasListadoComponent } from './personas/personas-listado/personas-listado.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { FormPersonaComponent } from './personas/form-persona/form-persona.component';
import {FormsModule} from '@angular/forms';
import {PersonaService} from './personas/persona.service';
import { ListadoTipoComponent } from './personas/listado-tipo/listado-tipo.component';
import { ListadoSituacionComponent } from './personas/listado-situacion/listado-situacion.component';
import { ListadoPosibleAsistenciaComponent } from './personas/listado-posible-asistencia/listado-posible-asistencia.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'listadoPersonas', component: PersonasListadoComponent },
  { path: 'personas/:id', component: FormPersonaComponent },
  { path: 'listado/tipo/:id', component: ListadoTipoComponent },
  { path: 'listado/estado/:id', component: ListadoSituacionComponent },
  { path: 'listado/posibles', component: ListadoPosibleAsistenciaComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PersonasListadoComponent,
    FormPersonaComponent,
    ListadoTipoComponent,
    ListadoSituacionComponent,
    ListadoPosibleAsistenciaComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [PersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
