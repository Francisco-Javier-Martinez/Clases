import { Guerrero } from "./clases/personajesEspeciales/guerrero.js";
import { Arma } from "./clases/arma.js";
import { Casa } from "./clases/casa.js";
import { Batalla } from "./clases/batalla.js";


// CASAS
const casaStark = new Casa("Stark", "El invierno se acerca");
const casaLannister = new Casa("Lannister", "Oye mi rugido");

// ARMAS
const garra = new Arma("Espada de acero valyrio, obsequio de la Casa Stark", "Garra", 90, "Espada");
const aguja = new Arma("Espada fina, perfecta para apuñalar", "Aguja", 70, "Estoque");
const hacha = new Arma("Gran hacha para combate a dos manos", "Hacha del Norte", 80, "Hacha");
const espadaLarga = new Arma("Espada reglamentaria de la caballería", "Espada Larga", 85, "Espada");
const ballesta = new Arma("Arma de asedio personal de Tyrion", "Ballesta", 75, "Proyectil");
const filoRojo = new Arma("Espada con borde carmesí, muy afilada", "Filo Rojo", 88, "Espada");
const lanzaDeCaza = new Arma("Lanza diseñada para la caza mayor", "Lanza de Caza", 60, "Lanza");

// GUERREROS DE LA CASA STARK
const jon = new Guerrero("Jon Snow", 25, true, casaStark, garra);
const arya = new Guerrero("Arya Stark", 18, true, casaStark, aguja);
const robb = new Guerrero("Robb Stark", 22, false, casaStark, espadaLarga); 
const brienne = new Guerrero("Brienne de Tarth", 30, true, casaStark, hacha);

// GUERREROS DE LA CASA LANNISTER
const jaime = new Guerrero("Jaime Lannister", 32, true, casaLannister, filoRojo);
const cersei = new Guerrero("Cersei Lannister", 34, true, casaLannister, lanzaDeCaza);
const tyrion = new Guerrero("Tyrion Lannister", 30, true, casaLannister, ballesta);
const gregor = new Guerrero("Gregor Clegane", 38, true, casaLannister, hacha);

// === AÑADIR PERSONAJES A LAS CASAS (Crucial para la Batalla) ===
casaStark.meterMiembro(jon);
casaStark.meterMiembro(arya);
casaStark.meterMiembro(robb);
casaStark.meterMiembro(brienne);

casaLannister.meterMiembro(jaime);
casaLannister.meterMiembro(cersei);
casaLannister.meterMiembro(tyrion);
casaLannister.meterMiembro(gregor);

//Monstrar miembros
console.log("Casa Stark: ");
casaStark.visualizarMiembro();
console.log("Casa Lannister: ");
casaLannister.visualizarMiembro();

//empezar batalla
console.log("Iniciamos la lucha");
const batalla = new Batalla();
batalla.iniciarBatalla(casaStark,casaLannister);
batalla.monstrarGuerrerosMuertos(); 

console.log("Se acabo la pelea");
