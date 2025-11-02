"use strict";
;

console.log("Hello, Alberto!");
alert("Welcome, Alberto!");

let nombre = "Alberto";
let edad = 30;
console.log("Mi nombre es: "+ nombre +"   Edad: " + edad);

//da fallo ya que estamos x no esta declarada y en la funcion suma el parametro a esta repetido
/* = 10;

function suma(a, a) {
return a + a;
}
*/

console.log("Mendaje informativo");

console.warn("Mensaje de advertencia");

console.error("Mensaje de error");

console.time("miProceso");

console.timeEnd("miProceso");

//Declaracion multiple
let a, b, c;

const PI = 3.14;
/*
const CONFIG = {
    appi: "https://api.ejemplo.com",
    version:"1.0",
};
*/
//Constante de tipo array
const COLORES = ["rojo", "verde", "azul"];
COLORES.push("amarillo"); //Si se puede modificar el contenido de un array declarado con const
//borrar el ultimo elemento
COLORES.pop();
//borrar el primer elemento
COLORES.pop(0)
//COLORES 
console.log("PI: ", PI);
console.log("Colores: ", COLORES);

//tipo de datos primitivos
let numero = 44; //numero
let cadena = "Hola que tal"; //cadena de texto
let booleano = true;    //boleanos false true
let nulo = null; //valor nulo 
let indefinido = undefined; // valor indefinido
let simbolo = Symbol("mi simbolo"); //simbolo

//retornar tipo de dato
console.log(typeof(cadena)); //devuelve string

//ejemplos numericos 
let numeroPositivo = 33;
let numeroDecimal = 12.5;
let numeroNegativo = -23;

//valores especiales numericos
let infinito = Infinity;
let nan = NaN; //no es un numero

//numero grande
let bigInt = 9007199254741991n; //se añade una n al final

//declaracion de cadenas de texto
let cadenaComillasSimples = 'Hola que tal';
let cadenaComillasDobles = "Hola que tal";

//valores logicos
let verdadero = true;
let falso = false;

// && y ||

//NULL y UNDEFINED
let variableSinValor; //undefined
let variableNula = null; //valor nulo

console.log("Tipo de dato null: ", typeof(variableNula)); //NULL objeto
console.log("Tipo de dato undefined: ", typeof(variableSinValor)); //undefined

//tipo compuesto
//Son mutables

//para arraida
Array.isArray([]); //devuelve true si es un array
Array.isArray({}); //devuelve false si no es un array

//comparacion
console.log(5 == "5"); //true poerque solo compara el valor
console.log(5 === "5"); //false porque compara el valor y el tipo de dato




