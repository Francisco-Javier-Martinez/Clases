import { JineteDeDragon } from "./clases/personajesEspeciales/jineteDeDragon.js";
import { Casa } from "./clases/casa.js";
import { Arma } from "./clases/arma.js";
import { Dragon } from "./clases/dargon.js";
//casa
const CasaTargaryen=new Casa("Casa Targaryen","Fuego y Sangre");
const CasaBaratheon=new Casa("Casa Baratheon","Oye mi rugido");
//Armas
const Llamarada=new Arma("Llamarada infernal","Fuego",50,"Lanza");


//Dragones
const Drogon=new Dragon("Drogon",12,"Gigante",500);
const Rhaegal=new Dragon("Rhaegal",10,"Grande",300);
//jinete de dragon
const DaenerysTargaryen = new JineteDeDragon("Daenerys Targaryen",22,true,CasaTargaryen,Llamarada,Drogon);
const victor = new JineteDeDragon("Victor",30,true,CasaBaratheon,Llamarada,Drogon);

Drogon.vincularJinete(DaenerysTargaryen);
Rhaegal.vincularJinete(victor);


DaenerysTargaryen.montarDragon();
DaenerysTargaryen.luchar();
victor.montarDragon();
victor.luchar();
