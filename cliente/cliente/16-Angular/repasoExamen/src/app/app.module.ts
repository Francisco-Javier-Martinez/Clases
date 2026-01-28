import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VidiojuegosComponent } from './componentes/vidiojuegos/vidiojuegos.component';
import { FormsModule } from '@angular/forms';
import { VidioPipesPipe } from './pipes/vidio-pipes.pipe';
import { DirecGameDirective } from './directivas/direc-game.directive';

@NgModule({
  declarations: [
    AppComponent,
    VidiojuegosComponent,
    VidioPipesPipe,
    DirecGameDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
