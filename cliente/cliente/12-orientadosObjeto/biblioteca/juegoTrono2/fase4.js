import { Espadachin } from "./clases/tiposGuerreros/espadachin.js";
import { Arquero } from "./clases/tiposGuerreros/arquero.js";
import { Mago } from "./clases/tiposGuerreros/mago.js";
import { Casa } from "./clases/casa.js";
import { Arma } from "./clases/arma.js";

// CASAS
const casaStark = new Casa("Stark", "El invierno se acerca");
const casaLannister = new Casa("Lannister", "Oye mi rugido");

// ARMAS
const garra = new Arma("Espada de acero valyrio, obsequio de la Casa Stark", "Garra", 90, "Espada");
const aguja = new Arma("Espada fina, perfecta para apuñalar", "Aguja", 70, "Estoque");
const hacha = new Arma("Gran hacha para combate a dos manos", "Hacha del Norte", 80, "Hacha");

//Guerreros
const magoKiko = new Mago("Kiko",21,true,casaStark,garra,50,100,"Cuchi cuchi cuuuuuu");
const elPirri = new Arquero("ElPirri",34,true,casaStark,aguja,30,50);
const elCulos = new Espadachin("ElCulos",18,true,casaLannister,hacha,40,"Rey de los inodoros");

casaStark.meterMiembro(magoKiko);
casaStark.meterMiembro(elPirri);
casaLannister.meterMiembro(elCulos);

magoKiko.presentarseMago();
elPirri.presentarseArquero();
elCulos.presentarseEspadachin();