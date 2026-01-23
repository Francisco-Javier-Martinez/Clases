import { Component } from '@angular/core';

@Component({
  selector: 'app-jurado',
  templateUrl: './jurado.component.html',
  styleUrls: ['./jurado.component.css']
})
export class JuradoComponent {
  id: number;
  puntuacion: number;

  constructor() {
    this.id = 0;
    this.puntuacion = 0;
  }

}
