/*Dado el código siguiente, tendremos que crear una interfaz que sirva
después para validar el objeto.
var camaleon = {
tipo: "reptil",
peculiaridad: "camuflarse"
}*/
/*interface estructura que define la forma de un objeto en TypeScript*/
interface Camaleon {
    tipo: string;
    peculiaridad: string;
}
/*aqioui se crea el objeto camaleon de tipo Camaleon*/
let camaleon: Camaleon = {
    tipo: "reptil",
    peculiaridad: "camuflarse"
};
console.log(camaleon);