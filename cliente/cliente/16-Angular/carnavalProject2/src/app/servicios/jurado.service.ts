import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JuradoService {

  constructor() { }

  arrayJurado:{id:number,puntuacion:number}[]=[
    {id:1,puntuacion:15},
    {id:2,puntuacion:18},
    {id:3,puntuacion:20},
    {id:4,puntuacion:14},
    {id:5,puntuacion:19},
  ]

  getJurado(){
    return this.arrayJurado;
  }
}
