import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Profesores } from './componentes/profesores/profesores';
import { FormsModule } from '@angular/forms';
import { ProfesPipePipe } from './pipes/profes-pipe-pipe';
import { ProfesoresDirectiva } from './directivas/profesores-directiva';

@NgModule({
  declarations: [
    App,
    Profesores,
    ProfesPipePipe,
    ProfesoresDirectiva
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
