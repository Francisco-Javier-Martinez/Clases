/*Ejercicio 5
Convertir las siguientes funciones a funciones flecha

function obtenerDoble( a, b ){
return (a + b) * 2
}
function obtenerTriple( a, b, c ){
return (a + b +c) * 3
}*/
var obtenerDoble = function (a, b) { return (a + b) * 2; };
var obtenerTriple = function (a, b, c) { return (a + b + c) * 3; };
console.log(obtenerDoble(3, 4));
console.log(obtenerTriple(3, 4, 5));
