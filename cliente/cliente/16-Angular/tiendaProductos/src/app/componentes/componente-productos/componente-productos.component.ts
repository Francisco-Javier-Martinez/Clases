import { Component } from '@angular/core';
import { ServicioProductosService } from '../../servicios/servicio-productos.service';
@Component({
  selector: 'app-componente-productos',
  templateUrl: './componente-productos.component.html',
  styleUrls: ['./componente-productos.component.css']
})
export class ComponenteProductosComponent {
  //creamos un constructor donde instanciamos el servicio 
  constructor(private servicioProductos: ServicioProductosService) { }

  //recogerProductos
  productos: any[] = []; //array vacio

  //Este metodo inicializa la vida del componente
  ngOnInit() {
    this.productos = this.servicioProductos.getProductos();
  }

}