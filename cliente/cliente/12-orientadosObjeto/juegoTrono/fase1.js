import { Casa } from "./clases/casa.js";
import { Personaje } from "./clases/personaje.js";
import { Arma } from "./clases/arma.js";
import { Reino } from "./clases/reino.js";

//reino
const Reino1=new Reino("Poniente");
//casa
const CasaStark=new Casa("Casa Stark","Lema stakr");
const CasaLannister=new Casa("Casa Lannister","Lema lannis");
//armas
const Garra=new Arma("Garra mega fuerte","Garra",25,"Espada");
const Aguja=new Arma("Aguja mega fuerte","Aguja",15,"Espada");
//Personajes
const JonSnow=new Personaje("Jon Snow",24,true,CasaStark);
const AryaStark=new Personaje("Arya Stark",24,true,CasaStark);
const JaimeLannister=new Personaje("Jaime Lannister",24,true,CasaLannister);

//meter casas
Reino1.meterCasa(CasaStark);      // La Casa Stark Reino de Poniente.
Reino1.meterCasa(CasaLannister);  // La Casa Lannister Reino de Poniente.

//equipar arma
/* JonSnow.meterArma(Garra); */
console.log("Jon Snow ha equipado el arma "+Garra.getNombreArma());

/* AryaStark.meterArma(Aguja); */
console.log("Arya Stark ha equipado el arma "+Aguja.getNombreArma());

//meter personajes a las casas
CasaStark.meterMiembro(JonSnow); // lo meto a la lista de miembros de la Casa
console.log("Jon Snow ha sido añadido a la Casa Stark");


CasaStark.meterMiembro(AryaStark);
console.log("Arya Stark ha sido añadido a la Casa Stark");

CasaLannister.meterMiembro(JaimeLannister);
console.log("Jaime Lannister ha sido añadido a la Casa Lannister");

//Hacer rey al jaime
Reino1.proclamarRey(JaimeLannister);

//Visualizar casa de poniente
Reino1.visualizarCasas();

//ver rey
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
