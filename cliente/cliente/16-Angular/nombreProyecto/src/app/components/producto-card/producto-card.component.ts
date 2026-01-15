import { Component } from '@angular/core';

@Component({
  selector: 'app-producto-card',
  templateUrl: './producto-card.component.html',
  styleUrls: ['./producto-card.component.css']
})
export class ProductoCardComponent {
  nombre: string = 'Kirby';
  precio: number = 29.99;
  imagen: string = 'https://wallpapers.com/images/hd/hd-knight-kirby-ju2rlg91aielcw09.webp';
}
