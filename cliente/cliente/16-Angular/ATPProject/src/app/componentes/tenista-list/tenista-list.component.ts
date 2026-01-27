import { Component } from '@angular/core';
import { TenistaService } from 'src/app/servicios/tenista.service';

@Component({
  selector: 'app-tenista-list',
  templateUrl: './tenista-list.component.html',
  styleUrls: ['./tenista-list.component.css']
})
export class TenistaListComponent {
  constructor(private serTenis : TenistaService){}
  arrayNoGanadores:any[]=[];
  listaTenistas:any[]=[];
  nuevoNombre: string='';
  nuevoPais: string='';
  nuevoGrandSlams: number=0;
  nuevoPeso: number=0;
  nuevoAltura: number=0;
  nuevoGolpe: string='';

  //variables de consultas
  tenistaAlto:string ='';
  tenistaMasTrofeo:string ='';

  //inicnializar
  ngOnInit(){
    this.listaTenistas=this.serTenis.getTenis();
    this.tenistaAlto=this.serTenis.sacarTenistaMasAlto();
    this.tenistaMasTrofeo=this.serTenis.sacarElQueMasPremiosTiene();
  }

  //nuevo
  meterTenista(){
    if(this.nuevoNombre=='' || this.nuevoPais=='' || this.nuevoGrandSlams==0 || this.nuevoPeso==0 || this.nuevoAltura==0 || this.nuevoGolpe==''){
      alert("Rellena todos los campos");
      return;
    }
    this.serTenis.meterNuevoTenista(this.nuevoNombre,this.nuevoPais,this.nuevoGrandSlams,this.nuevoPeso,this.nuevoAltura,this.nuevoGolpe);
    this.volverAlEstadoInicial();
  }

  //actualizar
  actualizarTenisa(idActu:number){
    this.serTenis.actualizarTenista(idActu);
  }

  //borrar 
  borrarTenista(idBorrar:number){
    this.serTenis.borrarTenista(idBorrar);
  }

  //Borra
  volverAlEstadoInicial(){
    this.nuevoAltura=0;
    this.nuevoPais='';
    this.nuevoGrandSlams=0;
    this.nuevoNombre='';
    this.nuevoPeso=0;
    this.nuevoGolpe='';
  }

  monstrarNoGanadores(){
    this.arrayNoGanadores = this.serTenis.monstrarLosQueNoGanaron();
  }
}
