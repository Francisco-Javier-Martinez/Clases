/*Ejercicio 1
Deberá crear una clase con una variable pública de cada tipo (string
number, boolean, any, Array) un constructor e instanciar un objeto y
luego compilar el typescript a js.*/
var Ej1 = /** @class */ (function () {
    function Ej1(nombre, edad, sino, datos, arrayDatos) {
        this.nombre = nombre;
        this.edad = edad;
        this.sino = sino;
        this.datos = datos;
        this.arrayDatos = arrayDatos;
    }
    return Ej1;
}());
var objetoEj1 = new Ej1("Javi", 17, true, "hola", [1, 2, 3, 4, 5]);
console.log(objetoEj1);
