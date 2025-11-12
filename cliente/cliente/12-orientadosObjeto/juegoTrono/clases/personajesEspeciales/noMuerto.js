import { Guerrero } from "./guerrero.js";

export class NoMuerto extends Guerrero {
    #fuerzaAmpliada; // Los no-muertos tienen más fuerza

    constructor(guerreroMuerto) {
        // Llamamos al constructor del padre con los datos del guerrero muerto
        super(
            guerreroMuerto.getNombrePersonaje(),
            guerreroMuerto.getEdad(),
            true, // Revivimos al no-muerto como vivo
            guerreroMuerto.getCasaPerteneciente(),
            guerreroMuerto.getArma()
        );
        
        // Los no-muertos tienen más fuerza
        this.#fuerzaAmpliada = 1.5; // 50% más de daño
    }

    // Obtener la fuerza ampliada del no-muerto
    getFuerzaAmpliada() {
        return this.#fuerzaAmpliada;
    }

    // Sobrescribir el método atacar para que haga más daño
    atacar(objetivo) {
        const daño = Math.floor(this.getArma().Dano * this.#fuerzaAmpliada * (0.7 + Math.random() * 0.6));
        console.log(this.getNombrePersonaje() + " (no-muerto) ataca a " + objetivo.getNombrePersonaje() + " causando " + daño + " de daño");
        objetivo.recibirDano(daño);
    }

    // Método especial de no-muerto
    revivir() {
        console.log(this.getNombrePersonaje() + " ha sido revivido como no-muerto. ¡Vuelve a la batalla!");
    }

    // Método para mostrar características del no-muerto
    mostrarCaracteristicas() {
        console.log(`${this.getNombrePersonaje()} (NO-MUERTO) - Vida: ${this.getVida()} | Casa: ${this.getCasaPerteneciente().getNombreCasa()} | Fuerza Ampliada: ${this.#fuerzaAmpliada}x`);
    }
}
