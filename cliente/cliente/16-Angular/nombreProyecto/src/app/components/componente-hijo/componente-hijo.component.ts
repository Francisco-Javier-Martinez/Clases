import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-hijo',
  templateUrl: './componente-hijo.component.html',
  styleUrls: ['./componente-hijo.component.css']
})
export class ComponenteHijoComponent {
  valorContador: number=0;
  
  incrementarContador(){
    this.valorContador++;
  }
  
  decrementarContador(){
    this.valorContador--;
  }
}
