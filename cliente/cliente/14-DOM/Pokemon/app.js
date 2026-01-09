/*Ejercicio 1: Buscar y mostrar Información del Pokémon con Fetch
Objetivo: Utilizar Fetch y async/await para realizar una consulta a la API y mostrar información básica del Pokémon (nombre, ID, y sprite).
En app.js, crea una función buscarPokemon que utilice fetch para realizar una solicitud a la API.*/

//el async es para decir que la función va a tener código asíncrono dentro

async function buscarPokemon() {
    let pokemonNombre=document.getElementById('pokemon-input').value.toLowerCase();
    let tarjetaPokemon=document.getElementById('pokemon-data');
    if (!pokemonNombre) {
        alert("Por favor, escribe un nombre");
        return;
    }
    try {
        //El await/fetch lo usamos para hacer peticiones asíncronas
        //await + fetch para esperar la respuesta de la API
        let respuesta=await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonNombre);
        //.ok es para ver si la respuesta es correcta 
        //no puedo poner solo if(!respuesta) porque fetch siempre devuelve un objeto respuesta
        //si me no devuelve el pokemon le saco un alert
        if (!respuesta.ok) {
            alert("Pokemon no encontrado "+ pokemonNombre);  
        } else {
            //si es correcto le saco una tarjeta con los datos del pokemon
            //Aqui como ya tenemos hecho el fetch arriba recogemos los datos con .json() 
            let data=await respuesta.json();
            //El json es leido por mi gran amigo el geminis que me dio palo estan puesto los shinys
            tarjetaPokemon.innerHTML =`
                <h2>ID: ${data.id}</h2>
                <h2>${data.name.toUpperCase()}</h2>
                <img src="${data.sprites.front_shiny}" alt="${data.name}">
            `;
            //Meter el botón de agregar a favoritos
            tarjetaPokemon.innerHTML += `
                <button id="add-favorite-btn">Agregar a la colección</button>
            `;
            //Agregar evento al botón para agregar a favoritos
            //En este le pasaremos los vaolores para poderlos guardar en nuestra pokedex le pasaremos solamente
            //el nombre y el sprite.
            document.getElementById('add-favorite-btn').addEventListener('click', function() {
                agregarAPokemonFavoritos(data.name, data.sprites.front_shiny);
            });
        }
    } catch (error) {
        console.error("Error al buscar el pokemon:");
    }
}

/*Ejercicio 2: Integración con Promesas y Manejo de Errores
    Objetivo: Utilizar el método then/catch de las promesas para manejar la respuesta y errores en la solicitud.
    Modifica la función buscarPokemon para que funcione sin async/await, utilizando then/catch.
    Muestra un mensaje de error si el Pokémon no existe o si la API falla, indicando que el Pokémon no fue encontrado.
*/
/*
function buscarPokemon() {
    let pokemonNombre=document.getElementById('pokemon-input').value.toLowerCase();
    let tarjetaPokemon=document.getElementById('pokemon-data');
    if (!pokemonNombre) {
        alert("Por favor, escribe un nombre");
        return;
    }
    //Usamos fetch con then/catch para manejar la respuesta y errores
    //el then es para si cuando se hace el fetch la respuesta es correcta pues muenstro el pokemon
    //y con el catch es para el error

    fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonNombre).then(function(respuesta) {
        if(!respuesta.ok) {
            alert("No se ha encontrado el pokemon: " + pokemonNombre);
        } else {
            return respuesta.json();
        }
        //then
    }).then(function(datosPokemon) {
        //Muenstro la tarjeta de pokemon
        tarjetaPokemon.innerHTML =`
            <h2>ID: ${datosPokemon.id}</h2>
            <h2>${datosPokemon.name.toUpperCase()}</h2>
            <img src="${datosPokemon.sprites.front_default}" alt="${datosPokemon.name}">
        `;
        //catch
    }).catch(function(error) {
        console.error("Error al buscar el pokemon:", error);
    });
}
*/

/**
Ejercicio 3: Búsqueda de Pokémon con jQuery AJAX
    Objetivo: Usar jQuery para realizar una consulta AJAX y actualizar el DOM con la respuesta.
    Crear la función buscarPokemonJQueryAJAX para realizar la búsqueda de Pokémon.
 */

/* function buscarPokemonJQueryAJAX(){
    let pokemonNombre=document.getElementById('pokemon-input').value.toLowerCase();
    let tarjetaPokemon=document.getElementById('pokemon-data');
    if (!pokemonNombre) {
        alert("Por favor, escribe un nombre");
        return;
    }
    $.ajax({
        //en ajax debemos poner la url, el metodo, y las funciones de exito y error
        //esto eslo similar al fetch
        url: "https://pokeapi.co/api/v2/pokemon/" + pokemonNombre,
        method: "GET",//aqui el get es por que queremos obtener datos
        //cuando ponemos success es cuando la respuesta es correcta
        success: function(datosPokemon) {
            //Muenstro la tarjeta de pokemon
            tarjetaPokemon.innerHTML =`
                <h2>ID: ${datosPokemon.id}</h2>
                <h2>${datosPokemon.name.toUpperCase()}</h2>
                <img src="${datosPokemon.sprites.front_default}" alt="${datosPokemon.name}">
            `;
        },
        //si no es correcta la respuesta pasa por aqui
        error: function() {
            alert("No se ha encontrado el pokemon: " + pokemonNombre);
        }
    });
}
//esto estaba comentado pero segun sirve para hacer que el boton funcione con jquery
//pero como ya lo tengo con addEventListener no hace falta a si q lo podemos comentar
$(document).ready(function(){
    $('#search-btn').on('click', buscarPokemonJQueryAJAX);
});  */

/*Ejercicio 4: Crear una lista de Pokémon capturados
Objetivo: Permitir al usuario agregar Pokémon a su “colección” y practicar el uso de promesas y asincronía.
Agrega un botón "Agregar a la colección" en el resultado de cada Pokémon.
Cuando el usuario haga clic en "Agregar a la colección", guarda el nombre y el sprite en una lista (por ejemplo, un array en el código).
Permite al usuario ver los Pokémon en su colección al hacer clic en un botón “Ver colección” que muestre los Pokémon capturados en una sección especial de la página.
*/
//arrey de pokes fav
let pokemonFavoritos=[];

function agregarAPokemonFavoritos(nombre, sprite) {
    pokemonFavoritos.push(
        {
            nombre: nombre, 
            sprite: sprite
        }
    );
    alert(nombre + " ha sido agregado a tu colección.");
}

function verColeccionPokemon() {
    let seccionColeccion=document.getElementById('collection-list');
    seccionColeccion.innerHTML='';
    if (pokemonFavoritos.length==0) {
        seccionColeccion.innerHTML='<p>No tienes Pokémon en tu colección.</p>';
    } else {
        pokemonFavoritos.forEach(function(pokemon) {
            seccionColeccion.innerHTML += `
                <div class="pokemon-card">
                    <h2>${pokemon.nombre.toUpperCase()}</h2>
                    <img src="${pokemon.sprite}" alt="${pokemon.nombre}">
                </div>
            `;
        });
    }
}
/*Ejercicio 5: Ejercicio 5: Filtrar Pokémon por Tipo con Promesas (OPCIONAL)
Objetivo: Usar Promise.all para manejar múltiples solicitudes y filtrar Pokémon por tipos.*/
function filtrarPokemon() {
    let resultado=document.getElementById('pokemon-data');
    let tipo=document.getElementById('pokemon-input2').value.toLowerCase();
    //si no escribe nada le saco un alert
    if (!tipo){
        alert("Por favor, escribe un tipo de pokemon");
        return;
    }
    //Realizo el fetch
    fetch(`https://pokeapi.co/api/v2/type/${tipo}`)
        .then(res => {//aqui compruebo si la respuesta es correcta
            //Si falla muenstro un mensaje diciendo que el pokemon no se encontro
            if (!res.ok){
                alert("No se ha encontrado el tipo de pokemon: " + tipo);
                return;
            }
            //si esta todo bien devuelvo el json
            return res.json();
        })
        .then(datos => {//Si es correcta cojo los datos
            //voy a limitar la lista a los primeros 10 pokemons y uso Promise.all para hacer fetch de cada uno
            let listaLimitada = datos.pokemon.slice(0, 10);
            let promesas = listaLimitada.map(p => 
                fetch(p.pokemon.url).then(res => res.json())
            );
            return Promise.all(promesas);
        })
        .then(pokemons => {//Si todo fue bien los muentro en el htmllet
            pokemons.forEach(pokemon => {
                resultado.innerHTML += `
                    <div class="pokemon-card">
                        <h2>${pokemon.name.toUpperCase()}</h2>
                        <img src="${pokemon.sprites.front_shiny}" alt="${pokemon.name}">
                    </div>
                `;
            });
        })//si falla muentro erro por consola
        .catch(error => {
            console.error("Error al filtrar pokemons por tipo:", error);
        });
}

//los add de los botones
document.getElementById('search-btn').addEventListener('click', buscarPokemon);
document.getElementById('view-collection-btn').addEventListener('click', verColeccionPokemon);
document.getElementById('search-btn2').addEventListener('click', filtrarPokemon);
