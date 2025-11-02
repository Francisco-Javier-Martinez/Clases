/*
//let resultado = condición ? valor1 : valor2;
let edad = 19;
let mensaje = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensaje); // "Eres mayor de edad"
*/
/*
let altura = 0;

// Con ||, el 0 se considera falso
let alturaA = altura || 100; // 100

// Con ??, solo null/undefined activan el valor alternativo
let alturaB = altura ?? 100; // 0
*/

/*
// Ejemplo práctico
function mostrarConteo(conteo) {
// 0 es un valor válido para conteo
console.log(conteo ?? "Sin datos");
}

mostrarConteo(0); // 0
mostrarConteo(null); // "Sin datos"
*/
/*
// Sin paréntesis - confuso
let resultado = 2 + 3 * 4; // 14 (primero se evalúa 3*4)
// Con paréntesis - claro
let resultadoClaro = (2 + 3) * 4; // 20
*/
/*
let frutas = ["Manzana", "Plátano", "Naranja", "Fresa"];
for (let i = 0; i < frutas.length; i++) {
console.log(`Fruta ${i+1}: ${frutas[i]}`);
}

// Salida:
// Fruta 1: Manzana
// Fruta 2: Plátano
// Fruta 3: Naranja
// Fruta 4: Fresas
*/

exteriorLoop: for (let i = 0; i < 3; i++) {
for (let j = 0; j < 3; j++) {
if (i === 1 && j === 1) {
console.log("Saltando al siguiente bucle exterior");
break exteriorLoop; // Sale del bucle exterior
}
console.log(`i=${i}, j=${j}`);
}
}