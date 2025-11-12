import { Casa } from "./clases/casa.js";
import { Arma } from "./clases/arma.js";
import { Guerrero } from "./clases/personajesEspeciales/guerrero.js";
import { Consejero } from "./clases/personajesEspeciales/consejero.js";
import { Rey } from "./clases/personajesEspeciales/rey.js";
import { Mago } from "./clases/personajesEspeciales/tiposGuerreros/mago.js";
import { Currandero } from "./clases/personajesEspeciales/tiposGuerreros/curandero.js";
import { Fuego } from "./clases/tipoDragones/fuego.js";
import { Hielo } from "./clases/tipoDragones/hielo.js";
import { Electrico } from "./clases/tipoDragones/electrico.js";

//casa
const CasaStark=new Casa("Casa Stark","Lema stakr");
const CasaLannister=new Casa("Casa Lannister","Lema lannis");
const CasaPapu =new Casa("Casa Papu","Lema papu");

//Armas
const Garra=new Arma("Garra mega fuerte","Garra",25,"Espada");
const ArmaMataMuerto= new Arma("Mata muertos","Matanza",100,"Dios");


//Personajes
const JonSwon = new Guerrero("Jon Snow",24,true,CasaStark,Garra);
const Tyrion = new Consejero("Tyrion",26,true,CasaLannister,"PHP");
const RobertBaratheon = new Rey("Robert Baratheon",21,true,CasaLannister,15);
const alberto = new Mago("Alberto el mago",40,true,CasaPapu,ArmaMataMuerto,30,"Fuego");
const victor = new Currandero("Victor el curandero",35,true,CasaStark,ArmaMataMuerto,40);

alberto.presentarse();
alberto.luchar();
alberto.lanzarHechizo(JonSwon);

victor.presentarse();
victor.curar(JonSwon);

//Dragones
const fuego = new Fuego("FuegoD", 10,CasaPapu, 1500);
const hielo = new Hielo("HieloD", 8,CasaStark,1300);
const electrico = new Electrico("ElectricoD", 9,CasaStark,1400);

fuego.volar(); 
fuego.atacar();
electrico.atacarConVoltaje(JonSwon); 
electrico.atacarConVoltaje(hielo); 
electrico.atacarConVoltaje(hielo); 
