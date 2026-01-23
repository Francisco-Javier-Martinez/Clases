import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComparsaService {

  constructor() { }
  //nombres de las comparsas y personas que las integran
  private arrayCompparsas: { nombre: string,problacion: string, integrantes: number }[] = [
    { nombre: 'Los Alegres', problacion: 'San Juan', integrantes: 25 },
    { nombre: 'Las Estrellas', problacion: 'Santiago', integrantes: 30 },
    { nombre: 'Ritmo y Color', problacion: 'Valparaíso', integrantes: 20 },
    { nombre: 'Sonrisas del Carnaval', problacion: 'Concepción', integrantes: 15 },
    { nombre: 'Fantasía Nocturna', problacion: 'Antofagasta', integrantes: 28 }
  ];
  //método para obtener las comparsas
  obtenerComparsas(){
    return this.arrayCompparsas;
  }

  //añadir una nueva comparsa
  anadirComparsa(nombre:string,problacion:string,integrantes:number){
    this.arrayCompparsas.push({nombre,problacion,integrantes});
  }
  //metodo para actualizar una comparsa
  actualizarComparsa(nombreBuscar: string){
    let nueboNombre = prompt("Ingrese el nuevo nombre de la comparsa:");
    let nuevaPoblacion = prompt("Ingrese la nueva población de la comparsa:");
    let nuevosIntegrantesStr = prompt("Ingrese el nuevo número de integrantes de la comparsa:");
    this.arrayCompparsas.forEach((comparsa) => {
      if(comparsa.nombre === nombreBuscar){
        comparsa.nombre= nueboNombre as string;
        comparsa.problacion= nuevaPoblacion as string;
        comparsa.integrantes= parseInt(nuevosIntegrantesStr as string);
      }
    });
  }
  //metodo para eliminar una comparsa
  eliminarComparsa(nombreBuscar: string){
    this.arrayCompparsas.forEach((comparsa) => {
      if(comparsa.nombre === nombreBuscar){
        let indiceBorrar = this.arrayCompparsas.indexOf(comparsa);
        this.arrayCompparsas.splice(indiceBorrar, 1);
      }
    });
  }
}
