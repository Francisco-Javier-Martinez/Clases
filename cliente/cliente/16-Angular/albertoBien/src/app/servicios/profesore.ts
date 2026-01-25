import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Profesore {
  arrayProfes:{id:number,nombre:string,asignatura:string}[]=[
    {id:1,nombre:'Alberto',asignatura:'Angular'},
    {id:2,nombre:'María',asignatura:'React'},
    {id:3,nombre:'Juan',asignatura:'Vue.js'},
    {id:4,nombre:'Lucía',asignatura:'Svelte'},
    {id:5,nombre:'Pedro',asignatura:'Node.js'}
  ]

  getProfesores(){
    return this.arrayProfes;
  }

  meterNuevoProfe(nombreNuevo:string,asignaturaNueva:string){
    this.arrayProfes.push({id:this.arrayProfes.length+1,nombre:nombreNuevo,asignatura:asignaturaNueva});
  }

  borrarProfe(idBorrar:number){
    this.arrayProfes.forEach((element) => {
      if(element.id==idBorrar){
        let indiceBorrar=this.arrayProfes.indexOf(element);
        this.arrayProfes.splice(indiceBorrar,1);
      }
    });
  }

  editar(idEdtiar:number){
    let nuevoNom= prompt("Mete nuevo nombre");
    let nuevaAsig= prompt("Mete nueva asignatura");
    if(!nuevoNom || !nuevaAsig){
      alert("Valor no valido");
      return;
    }
    this.arrayProfes.forEach(element => {
      if(element.id==idEdtiar){
        element.nombre=nuevoNom as string;
        element.asignatura=nuevaAsig as string;
      }
    });
  }
}
