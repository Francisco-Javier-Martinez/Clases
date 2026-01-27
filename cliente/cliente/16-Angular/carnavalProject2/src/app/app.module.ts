import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComparsaListComponent } from './componentes/comparsa-list/comparsa-list.component';
import { DComparsasDirective } from './directivas/d-comparsas.directive';
import { PComparsasPipe } from './pipes/p-comparsas.pipe';
import { JuradoComponent } from './componentes/jurado/jurado.component';
import { FormsModule } from '@angular/forms';
import { NuevDirecDirective } from './directivas/nuev-direc.directive';

@NgModule({
  declarations: [
    AppComponent,
    ComparsaListComponent,
    DComparsasDirective,
    PComparsasPipe,
    JuradoComponent,
    NuevDirecDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
