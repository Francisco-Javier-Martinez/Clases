import { Component } from '@angular/core';
import { Profesore } from '../../servicios/profesore';

@Component({
  selector: 'app-profesores',
  standalone: false,
  templateUrl: './profesores.html',
  styleUrl: './profesores.css',
})
export class Profesores {
constructor(private objProfe: Profesore){};
  //variables
  profes: any[] =[];
  nuevoPorfeNombre: string= '';
  nuevoProfeAsigntura:string='';

  //inicializar los profes
  ngOnInit(){
    this.profes=this.objProfe.getProfesores();
  }

  borrarProfe(id:number){
    this.objProfe.borrarProfe(id);
  }

  actualzarProfe(id:number){
    this.objProfe.editar(id);
  }

  agregarProfe(){
    this.objProfe.meterNuevoProfe(this.nuevoPorfeNombre,this.nuevoProfeAsigntura);
  }
}
