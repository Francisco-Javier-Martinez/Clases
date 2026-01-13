//Tipado estatico
let nombre: string = "Ana";
let edad: number = 28;
let activo: boolean = true;

//Tipado dinamico
/* let nombre = "Ana";  
let edad = 28;       
let activo = true; */   
function saludar(nombre: string): string {
  return `Hola, ${nombre}`;
}
console.log(saludar("Javi"));

/* function obtenerUsuario(id: number): Promise<Usuario | null> */

interface Usuario {
  id: number;
  nombre: string;
  email: string;
}

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
let mensaje: string = "Hola mundo";
let nulo: null = null;
let indefinido: undefined = undefined;

// Symbol (menos común)
let id: symbol = Symbol("id");

// BigInt para números muy grandes
let grande: bigint = 9007199254740991n;

let direccion: "arriba" | "abajo" | "izquierda" | "derecha";
direccion = "arriba";   // OK
/* direccion = "diagonal"; // Error: Type '"diagonal"' is not assignable
 */
// Muy útil para estados o configuraciones
type Estado = "pendiente" | "procesando" | "completado" | "error";

let estadoPedido: Estado = "pendiente";

// Sintaxis con corchetes (más común)
const numeros: number[] = [1, 2, 3, 4, 5];
const nombres: string[] = ["Ana", "Luis", "Carmen"];

// Sintaxis genérica (equivalente)
const otrosNumeros: Array<number> = [10, 20, 30];
const otrosNombres: Array<string> = ["Pedro", "María"];

