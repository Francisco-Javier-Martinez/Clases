/*1. Desarrollar un programa que solicite la carga de 10 números e imprima la suma
de los últimos 5 valores ingresados.*/
/*
let arrayNum =[];
for (let i=0;i<10;i++){
    arrayNum[i]=parseInt(prompt("Ingrese un numero: "));
}
let sumaUltimos5 = arrayNum.slice(4,10).reduce((a,b)=>a+b,0);
console.log("Suma de los ultimos 5 numeros: "+sumaUltimos5);
*/
/*2. Escribir un programa que lea 10 notas de alumnos y nos informe cuántos tienen
notas mayores o iguales a 7 y cuántos menores.*/
/*
let notas = [];
for (let i = 0; i < 10; i++) {
    let nota;
    do {
        nota = parseInt(prompt('Ingrese la nota del alumno '+(1+i)+ ' (entre 0 y 10):'));
    } while (nota < 0 || nota > 10);
    notas.push(nota);
}

let mayoresIguales7 = notas.filter(a=>a>=7).length;
let menores7 = notas.filter(a=>a<7).length;
alert("Cantidad de notas mayores o iguales a 7: "+mayoresIguales7);
alert("Cantidad de notas menores a 7: "+menores7);

/* 3. Se ingresan un conjunto de 5 alturas de personas por teclado. Mostrar la altura
promedio de las personas.*/
/*
let alturas = [];
for (let i=0;i<5;i++){
    alturas[i]=parseFloat(prompt("Ingrese la altura en metros:"));
}
let promedioAlturas = alturas.reduce((a,b)=>a+b,0/alturas.length);
console.log("Promedio de alturas: "+promedioAlturas);
*/
/*4. Realizar un programa que pida la carga de dos vectores numéricos. Obtener la
suma de los dos vectores, dicho resultado guardarlo en un tercer vector del
mismo tamaño. Sumar componente a componente.*/
/*
let vector1 = [];
let vector2 = [];
for (let i=0;i<5;i++){
    vector1[i]=parseInt(prompt("Vector 1 - Ingrese numero "+(i+1)+":"));
}
for (let i=0;i<5;i++){
    vector2[i]=parseInt(prompt("Vector 2 - Ingrese numero "+(i+1)+":"));
}
let vectorSuma = vector1.map((num, idx) => num + vector2[idx]);
console.log("Vector 1: "+vector1);  
console.log("Vector 2: "+vector2);
console.log("Vector Suma: "+vectorSuma);
*/


/*7. Realizar un programa que permita cargar dos listas de 3 valores cada una.
Informar con un mensaje cual de las dos listas tiene un valor acumulado mayor
(mensajes 'Lista 1 mayor', 'Lista 2 mayor', 'Listas iguales')
Tener en cuenta que puede haber dos o más estructuras repetitivas en un
algoritmo.*/
/*
let lista1 = [1,2,3];
let lista2 = [93,34,3];

let sumlis1 = lista1.reduce((a,b)=>a+b);
let sumlis2 = lista2.reduce((a,b)=>a+b);

if(lista1>lista2){
    console.log("Lista 1 mayor");
}if (lista1===lista2) {
    console.log("Es igual");
} else {
    console.log("Lista 2 mayor");
}
*/


/*8. Desarrollar un programa que permita cargar 5 números enteros y luego nos
informe cuántos valores fueron pares y cuántos impares.
Emplear el operador "%" en la condición de la estructura condicional.
if (valor%2==0)
El operador "%" retorna el resto de la división valor / 2. Por ejemplo: 12 % 2, retorna 0;
13 % 2, retorna 1, porque el resto de dividir 13 en 2 es 1.*/
/*
let arrayNumero = [1,2,3,4,5];
let arrayPares = arrayNumero.filter(a=>a%2===0);
let arrayImpares = arrayNumero.filter(a=>a%2!==0);

console.log(arrayPares,arrayImpares);
*/

/*9. Realizar el siguiente ejercicio utilizando Arrays asociativo.
En un banco se procesan datos de las cuentas corrientes de sus clientes. De cada cuenta
corriente se conoce: número de cuenta, nombre del cliente y saldo actual. El ingreso de
datos debe finalizar al ingresar un valor negativo en el número de cuenta.
Se pide confeccionar un programa que lea los datos de las cuentas corrientes e informe:

a) De cada cuenta: número de cuenta, nombre del cliente y estado de la cuenta
según su saldo, sabiendo que:
Estado de la cuenta 'Acreedor' si el saldo es >0.
'Deudor' si el saldo es <0.
'Nulo' si el saldo es =0.

b) La suma total de los saldos acreedores.*/
/*
let cuentas = []; // Array de objetos (arrays asociativos)
let numeroCuenta;

do {
    numeroCuenta = parseInt(prompt("Ingrese número de cuenta (negativo para terminar):"));
    if (numeroCuenta >= 0) {
        let nombre = prompt("Ingrese nombre del cliente:");
        let saldo = parseFloat(prompt("Ingrese saldo de la cuenta:"));
        // Creamos el objeto con los datos
        let cuenta = {
            Numero_de_Cuenta: numeroCuenta,
            Nombre: nombre,
            Saldo: saldo
        };
        cuentas.push(cuenta);
    }
} while(numeroCuenta>=0);

// a) Informar estado de cada cuenta
cuentas.forEach(cuenta => { // Recorremos el array de cuentas   
    let estado;
    if (cuenta.Saldo > 0) {
        estado = 'Acreedor';
    } else if (cuenta.Saldo < 0) {
        estado = 'Deudor';
    } else {
        estado = 'Nulo';
    }
    alert("Numero de cuenta: " +cuenta.Numero_de_Cuenta + "\nNombre: " + cuenta.Nombre + "\nSaldo: " + cuenta.Saldo + "\nEstado: " + estado);
});
// b) Suma total de saldos acreedores
let sumaAcreedores = cuentas.filter(acreedores => acreedores.Saldo>0).reduce((a,b)=>a+b.Saldo,0);
alert("Suma total de saldos acreedores: "+sumaAcreedores);

*/

/*10. Se realizó un censo provincial y se desea procesar la información obtenida en
dicho censo. De cada una de las personas censadas se tiene la siguiente
información: número de documento, edad y sexo ('femenino' o 'masculino').
Se pide confeccionar un programa que lea los datos de cada persona censada (para
finalizar ingresar el valor cero en el número de documento) e informar:

a) Cantidad total de personas censadas.
b) Cantidad de varones.
c) Cantidad de mujeres.
d) Cantidad de varones cuya edad varía entre 16 y 65 años.*/
/*
let sw=1;
let personas=[];

while(sw!=0){
    sw=parseInt(prompt("Opcion: 1.Ingresar persona \n 2.Cantidad de personas censadas \n 3.Cantidad de varones \n  4.Cantidad de mujeres \n 5.Cantidad de varones cuya edad varía entre 16 y 65 años \n 0.Salir"))
    switch(sw){
        case 1:
            let numeroSwitch;
            do{
                numeroSwitch=parseInt(prompt("Numero de documento:"));
            }while(numeroSwitch<0);
            let edadSwitch;
            do{
                edadSwitch=parseInt(prompt("Edad:"));
            }while(edadSwitch<0 || edadSwitch>90);
            let sexoSwitch;
            do{
                sexoSwitch=prompt("Sexo (m/f):").toLowerCase();
            }while(sexoSwitch!="m" && sexoSwitch!="f");
            persona={
                numero: numeroSwitch,
                edad: edadSwitch,
                sexo: sexoSwitch
            };
            personas.push(persona);
            break;
        case 2:
            let cantidad=personas.length;
            alert("Cantidad de personas censadas: "+cantidad);
            break;
        case 3:
            let chombres=0;
            chombres=personas.filter(a=>a.sexo=="m").length;
            alert("Cantidad de varones: "+chombres);
            break;
        case 4:
            let cmujeres=0;
            cmujeres=personas.filter(a=>a.sexo=="f").length;
            alert("Cantidad de mujeres: "+cmujeres);
            break;
        case 5:
            let chombres16a65=0;
            chombres16a65=personas.filter(a=>a.sexo=="m" && a.edad>=16 && a.edad<=65).length;
            alert("Cantidad de varones cuya edad varía entre 16 y 65 años: "+chombres16a65);
            break;
        case 0:
            alert("Saliendo");
            break;
    }
}
*/
/*11. Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
a) La cantidad de valores negativos ingresados.
b) La cantidad de valores positivos ingresados.
c) La cantidad de múltiplos de 15.
d) El valor acumulado de los números ingresados que son pares.*/

/*
let valores = [];
for (let i=0;i<10;i++){
    valores[i]=parseInt(prompt("Ingrese un valor"));
}
let negativos = valores.filter(a=>a<0).length;
let positivos = valores.filter(a=>a>0).length;
let multiplos15 = valores.filter(a=>a%15===0).length;
let sumaPares = valores.filter(a=>a%2===0).reduce((a,b)=>a+b);

console.log("Negativos: "+negativos);
console.log("Positivos: "+positivos);
console.log("Multiplos de 15: "+multiplos15);
console.log("Suma de pares: "+sumaPares);
*/

/* 12. Se cuenta con la siguiente información:
Las edades de 5 estudiantes del turno mañana.
Las edades de 6 estudiantes del turno tarde.
Las edades de 11 estudiantes del turno noche.
Las edades de cada estudiante deben ingresarse por teclado.
a) Obtener el promedio de las edades de cada turno (tres promedios).
b) Imprimir dichos promedios (promedio de cada turno).
c) Mostrar por pantalla un mensaje que indique cual de los tres turnos
tiene un promedio de edades mayor. */
/*
let turnoManana = [];
for (let i=0;i<5;i++){
    turnoManana[i]=parseInt(prompt("Ingrese edad turno mañana"));
}

let turnoTarde = [];
for (let i=0;i<6;i++){
    turnoTarde[i]=parseInt(prompt("Ingrese edad turno tarde"));
}
let turnoNoche = [];
for (let i=0;i<11;i++){
    turnoNoche[i]=parseInt(prompt("Ingrese edad turno noche"));
}

let promedioManiana = turnoManana.reduce((a, b) => a + b) / turnoManana.length;
let promedioTarde = turnoTarde.reduce((a, b) => a + b) / turnoTarde.length;
let promedioNoche = turnoNoche.reduce((a, b) => a + b) / turnoNoche.length;

console.log("Promedio Mañana: "+promedioManiana);
console.log("Promedio Tarde: "+promedioTarde);
console.log("Promedio Noche: "+promedioNoche);

if(promedioManiana>promedioTarde && promedioManiana>promedioNoche){
    console.log("El turno con mayor promedio es el de la mañana");
}else if(promedioTarde>promedioManiana && promedioTarde>promedioNoche){
    console.log("El turno con mayor promedio es el de la tarde");
}else if(promedioNoche>promedioManiana && promedioNoche>promedioTarde){
    console.log("El turno con mayor promedio es el de la noche");
}else{
    console.log("Hay dos o más turnos con el mismo promedio");
}
*/