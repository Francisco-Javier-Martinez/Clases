import { Component } from '@angular/core';
import { JuradoService } from 'src/app/servicios/jurado.service';

@Component({
  selector: 'app-jurado',
  templateUrl: './jurado.component.html',
  styleUrls: ['./jurado.component.css']
})
export class JuradoComponent {
  id: number;
  puntuacion: number;
  jurado:any[] = [];

  constructor(private juradoServicio: JuradoService) {
    this.id = 0;
    this.puntuacion = 0;
  }

  //arraid Usuarios
  ngOnInit(){
    this.jurado=this.juradoServicio.getJurado();
  }
  
}
