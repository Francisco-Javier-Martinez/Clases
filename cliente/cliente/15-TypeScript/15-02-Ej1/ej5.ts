/*Ejercicio 5
Convertir las siguientes funciones a funciones flecha

function obtenerDoble( a, b ){
return (a + b) * 2
}
function obtenerTriple( a, b, c ){
return (a + b +c) * 3
}*/

let obtenerDoble=(a: number, b: number): number => (a+b)*2;
let obtenerTriple=(a: number, b: number, c: number): number => (a+b+c)*3;
console.log(obtenerDoble(3,4));
console.log(obtenerTriple(3,4,5));