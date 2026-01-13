/*Deberá crear una clase para contemplar un rectángulo con dos propiedades:
1 → Base
2 → Altura
También deberá tener un método para calcular el área (Base*Altura),
este método deberá devolver un valor numérico.*/
class Ej2{
    public base: number;
    public altura: number;

    constructor(base: number, altura: number){
        this.base=base;
        this.altura=altura;
    }
    calcularArea(): number{
        return this.base * this.altura;
    }

}
let objetoEj2= new Ej2 (5,10);
console.log("El área del rectángulo es: " + objetoEj2.calcularArea());