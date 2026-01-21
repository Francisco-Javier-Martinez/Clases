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
  marcaNuevoProducto: string = '';
  precioNuevoProducto: number = 0;
  imgNuevoProducto: string = '';

  //Este metodo inicializa la vida del componente
  ngOnInit() {
    this.productos = this.servicioProductos.getProductos();
  }

  //metodo para añadir un nuevo producto
  addProducto(){
    if(this.marcaNuevoProducto.length>2 && this.precioNuevoProducto>5 && this.imgNuevoProducto.length>5){
      this.servicioProductos.addProducto(this.marcaNuevoProducto, this.precioNuevoProducto, this.imgNuevoProducto);
      //limpiar los campos
      this.marcaNuevoProducto = '';
      this.precioNuevoProducto = 0;
      this.imgNuevoProducto = '';
    }else{
      alert("Por favor, rellena todos los campos correctamente.");
    }
  }

  //borrar producto
  borrarProducto(id: number){
    this.productos.forEach((producto, indice) => {
      if(producto.id == id){
        this.productos.splice(indice, 1);
      }
    });
  }
}