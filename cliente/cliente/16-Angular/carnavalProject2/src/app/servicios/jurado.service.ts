import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JuradoService {

  constructor() { }

  arrayJurado:{id:number,puntuacion:number}[]=[
    {id:1,puntuacion:15}
  ]

  getJurado(){
    return this.arrayJurado;
  }
  

}
