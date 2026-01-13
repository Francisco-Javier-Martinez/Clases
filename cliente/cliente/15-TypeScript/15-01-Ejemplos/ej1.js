//Tipado estatico
var nombre = "Ana";
var edad = 28;
var activo = true;
//Tipado dinamico
/* let nombre = "Ana";
let edad = 28;
let activo = true; */
function saludar(nombre) {
    return "Hola, ".concat(nombre);
}
console.log(saludar("Javi"));
/* const usuario = null;
console.log(usuario.nombre); // TypeError: Cannot read property 'nombre' of null
// TypeScript: error en tiempo de compilación
const usuario: Usuario | null = null;
console.log(usuario.nombre); // Error: Object is possibly 'null'
// Te obliga a manejar el caso null
if (usuario !== null) {
  console.log(usuario.nombre); // Ahora sí es seguro
}
 */
// Tipos primitivos básicos
var mensaje = "Hola mundo";
var nulo = null;
var indefinido = undefined;
// Symbol (menos común)
var id = Symbol("id");
// BigInt para números muy grandes
var grande = 9007199254740991n;
var direccion;
direccion = "arriba"; // OK
var estadoPedido = "pendiente";
// Sintaxis con corchetes (más común)
var numeros = [1, 2, 3, 4, 5];
var nombres = ["Ana", "Luis", "Carmen"];
// Sintaxis genérica (equivalente)
var otrosNumeros = [10, 20, 30];
var otrosNombres = ["Pedro", "María"];
