import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-padre',
  templateUrl: './componente-padre.component.html',
  styleUrls: ['./componente-padre.component.css']
})
export class ComponentePadreComponent {
  valorContador: number=0;
  
  incrementarContador(){
    this.valorContador++;
  }
  
  decrementarContador(){
    this.valorContador--;
  }
}
