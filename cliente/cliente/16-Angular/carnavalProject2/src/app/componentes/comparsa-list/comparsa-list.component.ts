import { Component } from '@angular/core';
import { ComparsaService } from 'src/app/servicios/comparsa.service';

@Component({
  selector: 'app-comparsa-list',
  templateUrl: './comparsa-list.component.html',
  styleUrls: ['./comparsa-list.component.css']
})
export class ComparsaListComponent {

  constructor(private comparsaService: ComparsaService) { }

  //array de comparsas
  comparsas: any[] = [];

  //variable para los nuevos datos
  nombreNuevaComparsa: string = '';
  poblacionNuevaComparsa: string = '';
  integrantesNuevaComparsa: number = 0;
  //metodo para inicializar la vida del componente
  ngOnInit(){
    this.comparsas= this.comparsaService.obtenerComparsas();
  }


  meterNuevaComparsa(){
    if(this.nombreNuevaComparsa.length>2 && this.poblacionNuevaComparsa.length>2 && this.integrantesNuevaComparsa>0){
      this.comparsaService.anadirComparsa(this.nombreNuevaComparsa, this.poblacionNuevaComparsa, this.integrantesNuevaComparsa);
      //limpiar los campos
      this.nombreNuevaComparsa= '';
      this.poblacionNuevaComparsa= '';
      this.integrantesNuevaComparsa= 0;
    }else{
      alert("Por favor, rellena todos los campos correctamente.");
    }
  }

  borrarComparsa(nombre:string){
    this.comparsaService.eliminarComparsa(nombre);
  }
  
  editarComparsa(nombre:string){
    this.comparsaService.actualizarComparsa(nombre);
  }

  
}
