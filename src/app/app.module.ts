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

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'listadoPersonas', component: PersonasListadoComponent },
  { path: 'personas/:id', component: FormPersonaComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PersonasListadoComponent,
    FormPersonaComponent,
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
