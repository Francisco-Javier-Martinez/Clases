/**
 **************
 **** DATE ****
 **************
 * 
 */

/**
 * La clase Date en JavaScript tiene varios métodos útiles para trabajar con fechas. Algunos de los más comunes son:
 * getDate(): Devuelve el día del mes de una fecha dada (del 1 al 31).
 * getDay(): Devuelve el día de la semana de una fecha dada (del 0 al 6, siendo 0 el domingo).
 * getMonth(): Devuelve el mes de una fecha dada (del 0 al 11, siendo 0 el mes de enero).
 * getFullYear(): Devuelve el año de una fecha dada en formato de 4 dígitos.
 * getHours(): Devuelve la hora de una fecha dada (del 0 al 23).
 * getMinutes(): Devuelve los minutos de una fecha dada (del 0 al 59).
 * getSeconds(): Devuelve los segundos de una fecha dada (del 0 al 59).
 * getTime(): Devuelve la cantidad de milisegundos transcurridos desde la fecha de referencia de JavaScript (1 de enero de 1970) hasta una fecha dada.
 * setDate(day): Establece el día del mes de una fecha dada.
 * setFullYear(year): Establece el año de una fecha dada.
 * setMonth(month): Establece el mes de una fecha dada (del 0 al 11, siendo 0 el mes de enero).
 * setTime(milliseconds): Establece una fecha en función de la cantidad de milisegundos transcurridos desde la fecha de referencia de JavaScript (1 de enero de 1970).
 * toDateString() :devuelve una cadena de texto con una fecha en formato: "Día de la semana, Mes día, Año"
 * toISOString() :devuelve una cadena de texto con una fecha en formato ISO 8601, es decir "AAAA-MM-DDT00:00:00.000Z"
 * toUTCString(): devuelve una cadena de texto con una fecha en formato UTC, es decir: "Day, DD Mon YYYY HH:MM:SS GMT"
 * 
 */

/* Ejercicio: Escriba una función que calcule cuántos días han pasado desde el 1 de enero de un año dado hasta la fecha actual. */
/*

let ano = 2002;
let resultados;
resultados = diasDesdeEnero(ano);

function diasDesdeEnero(ano) {
    let fechaInicio = new Date(ano, 0, 1);
    let fechaActual = new Date();
    let diferencia = fechaActual - fechaInicio;
    let dias = diferencia / (1000 * 60 * 60 * 24); 
    console.log("Días desde el 1 de enero de " + ano + " son : " + parseInt(dias));    
}
*/

/* Ejercicio: Escriba una función que determine si una fecha es posterior a otra. */
/*
let fecha = new Date(2000,4,22);
let fecha2 = new Date(2025,0,24);

if(fecha>fecha2){
    console.log("Primera fecha es mayor a la segunda");
}else{
    console.log("La primera fecha es posterior a la segunda");
}
*/

/* Ejercicio: Escriba una función que calcule cuántos días faltan para el final de un mes dado. */



/* Ejercicio: Escriba una función que devuelva una fecha en formato "dd/mm/yyyy". */

/* Ejercicio: Escriba una función que devuelva la fecha de la próxima semana en formato "dd/mm/yyyy". */

/* Ejercicio: Escriba una función que devuelva una fecha en formato "dd de month de yyyy", donde month es el nombre del mes en español. */

/* Ejercicio: Escriba una función que devuelva el número de horas que han transcurrido desde una fecha dada hasta la fecha actual. */

/* Ejercicio: Escriba una función que devuelva el tiempo transcurrido desde una fecha dada en formato "HH:MM:SS". */

/* Ejercicio: Escriba una función que calcule cuántos días han pasado desde el 1 de enero de un año dado hasta una fecha dada. */

/* Ejercicio: Escriba una función que determine si una fecha es anterior a otra. */

/* Ejercicio: Escriba una función que devuelva el número de días que han pasado desde el inicio del mes hasta una fecha dada. */

/* Ejercicio: Escriba una funcición que devuelva una fecha en formato "yyyy-mm-dd". */

/* Ejercicio: Escriba una función que calcule cuántos minutos han pasado desde una fecha dada hasta la fecha actual. */

/* Ejercicio: Escriba una función que devuelva la fecha del próximo cumpleaños de una persona en formato "dd/mm/yyyy". */

/* Ejercicio: Escriba una función que devuelva una fecha en formato "dd de month de yyyy hh:mm a/pm", donde month es el nombre del mes en inglés y "a/pm" es "am" o "pm" según corresponda. Utilice los métodos getDate(), getMonth(), getFullYear(), getHours() y getMinutes().*/







/**************************
 *** EJERCICIOS STRINGS *** 
 **************************
 * length: Devuelve la longitud de un string.
 * indexOf: Devuelve la posición de la primera aparición de un valor especificado en un string.
 * lastIndexOf: Devuelve la posición de la última aparición de un valor especificado en un string.
 * slice: Extrae una porción del string y devuelve un nuevo string.
 * substring: Devuelve una parte de un string entre dos índices.
 * substr: Devuelve una parte de un string a partir de un índice y con una longitud especificada.
 * replace: Reemplaza una parte del string con otra.
 * toLowerCase: Devuelve el string en minúsculas.
 * toUpperCase: Devuelve el string en mayúsculas.
 * trim: Elimina los espacios en blanco al principio y al final de un string.
 */

/** Ejercicio: Dado un string " hello ":
 * - elimina los espacios en blanco al principio y al final del string
 * - convierte todas las letras a mayúsculas. 
 * - calcula la longitud del string resultante.
 * - muestra el resultado por pantalla
 */


/** Ejercicio: Dado un string "Hola, me llamo Sergio y estudio en IMF":
 * - Encuentra la posición de la primera aparición de la palabra "Sergio" 
 * - Extrae el nombre "Sergio" del string. 
 * - Reemplaza "Sergio" con tu nombre. 
 * - Muestra el resultado por pantalla .
 */


/** Ejercicio: Dado un string "Estamos dando javascript con un nivel basico":
 * - encontrar la posición de la primera aparición de la palabra "javascript" 
 * - extraer la palabra "javascript" del string. 
 * - convertir la palabra extraída a minúsculas y 
 */


/** Ejercicio: Dado un string "abcdefghijklmnopqrstuvwxyz":
 * - extraer la primera mitad del alfabeto 
 * - convertir todas las letras a mayúsculas.
 */


/** Ejercicio: Dado un string "Hola Mundo":
 * - obtener una subcadena que contenga sólo las letras "Mund"
 * - convertirlas a mayúsculas.*/


/** Ejercicio: Dado un string "Hola Mundo":
 * - obtener una subcadena que contenga las 3 últimas letras del string 
 * - convertirlas a minúsculas.
 */


/** Ejercicio: Dado un string "Hola Mundo": 
 * - encontrar la posición de la primera aparición de la letra "o" 
 * - extraer todo el substring desde esa posición hasta el final del string. 
 * - reemplazar "o" con "0"
 */


/** Ejercicio: Dado un string "Hola Mundo", 
 * - encontrar la posición de la primera aparición de la palabra "Mundo" 
 * - obtener una subcadena que contenga sólo las 3 primeras letras de "Mundo"
 * - convertirlas a mayúsculas.
 */
