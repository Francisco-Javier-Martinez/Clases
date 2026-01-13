class Eje32 extends Ej3 {
    constructor(base: number, altura: number) {
        super(base, altura);
    }

    calcularArea(): number {
        return this.base * this.altura;
    }
}

let rect = new Eje32(10, 5);
console.log("Área del Rectángulo:", rect.calcularArea());