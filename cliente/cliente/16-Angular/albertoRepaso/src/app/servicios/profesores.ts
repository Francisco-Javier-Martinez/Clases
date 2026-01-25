import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Profesores {
  
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
    this.arrayProfes.splice(idBorrar,1);
  }

  editar(idEdtiar:number){
    let nuevoNom= prompt("Mete nuevo nombre");
    if(nuevoNom && nuevoNom.length<3){
      alert("El nombre debe tener al menos 3 caracteres");
      return;
    }
    let nuevaAsig= prompt("Mete nueva asignatura");
    if(nuevaAsig && nuevaAsig.length<3){
      alert("La asignatura debe tener al menos 3 caracteres");
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
