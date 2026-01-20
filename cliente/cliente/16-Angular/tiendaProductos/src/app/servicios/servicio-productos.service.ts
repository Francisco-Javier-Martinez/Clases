import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioProductosService {

  constructor() {}

  //array
  private productos =[
    {id: 1, nombre: 'Maceta', precio: 1300},
    {id: 2, nombre: 'Papel de baño', precio: 2040},
    {id: 3, nombre: 'Mando de Play 10', precio: 67}
  ];

  //getProductos
  getProductos(){
    return this.productos;
  }
   
}
