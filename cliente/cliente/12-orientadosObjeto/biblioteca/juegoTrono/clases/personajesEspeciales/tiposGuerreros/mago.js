import { Guerrero } from "../guerrero.js";

export class Mago extends Guerrero{
    poderMagico;
    hechizosPrincipal;

    constructor(nombrePersonaje,edad,live,casaPerteneciente,arma,poder,hechizo){
        // Pasamos el arma al constructor de Guerrero
        super(nombrePersonaje,edad,live,casaPerteneciente,arma);
        this.poderMagico=poder||0;
        this.hechizosPrincipal=hechizo||"";
    }

    set meterPoderMagico(poder){
        this.poderMagico=poder;
    }
    set meterHechizoPrincipal(hechizo){
        this.hechizosPrincipal=hechizo;
    }

    luchar(){
        console.log(this.nombrePersonaje+" utiliza su magia para luchar contra sus enemigos.");
    }

    lanzarHechizo(objetivo){
        console.log(this.nombrePersonaje+" lanza "+ this.hechizosPrincipal +" "+ objetivo.nombrePersonaje);
        objetivo.recibirDano(this.poderMagico);
        console.log(objetivo.nombrePersonaje+" recibe "+this.poderMagico+" puntos de daño mágico.");
        console.log("Vida restante de "+objetivo.nombrePersonaje+": "+objetivo.vida);
    }

    get poder(){
        return this.poderMagico;
    }
    get hechizo(){
        return this.hechizosPrincipal;
    }

}