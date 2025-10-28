import { Personaje } from "./personaje.js";
const protagonitas = new Personaje();

let nombre = "Javi";
protagonitas.ponerNombre=nombre;
console.log(protagonitas.monstrarCaracteristicas());

protagonitas.hablar();
for(let i =5; i>=0;i--){
    protagonitas.disparar();
}

protagonitas.curar();
console.log(protagonitas.monstrarCaracteristicas());