import { Casa } from "./clases/casa.js";
import { Personaje } from "./clases/personaje.js";
import { Arma } from "./clases/arma.js";
import { Reino } from "./clases/reino.js";

const Reino1=new Reino();
const CasaStark=new Casa();
const CasaLannister=new Casa();

const Garra=new Arma();
const Aguja=new Arma();

const JonSnow=new Personaje();
const AryaStark=new Personaje();
const JaimeLannister=new Personaje();

//reino
Reino1.meterReino="Poniente";
//casa
CasaStark.meterNombreCasa="Casa Stark";
CasaLannister.meterNombreCasa="Casa Lannister";

//armas
Garra.meterNombreArma="Garra";
Garra.meterTipo="espada";
Garra.meterDano=25;

Aguja.meterNombreArma ="Aguja";
Aguja.meterTipo="espada"; 
Aguja.meterDano=15;

//personajes
JonSnow.meterNombrePersonaje="Jon Snow";
AryaStark.meterNombrePersonaje="Arya Stark";
JaimeLannister.meterNombrePersonaje="Jaime Lannister";

//meter casas
Reino1.meterCasa(CasaStark);      // La Casa Stark Reino de Poniente.
Reino1.meterCasa(CasaLannister);  // La Casa Lannister Reino de Poniente.

//equipar arma
JonSnow.meterArma(Garra);
console.log("Jon Snow ha equipado el arma "+Garra.getNombreArma());

AryaStark.meterArma(Aguja);
console.log("Arya Stark ha equipado el arma "+Aguja.getNombreArma());

//meter personajes a las casas
JonSnow.meterCasa(CasaStark);
CasaStark.meterMiembro(JonSnow); // lo meto a la lista de miembros de la Casa
console.log("Jon Snow ha sido añadido a la Casa Stark");

AryaStark.meterCasa(CasaStark);
CasaStark.meterMiembro(AryaStark);
console.log("Arya Stark ha sido añadido a la Casa Stark");

JaimeLannister.meterCasa(CasaLannister);
CasaLannister.meterMiembro(JaimeLannister);
console.log("Jaime Lannister ha sido añadido a la Casa Lannister");

//Hacer rey al jaime
Reino1.proclamarRey(JaimeLannister);

//Visualizar casa de poniente
console.log("Xasas del Reino de Poniente:");
Reino1.visualizarCasas();

//ver rey
console.log("Rey actual:");
Reino1.mostrarReyActual();

//Monatrar miembro de la casa dtark
console.log("Miembros de la Casa Stark:");
CasaStark.visualizarMiembro();

//PReesentaciones de personjes
console.log("Presentaciones:");
JonSnow.presentarse();
AryaStark.presentarse();
JaimeLannister.presentarse();

//Armas
console.log("Armas:");
Garra.monstrarCaracteristicas();
Aguja.monstrarCaracteristicas();
