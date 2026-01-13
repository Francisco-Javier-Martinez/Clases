class Eje33 extends Ej3 {
    constructor(base: number, altura: number) {
        super(base, altura);
    }

    calcularArea(): number {
        return this.base * this.altura/2;
    }
}

let triangulo = new Eje33(10, 5);
console.log("Área del Triángulo:", triangulo.calcularArea());