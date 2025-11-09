import { Guerrero } from "./clases/personajesEspeciales/guerrero.js";
import { Arma } from "./clases/arma.js";
import { Casa } from "./clases/casa.js";

// CASAS
const casaStark = new Casa("Stark", "El invierno se acerca");
const casaLannister = new Casa("Lannister", "Oye mi rugido");

// ARMAS
const garra = new Arma("Garra", 90);
const aguja = new Arma("Aguja", 70);
const hacha = new Arma("Hacha del Norte", 80);
const espadaLarga = new Arma("Espada Larga", 85);
const ballesta = new Arma("Ballesta", 75);
const filoRojo = new Arma("Filo Rojo", 88);
const lanzaDeCaza = new Arma("Lanza de Caza", 60);

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
casaStark.visualizarMiembro();
casaLannister.visualizarMiembro();