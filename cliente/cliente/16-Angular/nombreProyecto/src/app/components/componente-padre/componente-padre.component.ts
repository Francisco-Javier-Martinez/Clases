import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-padre',
  templateUrl: './componente-padre.component.html',
  styleUrls: ['./componente-padre.component.css']
})
export class ComponentePadreComponent {
  valorContador: number=0;
  
  reciboMensaje: string="";


  recibirMensaje($event: string){
    this.reciboMensaje=$event;
  }

  incrementarContador(){
    this.valorContador++;
  }
  
  decrementarContador(){
    this.valorContador--;
  }

 /*  mensajePadre: string="Ojala messi gane el mundial"; */
}
