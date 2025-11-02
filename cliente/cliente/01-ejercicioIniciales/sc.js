Alberto: "use strict";
/*let age = prompt ('¿Cuántos años tienes?', 100);

alert(Tienes ${age} años!);*/

/*Ejercicio 1: "Hola, Mundo"
Objetivo: Familiarizarse con la sintaxis básica de JavaScript y el uso de console.log.
1. Instrucción: Crea un programa que imprima "Hola, Mundo" en la consola.
2. Extra: Modifica el programa para que, en vez de "Hola, Mundo", muestre un saludo
personalizado usando una variable, por ejemplo: "Hola 2DAW".*/
/*
console.log("Hola, Mundo");

let curso = prompt("¿Cómo se llama tu curso?");
alert(" Hola" + curso);
*/

/*Ejercicio 2: Suma de dos números
Objetivo: Trabajar con variables y operadores aritméticos básicos.
1. Instrucción: Crea un programa que pida al usuario dos números (usa prompt) y
muestre la suma de ambos en la consola.
2. Extra: Modifica el programa para que realice otras operaciones (resta, multiplicación
y división).*/
/*
let num1 = prompt("Introduce el primer número:");
let num2 = prompt("Introduce el segundo número:");

let resultadoSuma = Number(num1) + Number(num2);
alert("Suma:" + resultadoSuma);
alert("Resta:" + (num1 - num2));
alert("Multiplicación:" + (num1 * num2));
alert("División:" + (num1 / num2));

*/

/*Ejercicio 3: Número par o impar
Objetivo: Practicar con estructuras condicionales (if).
1. Instrucción: Crea un programa que pida al usuario un número y muestre si el
número es par o impar.
2. Extra: Muestra un mensaje de error si el usuario introduce algo que no es un
número.*/
/*
let num1= prompt("Introduce un número:");
if(num1 != Number(num1)){
    alert("Error, no es un número");
}else{   
    if(num1 %2 ==0){
    alert("El número es par");
}else{
    alert("El número es impar");
    }
}
*/

/*Ejercicio 4: Calculadora de edad
Objetivo: Trabajar con operaciones básicas y mostrar resultados basados en condiciones.
1. Instrucción: Crea un programa que pida al usuario su año de nacimiento y calcule
su edad actual.
2. Extra: Si el usuario introduce un año mayor al actual, muestra un mensaje de error.*/
/*
let anoNacimiento = prompt("¿En qué año naciste?");
let anoActual = 2025;

if(anoNacimiento > anoActual){
    alert("Error, el año de nacimiento no puede ser mayor al actual");
}else{
    if(anoNacimiento != Number(anoNacimiento)){
        alert("Error, no es un número");
    }else{
        let edad= anoActual - anoNacimiento;
        alert ("Tienes: " + edad);
    }
}
*/

/*Ejercicio 5: Array de colores favoritos
Objetivo: Introducir a los arrays y la manipulación básica de elementos.
1. Instrucción: Crea un programa que defina un array con al menos cinco colores.
2. Extra: Pide al usuario un color y añade ese color al final del array. Luego, muestra el
array actualizado.*/
/*
let colores = ["rojo", "verde", "azul", "amarillo", "naranja"];

alert("Lista de colores: " + colores);
let colorNuevo = prompt("Intruduce un color: ");

colores.push(colorNuevo);

alert("Lista de colores: " + colores);
*/

/*Ejercicio 6: Tabla de multiplicar
Objetivo: Usar bucles (for o while).
1. Instrucción: Pide al usuario un número y genera la tabla de multiplicar de ese
número (del 1 al 10) en la consola.
2. Extra: Permite al usuario especificar hasta qué número quiere multiplicar, por
ejemplo, hasta el 12 en vez del 10.*/

/*
let num1 = prompt("Introduce un número:");
let num2 = prompt("¿Hasta qué número quieres multiplicar?");
let arrayMultiplicar = [];

for(let i=0; i<=num2; i++){
    arrayMultiplicar.push(num1 * i);
} 
alert("Tabla de multiplicar: " + arrayMultiplicar);
*/


/*Ejercicio 7: Número mayor de un array
Objetivo: Trabajar con arrays y métodos para encontrar valores. (función max y
toLowerCase)
1. Instrucción: Crea un array de números y escribe una función que encuentre y
devuelva el número más alto del array.
2. Extra: Pide al usuario que introduzca números y añádelos a un array vacío hasta
que el usuario escriba "stop". Luego, muestra el número mayor del array.
*/

//let arrayNum =[1,50,4,2,6];
/*
let arrayNum =[];
function numeroMayor(array){
    //for
    /*
    let max = 0;
    for(let i=0; i<array.length; i++){
        if(array[i]>max){
            max = array[i];
        }
    //Math.max
    let max = Math.max(...array);
    return max;
}
/*
let sw = true;
while(sw == true){
    let num=prompt("Introduce un número (escribe 'stop' para finalizar):");
    if(num.toLowerCase() == "stop"){
        sw=false;
    }

    if(num != Number(num)){
        alert("Error, no es un número");
    }else{
        arrayNum.push(Number(num));
    }
}


let mayor = numeroMayor(arrayNum);

alert("El número mayor es: " + mayor);
*/


/*Ejercicio 8: Reversa de una cadena
Objetivo: Practicar con manipulación de strings.
1. Instrucción: Escribe una función que reciba una cadena de texto y devuelva la
cadena invertida (ej., "hola" => "aloh").
2. Extra: Verifica si la cadena es un palíndromo (es decir, si se lee igual de izquierda a
derecha y de derecha a izquierda).*/
/*
let cadena = prompt("Introduce una cadena de texto:");

function cadenaAlReves(cadena){
    let cadena2 = [];
    for(let i=cadena.length -1; i>=0; i--){
        cadena2.push(cadena[i]);
    }
    return cadena2;
}
let cadenaq2= cadenaAlReves(cadena);

alert("Cadena al reves: " + cadenaq2 );

if(cadena == cadenaq2.join("")){
    alert("Es un palíndromo");
}else{
    alert("No es un palíndromo");
}
*/

/*Ejercicio 9: FizzBuzz
Objetivo: Practicar con condicionales y bucles.
1. Instrucción: Escribe un programa que muestre los números del 1 al 50. Para los
múltiplos de 3, muestra "Fizz" en lugar del número; para los múltiplos de 5, muestra
"Buzz"; y para los múltiplos de ambos (3 y 5), muestra "FizzBuzz".
2. Extra: Permite al usuario definir el rango en el que desea ejecutar el programa.*/
/*
let num1 = prompt("Introduce el número:");

for(let i= num1; i<=50; i++){
    if(i%3 ==0 && i%5 ==0){
        alert("FizzBuzz "+ i);
    }
    else if(i%3 ==0){
        alert("Fizz "+ i);
    }
    else if(i%5 ==0){
        alert("Buzz "+ i);
    }else{
        alert(i);
    }
}
*/


/*Ejercicio 10: Calculadora básica con funciones
Objetivo: Introducir el concepto de funciones.
1. Instrucción: Escribe una función calculadora que tome tres parámetros: dos
números y una operación (+, -, *, /). La función debe devolver el resultado de
aplicar la operación a los dos números.
2. Extra: Muestra un mensaje de error si la operación introducida no es válida.*/

/*let num1 = prompt ("Introduce el primer número:");
while(Number(num1) != Number(num1)){
    alert("Error, no es un número. Introduce el primer número");
    num1 = prompt ("Introduce el primer número:");
}

let num2 = prompt ("Introduce el segundo número:");
while(Number(num2) != Number(num2)){
    alert("Error, no es un número. Introduce el segundo número");
    num2 = prompt ("Introduce el segundo número:");
}

let simbolo = prompt("Introduce la operación (+, -, *, /):");
while(simbolo != "+" && simbolo != "-" && simbolo != "*" && simbolo != "/"){  
    alert("Error, la operación no es válida. Introduce la operación (+, -, *, /):");
    simbolo = prompt("Introduce la operación (+, -, *, /):");
}

let resultado = calculadora(num1, num2, simbolo);
alert("El resultado es: " + resultado);

function calculadora(num1, num2, simbolo){
    let resultado;
    switch(simbolo){
        case "+":
            resultado = Number(num1) + Number(num2);
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            if(num2 == 0){
                resultado = "Error, no se puede dividir entre 0";
            }else{
                resultado = num1 / num2;
            }
    }
    return resultado;
}
*/