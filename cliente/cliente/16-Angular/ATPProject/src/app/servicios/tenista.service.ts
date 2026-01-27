import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TenistaService {

  constructor() { }

   listaTenista = [
  {
    id: 1,
    nombre: 'Carlos Alcaraz',
    nacionalidad: 'Española',
    numeroGrandSlams: 3,
    peso: 74,
    altura: 1.83,
    golpeDominante: 'Derecha',
  },
  {
    id: 2,
    nombre: 'Jannik Sinner',
    nacionalidad: 'Italiana',
    numeroGrandSlams: 1,
    peso: 76,
    altura: 1.88,
    golpeDominante: 'Derecha',
  },
  {
    id: 3,
    nombre: 'Dominic Thiem',
    nacionalidad: 'Austriaca',
    numeroGrandSlams: 1,
    peso: 79,
    altura: 1.85,
    golpeDominante: 'Derecha',
  },
  {
    id: 4,
    nombre: 'Alexander Zverev',
    nacionalidad: 'Alemana',
    numeroGrandSlams: 0,
    peso: 90,
    altura: 1.98,
    golpeDominante: 'Derecha',
  },
  {
    id: 5,
    nombre: 'Casper Ruud',
    nacionalidad: 'Noruega',
    numeroGrandSlams: 0,
    peso: 81,
    altura: 1.83,
    golpeDominante: 'Derecha',
  },
  {
    id: 6,
    nombre: 'Ben Shelton',
    nacionalidad: 'Estadounidense',
    numeroGrandSlams: 0,
    peso: 88,
    altura: 1.93,
    golpeDominante: 'Izquierda',
  },
];

  getTenis(){
    return this.listaTenista;
  }

  meterNuevoTenista(nombreNuevo:string,nacionalidad:string,numeroGrandSlams:number,peso:number,altura:number,golpeDominanteNUevo:string){
      this.listaTenista.push({id:this.listaTenista.length-1,  nombre:nombreNuevo, nacionalidad:nacionalidad, numeroGrandSlams:numeroGrandSlams, peso:peso, altura:altura, golpeDominante:golpeDominanteNUevo  });
  }

  borrarTenista(idBorrar:number){
    this.listaTenista.forEach(element => {
        if(element.id==idBorrar){
          let indice=this.listaTenista.indexOf(element);
          this.listaTenista.splice(indice,1);
        }
    });
  }

  actualizarTenista(idActualizar:number){
    let sino= confirm("Quieres cambiar todos los datos o los grands");
    if(sino==true){
      let nuevoNombre= prompt("Mete nombre");
      let nuevaNacionalidad= prompt("Mete nacionalidad");
      let nuevoNumeroGrandSlams= Number(prompt("Mete numero grand slams"));
      let nuevoPeso= Number(prompt("Mete peso"));
      let nuevaAltura= Number(prompt("Mete altura"));
      let nuevoGolpeDominante= prompt("Mete golpe dominante");
      if(nuevoNombre==null || nuevaNacionalidad==null || nuevoNumeroGrandSlams==null || nuevoPeso==null || nuevaAltura==null || nuevoGolpeDominante==null){
        alert("No se ha podido actualizar el tenista");
        return;
      }
      this.listaTenista.forEach(element => {
        if(element.id==idActualizar){
            element.nombre=nuevoNombre as string;
            element.nacionalidad=nuevaNacionalidad as string;
            element.numeroGrandSlams=nuevoNumeroGrandSlams as number;
            element.peso=nuevoPeso as number;
            element.altura=nuevaAltura as number;
            element.golpeDominante=nuevoGolpeDominante as string;
        }
      });
      }else{
        let nuevoNumeroGrandSlams= Number(prompt("Mete numero grand slams"));
        if(nuevoNumeroGrandSlams==null){
          alert("Es obl meterlo");
        }
        this.listaTenista.forEach(element => {
          if(element.id==idActualizar){
              element.numeroGrandSlams=nuevoNumeroGrandSlams as number;
          }
        });
      }
    
  }
    monstrarLosQueNoGanaron(){
    let deportisasNoGanados:any[]=[];
    this.listaTenista.forEach(element => {
      if(element.numeroGrandSlams==0){
        deportisasNoGanados.push({nombre:element.nombre});
      }
    });
    return deportisasNoGanados;
  }

  sacarTenistaMasAlto(){
    let tenistaAltura=this.listaTenista[0]['altura'];
    let tenista:string=this.listaTenista[0]['nombre'];
    this.listaTenista.forEach(element => {
      if(element.altura>tenistaAltura){
        tenistaAltura=element.altura;
        tenista=element.nombre;
      }
    });
    return tenista;
  }

  sacarElQueMasPremiosTiene(){
    let tenistaGananador=this.listaTenista[0]['numeroGrandSlams'];
    let tenistaN:string=this.listaTenista[0]['nombre'];
    this.listaTenista.forEach(element => {
        if(element.numeroGrandSlams>tenistaGananador){
          tenistaGananador=element.numeroGrandSlams;
          tenistaN=element.nombre;
        }
    });
    return tenistaN;
  }
}
