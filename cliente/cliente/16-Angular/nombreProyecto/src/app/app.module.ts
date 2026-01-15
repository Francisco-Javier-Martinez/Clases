import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentePruebaComponent } from './components/componente-prueba/componente-prueba.component';
import { ProductoCardComponent } from './components/producto-card/producto-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentePruebaComponent,
    ProductoCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
