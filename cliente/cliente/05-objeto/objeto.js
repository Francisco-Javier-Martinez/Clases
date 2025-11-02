/*let user = {
  name: "John",
  age: 30,
  "likes birds": true  // Las claves con más de una palabra deben ir entre comillas
};
alert(user["likes birds"]);
console.log(typeof(user["likes birds"]));
*/
/*
let fruit = prompt("¿Qué fruta comprar?");

let bag = {
  [fruit]: 5, // El nombre de la propiedad se obtiene de la variable fruit
};

alert( bag.apple ); // 5 si fruit es="apple"*/

/*1.Crea un objeto persona con las propiedades nombre, edad y ciudad.
Luego muestra su contenido en consola.
*/
/*
let persona = {
    nombre :"Javi",
    edad :19,
    ciudad: "Badajoz"
};
console.log(persona);*/

/*2.  Dado el objeto:


Muestra por consola la marca del coche.
Cambia el año a 2024.
Agrega una propiedad color con valor "rojo".*/
/*
let coche = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020,
};
console.log(coche.marca);

coche.ano=2024;
console.log(coche.ano);
coche.color = "rojo";
console.log(coche.color);

*/
/*4. Crea un objeto empresa que contenga dentro otro objeto direccion con propiedades calle, numero y ciudad.*/
/*
let empresa = {
  nombre : "Papu contructora",
  direccion: {
    calle: "Calle de los papus",
    numero: 777,
    ciudad: "Papulandia"
  }
};

console.log(empresa.direccion.calle);
*/

/*5. Escribe una función filtrarPorTipo(obj, tipo) que devuelva un nuevo objeto solo con las propiedades cuyo valor es del tipo indicado.
*/
const filtrarPorTipo = (objeto, tipo) => {
    let nuevoObjeto = {};
    for (let key in objeto) {
        if (typeof (objeto[key]) === tipo) {
            nuevoObjeto[key] = objeto[key];
        }
    }
    return nuevoObjeto;
};

let datos = {
    nombre: "Ana",
    edad: 25,
    activo: true,
    salario: 1200
};

console.log(filtrarPorTipo(datos, "number"));