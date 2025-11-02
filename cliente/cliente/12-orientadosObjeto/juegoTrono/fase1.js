import { Casa } from "./clases/casa.js";
import { Personaje } from "./clases/personaje.js";
import { Arma } from "./clases/arma.js";
import { Reino } from "./clases/reino.js";
/*Intanciar obj de la clase*/
const personaje1 = new Personaje();
const Casa1 = new Casa();
const Reino1 = new Reino();
const Escopeta = new Arma();

/* Crear armas */
Escopeta.meterNombreArma="Escopeta";
Escopeta.meterInformacion="Escopeta de calibre 2";
Escopeta.meterTipo="Cartucho rojo";
Escopeta.meterDano=150;
/*Meter Casa*/
Casa1.meterNombreCasa="Casa de los papus";
Casa1.meterLema="Papu de por vida";
/*Meter Reino*/
Reino1.meterReino="Reino de los papus";
/*Meter casa al reino*/
Reino1.meterCasa(Casa1);

/*Meter personajes*/
personaje1.meterNombrePersonaje="Javi del pirineo sexto";
personaje1.meterEdad=25;
/*Añadir personaje a la casa*/
personaje1.meterCasa(Casa1);
/*Añadir arma*/
personaje1.meterArma(Escopeta);

personaje1.presentarse();