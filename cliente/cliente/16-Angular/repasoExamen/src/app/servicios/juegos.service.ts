import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JuegosService {

  constructor() { }

  private arrayJuegos:{id:number,nombre: string, precio:number, valoracion:number}[]=[
      {id:1,nombre:'The Legend of Zelda: Breath of the Wild', precio:59.99, valoracion:9.5},
      {id:2,nombre:'God of War', precio:49.99, valoracion:9.0},
      {id:3,nombre:'Red Dead Redemption 2', precio:69.99, valoracion:9.8},
      {id:4,nombre:'Minecraft', precio:26.95, valoracion:9.2},
      {id:5,nombre:'The Witcher 3: Wild Hunt', precio:39.99, valoracion:9.7}
  ]

  getArrayJuegos(){
    return this.arrayJuegos;
  }

  meterJuegoNuevo(nombreNuevo:string,precioNuevo:number,valoracionNueva:number){
      this.arrayJuegos.push({id:this.arrayJuegos.length+1,nombre:nombreNuevo,precio:precioNuevo,valoracion:valoracionNueva});  
  }

  borrarJuego(id:number){
    this.arrayJuegos.forEach(element => {
        if(element.id==id){
          let idBorrar=this.arrayJuegos.indexOf(element);
          this.arrayJuegos.splice(idBorrar,1);
        }
    });
  }

  actualizar(id:number){
    let nuevoNombre= prompt("mete nombre a actualizar:");
    let precioNuevo= Number(prompt("Mete precio  nuevo:"));
    let valoracionNueva= Number(prompt("Valoracion Nueva"));
    if(nuevoNombre==null || precioNuevo==null || valoracionNueva==null){
      alert("Mete las cosas bien coño");
      return;
    }
    this.arrayJuegos.forEach(element => {
      if(element.id==id){
        element.nombre=nuevoNombre as string;
        element.precio=precioNuevo as number;
        element.valoracion=valoracionNueva as number;
      }
    });
  }
} 
