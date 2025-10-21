const peliculas = [
  {
    titulo: "Inception",
    anio: 2010,
    genero: "Ciencia Ficción",
    recaudacion: 480,
    director: {
      nombre: "Christopher Nolan",
      pais: "Reino Unido",
    },
    actores: [
      { nombre: "Leonardo DiCaprio", nacionalidad: "EE.UU.", edad: 48 },
      { nombre: "Joseph Gordon-Levitt", nacionalidad: "EE.UU.", edad: 42 },
      { nombre: "Elliot Page", nacionalidad: "Canadá", edad: 38 },
    ],
  },
  {
    titulo: "Interstellar",
    anio: 2014,
    genero: "Ciencia Ficción",
    recaudacion: 497,
    director: {
      nombre: "Christopher Nolan",
      pais: "Reino Unido",
    },
    actores: [
      { nombre: "Matthew McConaughey", nacionalidad: "EE.UU.", edad: 55 },
      { nombre: "Anne Hathaway", nacionalidad: "EE.UU.", edad: 42 },
      { nombre: "Jessica Chastain", nacionalidad: "EE.UU.", edad: 48 },
    ],
  },
  {
    titulo: "Parasite",
    anio: 2019,
    genero: "Drama",
    recaudacion: 258,
    director: {
      nombre: "Bong Joon-ho",
      pais: "Corea del Sur",
    },
    actores: [
      { nombre: "Song Kang-ho", nacionalidad: "Corea del Sur", edad: 57 },
      { nombre: "Cho Yeo-jeong", nacionalidad: "Corea del Sur", edad: 44 },
      { nombre: "Choi Woo-shik", nacionalidad: "Corea del Sur", edad: 35 },
    ],
  },
  {
    titulo: "Pulp Fiction",
    anio: 1994,
    genero: "Crimen",
    recaudacion: 214,
    director: {
      nombre: "Quentin Tarantino",
      pais: "EE.UU.",
    },
    actores: [
      { nombre: "John Travolta", nacionalidad: "EE.UU.", edad: 70 },
      { nombre: "Uma Thurman", nacionalidad: "EE.UU.", edad: 55 },
      { nombre: "Samuel L. Jackson", nacionalidad: "EE.UU.", edad: 76 },
    ],
  },
  {
    titulo: "Amélie",
    anio: 2001,
    genero: "Comedia",
    recaudacion: 174,
    director: {
      nombre: "Jean-Pierre Jeunet",
      pais: "Francia",
    },
    actores: [
      { nombre: "Audrey Tautou", nacionalidad: "Francia", edad: 48 },
      { nombre: "Mathieu Kassovitz", nacionalidad: "Francia", edad: 57 },
    ],
  },
];


//ejercicio 1
/*Muestra las películas estrenadas después del año 2000 
pero antes o iguales al 2015, agrupadas por género.*/
/* let generos = peliculas.map(peli=>peli.genero);
let geneSinRepe = [... new Set(generos)];
let obj={};
geneSinRepe.forEach(genero=>{
    obj[genero] = [];
    peliculas.forEach(peli=>{
        if(peli.genero===genero && peli.anio>2000 && peli.anio<=2015){
            obj[genero].push(peli.titulo);
        }
    });
});
console.log(obj); */

//Ejercicio 3
/*Ejercicio 3.
 Crea una nueva estructura de datos con todos los actores sin repetir,
  incluyendo su nombre, nacionalidad y edad, y ordénalos por edad descendente.*/

function ej3(){
    arrayActores = [];
    actoresSinRepetir = []

    peliculas.forEach(peli => {
        peli.actores.forEach(actor => {
            arrayActores.push(actor);
        });
    });

    arrayActores.forEach(actor => {
        if(!actoresSinRepetir.includes(actor.nombre)){
            actoresSinRepetir.push(actor)
        }
    });

    console.log(actoresSinRepetir.sort((a,b)=>a.edad - b.edad));
}

ej3();