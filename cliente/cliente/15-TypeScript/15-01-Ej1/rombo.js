var Rombo = /** @class */ (function () {
    function Rombo(diagonalVertical, diagonalHorizontal) {
        this.diagonalVertical = diagonalVertical;
        this.diagonalHorizontal = diagonalHorizontal;
    }
    Rombo.prototype.calcularArea = function () {
        return (this.diagonalVertical * this.diagonalHorizontal);
    };
    return Rombo;
}());
var rombo = new Rombo(5, 7);
console.log("El área del rombo es: " + rombo.calcularArea());
