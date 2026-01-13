//Ej1
/* let nombre: string;
nombre="Miguelo";

let edad: number;
edad=30; */

const PERSONAJE: { nombre: string; edad: number } = {
  nombre: nombre,
  edad: edad
};
//Ej2
interface spiderman{
    nombre: string;
    poderes: string[];
}

const SPIDERMAN: spiderman ={
    nombre:"Peter Parker",
    poderes:["trepar","fuerza","agilidad","telas de araña"]
};
//Ej4
let suma = (a: number, b: number): number => a+b;
console.log(suma(5,7));