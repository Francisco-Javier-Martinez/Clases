import { Component } from '@angular/core';
import { JuegosService } from 'src/app/servicios/juegos.service';

@Component({
  selector: 'app-vidiojuegos',
  templateUrl: './vidiojuegos.component.html',
  styleUrls: ['./vidiojuegos.component.css']
})
export class VidiojuegosComponent {
  constructor(private serGame : JuegosService){};

  arrayJuegos:any[]=[];
  nuevoNombre:string='';
  nuevoPrecio:number=0;
  nuevaValoracion:number=0;

  ngOnInit(){
    this.arrayJuegos=this.serGame.getArrayJuegos();
  }

  borrarGame(idBorrar:number){
    this.serGame.borrarJuego(idBorrar);
  }

  actuGame(idActu:number){
    this.serGame.actualizar(idActu);
  }

  meterGame(){
      this.serGame.meterJuegoNuevo(this.nuevoNombre,this.nuevoPrecio,this.nuevaValoracion);
  }
}
