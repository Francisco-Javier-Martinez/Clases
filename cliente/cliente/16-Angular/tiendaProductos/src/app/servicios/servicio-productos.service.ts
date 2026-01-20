import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioProductosService {

  constructor() {}

  private productos =[
    {id: 1, nombre: 'Producto 1', precio: 100},
    {id: 2, nombre: 'Producto 2', precio: 200},
    {id: 3, nombre: 'Producto 3', precio: 300}
  ];

  
}
