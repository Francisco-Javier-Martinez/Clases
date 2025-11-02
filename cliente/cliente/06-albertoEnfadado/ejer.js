/**********************************************************************************************
*               EJERCICIOS PARA PRACTICAR EL ACCESO A OBJETOS DENTRO DE UN ARRAY              *
*                    Cada actividad tiene dos opciones, ambas válidas                         *
**********************************************************************************************/

/**********************************************************************************************
 *     - ACT 1 - Realizar una función para filtrar los jugadores que tengan más de 20 goles   *
 *     - ACT 2 - Obtener el total de goles de todos los jugadores                             *
 *     - ACT 3 - Ordenar los jugadores por asistencias (de mayor a menor)   	              *
 *     - ACT 4 - Contar tarjetas rojas y amarillas por equipo                                 *
 *     - ACT 5 - Obtener el promedio de goles por partido para cada jugador                   *
 *     - ACT 6 - Encontrar el jugador con más asistencias                                     *
 *     - ACT 7 - Listar los nombres de los jugadores por posición                             *
 *********************************************************************************************/

const futbolistas = [
    {
        nombre: "Lionel Messi",
        equipo: "Inter Miami",
        posicion: "Delantero",
        goles: 40,
        asistencias: 18,
        partidosJugados: 30,
        tarjetaAmarilla: 3,
        tarjetaRoja: 0
    },
    {
        nombre: "Cristiano Ronaldo",
        equipo: "Al Nassr",
        posicion: "Delantero",
        goles: 35,
        asistencias: 12,
        partidosJugados: 28,
        tarjetaAmarilla: 5,
        tarjetaRoja: 1
    },
    {
        nombre: "Kevin De Bruyne",
        equipo: "Manchester City",
        posicion: "Mediocampista",
        goles: 10,
        asistencias: 22,
        partidosJugados: 25,
        tarjetaAmarilla: 2,
        tarjetaRoja: 0
    },
    {
        nombre: "Virgil van Dijk",
        equipo: "Liverpool",
        posicion: "Defensa",
        goles: 5,
        asistencias: 3,
        partidosJugados: 27,
        tarjetaAmarilla: 4,
        tarjetaRoja: 1
    },
    {
        nombre: "Thibaut Courtois",
        equipo: "Real Madrid",
        posicion: "Portero",
        goles: 0,
        asistencias: 1,
        partidosJugados: 29,
        tarjetaAmarilla: 2,
        tarjetaRoja: 0
    },
    {
        nombre: "Erling Haaland",
        equipo: "Manchester City",
        posicion: "Delantero",
        goles: 45,
        asistencias: 5,
        partidosJugados: 30,
        tarjetaAmarilla: 3,
        tarjetaRoja: 0
    },
    {
        nombre: "Kylian Mbappé",
        equipo: "Paris Saint-Germain",
        posicion: "Delantero",
        goles: 42,
        asistencias: 10,
        partidosJugados: 29,
        tarjetaAmarilla: 2,
        tarjetaRoja: 0
    },
    {
        nombre: "Bakambu",
        equipo: "Real Betis",
        posicion: "Delantero",
        goles: 160,
        asistencias: 15,
        partidosJugados: 26,
        tarjetaAmarilla: 4,
        tarjetaRoja: 1
    }
];

let sw=0;
while(sw != 8){
    do {
        sw = parseInt(prompt("1. Filtrar jugadores con más de 20 goles\n2. Total de goles de todos los jugadores\n3. Ordenar jugadores por asistencias\n4. Contar tarjetas por equipo\n5. Promedio de goles por partido\n6. Jugador con más asistencias\n7. Listar nombres por posición\n8. Salir"));
    } while (sw<1 || sw>8);
    switch(sw){
        case 1:
            alert("Jugadores con mas de 20 goles: ");
            futbolistas.forEach(element => {
                if(element.goles>20){
                    alert(element.nombre);
                }
            });
            break;
        case 2:
            let sum=0;
            futbolistas.forEach(element => {
                sum=element.goles;
            });
            let prom=sum/futbolistas.length;
            alert("Promedio de goles: "+prom);
            break;
        case 3:
            alert("Jugadores ordenados por asistencias: ");
            futbolistas.sort((a, b) => b.asistencias - a.asistencias);
            futbolistas.forEach(element => {
                alert(element.nombre +" tiene "+ element.asistencias + " asistencias");
            });
            break;
        case 4:

            let equipos = [];
            futbolistas.forEach(element => {
                if(!equipos.includes(element.equipo)){
                    equipos.push(element.equipo);
                }
            });

            equipos.forEach(elementequipo => {
                let sumaAmarillas=0;
                let sumaRojas=0;
                futbolistas.forEach(element => {
                    if(elementequipo==element.equipo){
                        sumaAmarillas=sumaAmarillas+element.tarjetaAmarilla;
                        sumaRojas=sumaRojas+element.tarjetaRoja;
                    }
                });
                alert("El equipo: "+elementequipo+" tiene "+ sumaAmarillas+" tarjetas amarrillas y "+ sumaRojas + " tarjetas rojas");
            });

            break;
        
        case 5:
            futbolistas.forEach(element => {
                let promedio = element.goles/element.partidosJugados;
                alert("Jugador: "+element.nombre+ " tiene un promedio de gol de: "+ promedio.toFixed(2)+"%");
            });
            break;
        
        case 6:
            let jugadorMaxAsis=0;
            let nombre;
            futbolistas.forEach(element => {
                if(jugadorMaxAsis<element.asistencias){
                    nombre=element.nombre;
                    jugadorMaxAsis=element.asistencias;
                }
            });
            alert("Jugador con mas asistencias: "+nombre+" Con un total de: "+jugadorMaxAsis);
            break;
        case 7:
            alert("Jugadores ordenados por posicion: ");
            futbolistas.sort((a, b) => a.posicion.localeCompare(b.posicion));
            futbolistas.forEach(element => {
                alert(element.nombre +" posicion: "+ element.posicion);
            });
            break;
        case 8:
            alert("Saliendo");
            break;
    }
}