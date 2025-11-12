import { Casa } from "./clases/casa.js";
import { Personaje } from "./clases/personaje.js";
import { Guerrero } from "./clases/personajesEspeciales/guerrero.js";
import { Arma } from "./clases/arma.js";
import { Batalla } from "./clases/batalla.js";

console.log("=== CREACIÓN DE CASAS ===");
const casaStark = new Casa();
casaStark.meterNombreCasa = "Stark";
casaStark.meterLema = "Se acerca el invierno";

const casaLannister = new Casa();
casaLannister.meterNombreCasa = "Lannister";
casaLannister.meterLema = "Oye mi rugido";

console.log("\n=== CREACIÓN DE ARMAS ===");
const espada = new Arma("Una espada valyria", "Acero Valyrio", 50, "espada");
const hacha = new Arma("Un hacha devastadora", "Hacha de guerra", 45, "hacha");
const lanza = new Arma("Una lanza medieval", "Lanza", 40, "lanza");

console.log("\n=== CREACIÓN DE GUERREROS PARA STARK ===");
const jonSnow = new Guerrero("Jon Snow", 25, true, casaStark, espada);
const aryaStark = new Guerrero("Arya Stark", 16, true, casaStark, hacha);

casaStark.meterMiembro(jonSnow);
casaStark.meterMiembro(aryaStark);

console.log("\n=== CREACIÓN DE GUERREROS PARA LANNISTER ===");
const tyrion = new Guerrero("Tyrion", 35, true, casaLannister, lanza);
const cersei = new Guerrero("Cersei", 38, true, casaLannister, espada);

casaLannister.meterMiembro(tyrion);
casaLannister.meterMiembro(cersei);

console.log("\n=== INICIANDO BATALLA ===");
const batalla = new Batalla();
batalla.iniciarBatalla(casaStark, casaLannister);

console.log("\n=== MOSTRANDO MUERTOS ===");
batalla.monstrarGuerrerosMuertos();

console.log("\n=== RESUCITANDO MUERTOS COMO NO-MUERTOS ===");
const noMuertos = batalla.resucitarMuertosComoNoMuertos();

console.log("\n=== INFORMACIÓN DE NO-MUERTOS ===");
batalla.monstrarNoMuertos();

console.log("\n=== CREANDO CASA DE NO-MUERTOS PARA BATALLA FINAL ===");
const casaNoMuertos = new Casa();
casaNoMuertos.meterNombreCasa = "Los Caminantes Blancos";
casaNoMuertos.meterLema = "La muerte viene para todos";

// Añadir los no-muertos a la casa
noMuertos.forEach(noMuerto => {
    casaNoMuertos.meterMiembro(noMuerto);
});

console.log("\n=== BATALLA FINAL: SOBREVIVIENTES VS NO-MUERTOS ===");
console.log("Los sobrevivientes deben luchar contra los no-muertos...");
// Aquí se podría iniciar otra batalla con los sobrevivientes contra los no-muertos
