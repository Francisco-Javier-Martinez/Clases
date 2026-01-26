import { Component } from '@angular/core';
import { ComparsaService } from 'src/app/servicios/comparsa.service';
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
  comparsas:any[] = [];

  constructor(private juradoServicio: JuradoService,
    private comparsaService: ComparsaService
  ) {
    this.id = 0;
    this.puntuacion = 0;
  }

  //arraid Usuarios
  ngOnInit(){
    this.jurado=this.juradoServicio.getJurado();
    this.comparsas = this.comparsaService.obtenerComparsas();
  }
  
  
  darPuntuacion(nombre:string, puntuacion:number){
    this.comparsaService.añadirPuntuacion(nombre, puntuacion);
  }
  
}