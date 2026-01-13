var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Eje33 = /** @class */ (function (_super) {
    __extends(Eje33, _super);
    function Eje33(base, altura) {
        return _super.call(this, base, altura) || this;
    }
    Eje33.prototype.calcularArea = function () {
        return this.base * this.altura / 2;
    };
    return Eje33;
}(Ej3));
var triangulo = new Eje33(10, 5);
console.log("Área del Triángulo:", triangulo.calcularArea());
