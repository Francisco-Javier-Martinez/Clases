import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioProductosService {

  constructor() {}

  //array
  private productos = [
    {id: 1, nombre: 'Maceta', precio: 1300, img: 'https://www.germigarden.com/6008-thickbox_default/maceta-barro-basico.jpg'},
    {id: 2, nombre: 'Papel de baño', precio: 2040, img: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Toiletpapier_%28Gobran111%29.jpg'},
    {id: 3, nombre: 'Mando de Play 10', precio: 67, img: 'https://storage.googleapis.com/catalog-pictures-carrefour-es/catalog/pictures/hd_510x_/0711719870050_1.jpg'},
    {id: 4, nombre: 'Lámpara LED', precio: 4500, img: 'https://images.kkeu.de/is/image/BEG/Oficina/Equipamiento_para_oficinas/L%C3%A1mparas/L%C3%A1mpara_LED_de_techo_pdplarge-mrd--000022748373_PRD_org_all.jpg?wid=260&hei=260'},
    {id: 5, nombre: 'Cafetera italiana', precio: 2800, img: 'https://m.media-amazon.com/images/I/518scFLK11L._AC_SY300_SX300_QL70_ML2_.jpg'},
    {id: 6, nombre: 'Auriculares Bluetooth', precio: 890, img: 'https://m.media-amazon.com/images/I/61lX+a+vOFL._AC_SY300_SX300_QL70_ML2_.jpg'},
    {id: 7, nombre: 'Cactus de escritorio', precio: 500, img: 'https://jardinesloslobos.com/wp-content/uploads/2025/03/ChatGPT-Image-26-mar-2025-14_42_51.webp'},
    {id: 8, nombre: 'Teclado mecánico', precio: 7200, img: 'https://m.media-amazon.com/images/I/61meQuPPc-L._AC_SY355_.jpg'},
    {id: 9, nombre: 'Botella de agua térmica', precio: 1500, img: 'https://coolpack.es/21081-large_default/botella-termica-bonet-dark-grey.jpg'},
    {id: 10, nombre: 'Libreta de notas', precio: 350, img: 'https://mrpaper.es/13703-large_default/libreta-de-notas-a7-blush-pastel.jpg'}
];

  //getProductos
  getProductos(){
    return this.productos;
  }
   
}
