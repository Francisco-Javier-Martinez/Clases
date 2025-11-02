/**********************************************************************************************
 *          Tenemos un arrayMisiones, en el cual guardamos los siguientes datos:
 * 
 * 
 *  - nombre         --> hace referencia al nombre de la misión
 *  - nave           --> hace referencia a la nave utilizada en  la misión
 *  - astronautas    --> hace referencia a todos los astronautas que han participado en la misión
 *  - planetaDestino --> hace refencia al planeta destino de la misión
 * 
 **********************************************************************************************/

const arrayMisiones = [
    {
        nombre: "Misión 1",
        nave: {
            nombre: "Nave 1",
            modelo: "Modelo A",
            combustible: 100
        },
        astronautas: [
            { nombre: "Astro 1", edad: 43, pais: "España" },
            { nombre: "Astro 2", edad: 33, pais: "España" },
            { nombre: "Astro 3", edad: 53, pais: "Portugal" }
        ],
        planetaDestino: "Marte"
    },
    {
        nombre: "Misión 2",
        nave: {
            nombre: "Nave 2",
            modelo: "Modelo B",
            combustible: 80
        },
        astronautas: [
            { nombre: "Astro 4", edad: 39, pais: "México" },
            { nombre: "Astro 2", edad: 33, pais: "España" }, 
            { nombre: "Astro 5", edad: 45, pais: "Argentina" }
        ],
        planetaDestino: "Júpiter"
    },
    {
        nombre: "Misión 3",
        nave: {
            nombre: "Nave 3",
            modelo: "Modelo A",
            combustible: 120
        },
        astronautas: [
            { nombre: "Astro 1", edad: 43, pais: "España" }, 
            { nombre: "Astro 6", edad: 50, pais: "Chile" }
        ],
        planetaDestino: "Saturno"
    },
    {
        nombre: "Misión 4",
        nave: {
            nombre: "Nave 4",
            modelo: "Modelo C",
            combustible: 60
        },
        astronautas: [
            { nombre: "Astro 7", edad: 29, pais: "Colombia" },
            { nombre: "Astro 5", edad: 45, pais: "Argentina" } 
        ],
        planetaDestino: "Marte"
    },
    {
        nombre: "Misión 5",
        nave: {
            nombre: "Nave 5",
            modelo: "Modelo B",
            combustible: 90
        },
        astronautas: [
            { nombre: "Astro 8", edad: 38, pais: "Perú" },
            { nombre: "Astro 3", edad: 53, pais: "Portugal" } 
        ],
        planetaDestino: "Venus"
    }
];

let astroSamu = arrayMisiones.reduce((acc, misi) => {
    misi.astronautas.forEach(astro => {
        if (astro.edad<40 && !acc.includes(astro.nombre)) {
            acc.push(astro.nombre);
        }
    });
    return acc;
}, []);

console.log(astroSamu);

function ejer7(){
    astro=[];
    arrayMisiones.forEach(element => {
        element.astronautas.forEach(elementA => {
            if(elementA.edad<=40){
                astro.push({
                astro:elementA.nombre
            });
            }
        });
    });
    let astroRepe= astro.map(nom=>nom.astro).flat();

    let astroNorepe = [... new Set(astroRepe)];
    console.log(astroNorepe);
}
ejer7();