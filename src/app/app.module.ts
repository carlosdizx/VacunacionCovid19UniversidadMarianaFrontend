import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PersonasListadoComponent } from './personas/personas-listado/personas-listado.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormPersonaComponent } from './personas/form-persona/form-persona.component';
import { FormsModule } from '@angular/forms';
import { PersonaService } from './personas/persona.service';
import { ListadoTipoComponent } from './personas/listado-tipo/listado-tipo.component';
import { ListadoSituacionComponent } from './personas/listado-situacion/listado-situacion.component';
import { ListadoPosibleAsistenciaComponent } from './personas/listado-posible-asistencia/listado-posible-asistencia.component';
import { ListadoPosiblesFacultadesComponent } from './personas/listado-posibles-facultades/listado-posibles-facultades.component';
import { UnoComponent } from './graficas/uno/uno.component';
import { ChartsModule } from 'ng2-charts';
import { DosComponent } from './graficas/dos/dos.component';
import { TresComponent } from './graficas/tres/tres.component';
import { CuatroComponent } from './graficas/cuatro/cuatro.component';
import { BioComponent } from './bio/bio.component';
import {FooterComponent} from './footer/footer.component';

const routes: Routes = [
	{ path: '', redirectTo: '/bio', pathMatch: 'full' },
	{ path: 'bio', component: BioComponent },
	{ path: 'listadoPersonas', component: PersonasListadoComponent },
	{ path: 'personas/:id', component: FormPersonaComponent },
	{ path: 'listado/tipo/:id', component: ListadoTipoComponent },
	{ path: 'listado/estado/:id', component: ListadoSituacionComponent },
	{ path: 'listado/posibles', component: ListadoPosibleAsistenciaComponent },
	{ path: 'listado/posiblesFacultades', component: ListadoPosiblesFacultadesComponent },
	{ path: 'graficas/1', component: UnoComponent },
	{ path: 'graficas/2', component: DosComponent },
	{ path: 'graficas/3', component: TresComponent },
	{ path: 'graficas/4', component: CuatroComponent },
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
		ListadoPosiblesFacultadesComponent,
		UnoComponent,
		DosComponent,
		TresComponent,
		CuatroComponent,
		BioComponent,
    FooterComponent,
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		FormsModule,
		RouterModule.forRoot(routes),
		ChartsModule,
	],
	providers: [PersonaService],
	bootstrap: [AppComponent],
})
export class AppModule {}
