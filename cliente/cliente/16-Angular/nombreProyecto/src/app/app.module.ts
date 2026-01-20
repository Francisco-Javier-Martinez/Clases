import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentePruebaComponent } from './components/componente-prueba/componente-prueba.component';
import { ProductoCardComponent } from './components/producto-card/producto-card.component';
import { ComponentePadreComponent } from './components/componente-padre/componente-padre.component';
import { ComponenteHijoComponent } from './components/componente-hijo/componente-hijo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SergiMierderDirective } from './directives/sergi-mierder.directive';
import { NuevapipePipe } from './pipes/nuevapipe.pipe';
@NgModule({
  declarations: [
    AppComponent,
    ComponentePruebaComponent,
    ProductoCardComponent,
    ComponentePadreComponent,
    ComponenteHijoComponent,
    SergiMierderDirective,
    NuevapipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
