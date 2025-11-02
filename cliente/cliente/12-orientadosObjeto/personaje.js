export class Personaje{
    nombre;
    fuerza;
    velocidad;
    energia;
    vidas;
    constructor(){
        this._nombre = "";
        this.fuerza = 0;
        this.velocidad = 0;
        this.energia = 0;
        this.vidas = 5;
    }

    set ponerNombre(nombre){
        this._nombre = nombre;
    }

    monstrarCaracteristicas(){
        return `Nombre: ${this._nombre} Fuerza: ${this.fuerza} Velocidad: ${this.velocidad} Energia: ${this.energia} Vidas: ${this.vidas}`;
    }

    hablar(){
        console.log("Mi nombre es: "+this._nombre+ " mataré al jefe");
    }

    disparar(){
        if(this.vidas <= 0){
            console.log("Muerto");
        }else{
            this.vidas = this.vidas - 1;
        }
    }

    curar(){
        if(this.vidas<5){
            this.vidas=5;
        }
    }
}