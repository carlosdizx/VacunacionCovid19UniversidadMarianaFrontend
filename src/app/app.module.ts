import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PersonasListadoComponent } from './personas/personas-listado/personas-listado.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PersonasListadoComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
