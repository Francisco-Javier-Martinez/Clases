import { Guerrero } from "./clases/personajesEspeciales/guerrero.js";
import { Casa } from "./clases/casa.js";
import { Arma } from "./clases/arma.js";
import { Consejero } from "./clases/personajesEspeciales/consejero.js";
import { Rey } from "./clases/personajesEspeciales/rey.js";
//casa
const CasaStark=new Casa("Casa Stark","Lema stakr");
const CasaLannister=new Casa("Casa Lannister","Lema lannis");

//Armas
const Garra=new Arma("Garra mega fuerte","Garra",25,"Espada");

//Personajes
const JonSwon = new Guerrero("Jon Snow",24,true,CasaStark,Garra);
const Tyrion = new Consejero("Tyrion",26,true,CasaLannister,"PHP");
const RobertBaratheon = new Rey("Robert Baratheon",21,true,CasaLannister,15);


JonSwon.presentarse();


JonSwon.luchar();
JonSwon.entrenar();

Tyrion.presentarse();
Tyrion.aconsejar(RobertBaratheon);

RobertBaratheon.presentarse();
RobertBaratheon.gobernar();
RobertBaratheon.luchar();