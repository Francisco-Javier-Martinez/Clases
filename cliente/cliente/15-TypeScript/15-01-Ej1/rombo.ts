class Rombo{
    diagonalVertical: number;
    diagonalHorizontal: number;

    constructor(diagonalVertical: number, diagonalHorizontal: number){
        this.diagonalVertical=diagonalVertical;
        this.diagonalHorizontal=diagonalHorizontal;
    }
    
    calcularArea(): number{
        return (this.diagonalVertical * this.diagonalHorizontal);
    }
}

let rombo= new Rombo (5,7);
console.log("El área del rombo es: " + rombo.calcularArea());