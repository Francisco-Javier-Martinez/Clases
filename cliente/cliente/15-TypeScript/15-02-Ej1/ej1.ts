/*Ejercicio 1
Deberá crear una clase con una variable pública de cada tipo (string
number, boolean, any, Array) un constructor e instanciar un objeto y
luego compilar el typescript a js.*/

class Ej1{
    public nombre: string;
    public edad: number
    public sino : boolean;
    public datos: any/* any es un tipo de dato que puede contener cualquier valor */;
    public arrayDatos: Array<number>; 
    
    constructor(nombre: string, edad: number, sino: boolean, datos: any, arrayDatos: Array<number>){
        this.nombre=nombre;
        this.edad=edad;
        this.sino=sino;
        this.datos=datos;
        this.arrayDatos=arrayDatos;
    }

}

let objetoEj1= new Ej1("Javi",17,true,"hola",[1,2,3,4,5]);
console.log(objetoEj1);