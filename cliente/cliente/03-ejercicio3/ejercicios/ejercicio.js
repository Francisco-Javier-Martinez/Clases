'use strick'

/*13,15,17,*/

/*2. Confeccionar una programa en JavaScript que defina e inicialice una variable de
tipo cadena de caracteres donde almacenemos el nombre de un empleado y otra variable de
tipo real donde almacenar el sueldo. Imprimir cada variable en una línea distinta en
pantalla.*/
/*
let nombre = "pablo";
let sueldo = 1;

alert(nombre + " cobra: "+sueldo+"€");

*/

/*3. Realizar la carga del lado de un cuadrado, mostrar por pantalla el perímetro del
mismo (El perímetro de un cuadrado se calcula multiplicando el valor del lado por cuatro).*/
/*
let lado = prompt("Cuando mide el lado: ");
let perimetro = lado * 4;
alert("El perimetro es: "+perimetro);
*/

/*4. Escribir un programa en el cual se ingresen cuatro números, calcular e informar la
suma de los dos primeros y el producto del tercero y el cuarto.*/
/*
let num1 = prompt("numero 1: ");
let num2 = prompt("numero 2: ");
let num3 = prompt("numero 3: ");
let num4 = prompt("numero 4: ");

alert("suma: " + (Number(num1)+Number(num2)) + " Multiplicacion: "+num3*num4);

*/
/*6. Se debe desarrollar un programa que pida el ingreso del precio de un artículo y la
cantidad que se lleva el cliente. Mostrar lo que debe abonar el comprador (Ingresar por
teclado un precio sin decimales, es decir un entero: 2, 7, 90 etc.).*/
/*
do{
    let precio= prompt("Cuanto vale la aspiradora 3000 turbo lim: ");
    precioEntero = parseInt(precio);
}while(precioEntero<0);

let cantidad = prompt("Cantidad: ");
let abonar = precioEntero*cantidad;
alert("Precio a pagar: "+ abonar);
*/

/*7. Se ingresan tres notas de un alumno, si el promedio es mayor o igual a siete mostrar
el mensaje 'Promocionado'. Tener en cuenta que para obtener el promedio debemos operar
suma=nota1+nota2+nota3; y luego hacer promedio=suma/3;
Cuando cargamos una nota y queremos convertir inmediatamente el valor ingresado a
entero podemos hacer:
nota1=prompt('Ingrese primer nota:','');
nota1=parseInt(nota1);*/
/*
let arrayNotas = [];

for(let i=0;i<3;i++){
    arrayNotas[i] = parseInt(prompt("Nota "+(i+1)+": "));
}

let promedio = 0;
for(let i=0;i<3;i++){
    promedio=(promedio+arrayNotas[i]);
}

alert(arrayNotas+" Promedio: "+ promedio);
*/

/*8. Solicitar que se ingrese dos veces una clave. Mostrar un mensaje si son iguales
(tener en cuenta que para ver si dos variables tienen el mismo valor almacenado debemos
utilizar el operador ==).*/
/*
let clave = prompt("Introduce clave: ");
let clave2 = prompt("Introduce clave 2: ");
if(clave===clave2){
    alert("SON INGUALES");
}else{
    alert("NO SON IGUALES");
}
*/

/*9. Realizar un programa que lea por teclado dos números, si el primero es mayor al
segundo informar su suma y diferencia, en caso contrario informar el producto y la división
del primero respecto al segundo.*/
/*
let num1 = parseInt(prompt("Numero 1 : "));
let num2 = parseInt(prompt("Numero 2: "));

if(num1>=num2){
    let s = num1+num2;
    alert("Suma: "+s);
}else{
    let p = num1*num2;
    alert("Producto: "+p);
    
    if(num1==0){
        alert("No se puede dividir por 0");
    }else{
        let d = num1/num2;
        alert("Division: "+d);
    }
}
*/
/*10. Se ingresan tres notas de un alumno, si el promedio es mayor o igual a 4 mostrar un
mensaje 'regular', sino 'reprobado'.*/
/*
let arrayNotas = [];
let promedio=0;
for(let i=0;i<3;i++){
    arrayNotas[i]=parseInt(prompt("Nota "+(i+1)+":"));
    promedio=promedio+arrayNotas[i];
}
promedio=promedio/3;

if(promedio>=4){
    alert("APROBADO");
}else{
    alert("SUSPENDIDO");
}
*/

/*11. Se ingresa por teclado un número positivo de uno o dos dígitos (1..99) mostrar un
mensaje indicando si el número tiene uno o dos dígitos (recordar de convertir a entero con
parseInt para preguntar posteriormente por una variable entera). Tener en cuenta qué
condición debe cumplirse para tener dos dígitos, un número entero.*/

/*
do{
let num1 = prompt("Ingresa un numero positivo de 1 o 2 digitos: ");
}while(num1>0 || num>100);
*/

/*
13. De un operario se conoce su sueldo y los años de antigüedad. Se pide confeccionar
un programa que lea los datos de entrada e informe
a) Si el sueldo es inferior a 500 y su antigüedad es igual o superior a 10 años,
otorgarle un aumento del 20 %, mostrar el sueldo a pagar.
b) Si el sueldo es inferior a 500 pero su antigüedad es menor a 10 años, otorgarle un
aumento de 5 %.
c) Si el sueldo es mayor o igual a 500 mostrar el sueldo en la página sin cambios.
*/

/*
let sueldo = parseInt(prompt("Cual es tu sueldo: "));
let antiguedad = parseInt(prompt("Cuantos años llevas trabajando: "));

if(sueldo<500 && antiguedad>=10){
    sueldo = sueldo + (sueldo*0.2);
    alert("Tu sueldo es: "+sueldo);
}else if(sueldo<500 && antiguedad<10){
    sueldo = sueldo + (sueldo*0.05);
    alert("Tu sueldo es: "+sueldo);
}else{
    alert("Tu sueldo es: "+sueldo);
}
*/

/*15. Solicitar el ingreso alguna de estas palabras (casa, mesa, perro, gato) luego mostrar
la palabra traducida en inglés. Es decir, si se ingresa 'casa' debemos mostrar el texto 'house'
en la página.*/
/*
let palabra = prompt("Ingresa una palabra (casa, mesa, perro, gato): ");
switch(palabra.toLowerCase()){
    case "casa":
        alert("house");
        break;
    case "mesa":
        alert("table");
        break;
    case "perro":
        alert("dog");
        break;
    case "gato":
        alert("cat");
        break;
    default:
        alert("No conozco esa palabra");
        break;
}
*/

/*17. Pide una nota (número). Muestra la calificación según la nota:
 0-3: Muy deficiente
 3-5: Insuficiente
 5-6: Suficiente
 6-7: Bien
 7-9: Notable
 9-10: Sobresaliente*/
/*
let nota;
do {
    nota = parseInt(prompt("Nota: (0-10)"));
} while (isNaN(nota) || nota < 0 || nota > 10);

switch(nota){
    case 0:
    case 1:
    case 2:
    case 3:
        alert("Muy deficiente");
        break;
    case 4:
    case 5:
        alert("Insuficiente");
        break;
    case 6:
        alert("Suficiente");
        break;
    case 7:
        alert("Bien");
        break;
    case 8:
    case 9:
        alert("Notable");
        break;
    case 10:
        alert("Sobresaliente");
        break;
}
*/

/*12. Se ingresan tres valores por teclado, si todos son iguales se imprime la suma del
primero con el segundo y a este resultado se lo multiplica por el tercero (tener en cuenta que
puede haber tres condiciones simples).*/
/*
let num1 = parseInt(prompt("Numero 1: "));
let num2 = parseInt(prompt("Numero 2: "));
let num3 = parseInt(prompt("Numero 3: "));

if(num1 == num2 && num2 == num3){
    alert("operacion: "+(num1+num2)*num3);
}else{
    alert("No son iguales");
}
    */



/*14. Se ingresan por teclado tres números, si al menos uno de los valores ingresados es
menores a 10, imprimir en la página la leyenda 'Alguno de los números son menores a diez'.*/

/*
let num1 = parseInt(prompt("Numero 1: "));
let num2 = parseInt(prompt("Numero 2: "));
let num3 = parseInt(prompt("Numero 3: "));

if(num1<10 || num2<10 || num3<10){
    alert("Alguno de los números son menores a diez");
}else{
    alert("Todos los numeros son mayores a 10");
}
    */

/*16. Pide la edad y si es mayor de 18 años indica que ya puede conducir.*/
/*
let edad = parseInt(prompt("Edad: "));

if(edad>18){
    alert("Ya puedes conducir si apruebas");
}else{
    alert("No puedes conducir vete a pata");
}
    */

/*18. Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al salir
con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión. (Utilizaremos
el método confirm de javascript).*/
/*
let cadenaEntera = "";
do {
  let cadena = prompt("Introduce una cadena de texto:");
  if (cadena != "") {

    if (cadenaEntera != "") {
      cadenaEntera = cadenaEntera + " - ";
    }
    cadenaEntera = cadenaEntera + cadena;
  }
} while (confirm("Quieres seguir o no pesao")); 
alert(cadenaEntera);
*/

/*19. Crea script para generar pirámide siguiente con los números del 1 al número que
indique el usuario (no mayor de 50).
1
12
123
1234
12345*/
/*
let numero ;
do{
    numero = parseInt(prompt("Numero no mayor a 50"));
}while(numero>50 || numero<0);

for(let i=1;i<=numero;i++){
    let fila = "";
    for(let j=1;j<=i;j++){
        fila = fila + j;
    }
    console.log(fila);
}
*/
/*20. Realiza un script que imprima 14 resultados aleatorios de una quiniela 1 X 2.*/

let sw=0;
let x12;
let partidos = ["Espayol vs valencia","Bilbao vs Girona", "Sevilla vs Villareal", "Levante vs Madrid","Ceuta vs Zaragoza","Albacete vs Real Valladolid","Eibar vs Real Sociedad b","Malaga vs cadiz","Cordoba vs Racing"];
let resultados =["x","x","2","2","1","1","1","2","x"];


let contadorAcertados = 0;
do{
   for(let i=0;i<partidos.length;i++){
    do {
     x12 = prompt("Partido: "+ partidos[i]+"   1(Gana local) X(Empate) 2(Gana equipo visitante");
    }while(x12!="1" && x12!="2" && x12.toLocaleLowerCase()!= "x");
    sw++;
    if(x12==resultados[i]){
        contadorAcertados++;
    }
   }
}while(sw<partidos.length);
let fallos=0;
fallos=partidos.length-contadorAcertados;
alert("Has acertado: "+contadorAcertados+" Fallados: "+fallos);