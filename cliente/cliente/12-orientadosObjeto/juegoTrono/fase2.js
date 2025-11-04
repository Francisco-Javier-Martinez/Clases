import { Guerrero } from "./clases/personajesEspeciales/guerrero.js";
import { Casa } from "./clases/casa.js";
import { Arma } from "./clases/arma.js";
import { Consejero } from "./clases/personajesEspeciales/consejero.js";
import { Rey } from "./clases/personajesEspeciales/rey.js";

const JonSwon = new Guerrero();
const Tyrion = new Consejero();
const RobertBaratheon = new Rey();

const CasaStark = new Casa();
const CasaLannister = new Casa();

const Garra = new Arma();

CasaStark.meterNombreCasa="Casa Stark";
CasaLannister.meterNombreCasa="Casa Lannister";
JonSwon.meterNombrePersonaje="Jon Snow";
Tyrion.meterNombrePersonaje="Tyrion";
RobertBaratheon.meterNombrePersonaje="Robert Baratheon";

JonSwon.meterCasa(CasaStark);
JonSwon.presentarse();
Tyrion.meterCasa(CasaLannister);
RobertBaratheon.meterCasa(CasaLannister);
Tyrion.meterEspecialidad="PHP";


Garra.meterNombreArma="Garra";
Garra.meterDano=25;

JonSwon.meterArma(Garra);


JonSwon.luchar();
JonSwon.entrenar();

Tyrion.presentarse();
Tyrion.aconsejar(RobertBaratheon);


RobertBaratheon.meterAnoReinado=15;
RobertBaratheon.presentarse();
RobertBaratheon.gobernar();
RobertBaratheon.luchar();