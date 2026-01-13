/*Deberá crear una clase para contemplar un rectángulo con dos propiedades:
1 → Base
2 → Altura
También deberá tener un método para calcular el área (Base*Altura),
este método deberá devolver un valor numérico.*/
var Ej2 = /** @class */ (function () {
    function Ej2(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    Ej2.prototype.calcularArea = function () {
        return this.base * this.altura;
    };
    return Ej2;
}());
var objetoEj2 = new Ej2(5, 10);
console.log("El área del rectángulo es: " + objetoEj2.calcularArea());
