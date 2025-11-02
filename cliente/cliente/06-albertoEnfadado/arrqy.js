let mazanitas= ["Manzanote","Mazanita"];
mazanitas.push("Manzanacas");


console.log(mazanitas);

// Eliminar el primer elemento del array
mazanitas.shift();
console.log(mazanitas);

// Agregar un elemento al inicio del array
mazanitas.unshift("La mega manzana");
console.log(mazanitas);

//slice =  a cortar un array

let numero = [1,2,3,4,5,6,7,8];
let nuevo= numero.slice(0,3);

console.log(nuevo);

//splice  primero indice a que empieza segundos indices a borra partiendo del primero tercero inyecta el numero apartir de la posicion del primero
let numeracosChulos = [1,2,3,4,5];
numeracosChulos.splice(1,2);
numeracosChulos.splice(1,0,99);

console.log(numeracosChulos);

//filter
let pare = [1,2,3,4].filter(x=>x%2==0);
console.log(pare);

//map
let dobles=[1,2,3].map(x=>x*2);
console.log(dobles);

//reduce
let suma=[1,2,3,4].reduce((acc,val)=>acc+val,0);
console.log(suma);

//reverse
let nombre=[1,2,3,4,5,6,2];
nombre.reverse();
console.log(nombre);
//sort
nombre.sort((a,b)=>a-b);
console.log(nombre);

//Desructuracion
let [a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20
let nums = [1,2,3];
let copia = [...nums];
let combinado = [...nums, 4, 5];
console.log(nums, copia, combinado);

//cositas
Array.isArray([1,2]); // true
Array.from("hola"); // ["h","o","l","a"]
[1,2,3].fill(0); // [0,0,0]

//Multidimensional
let matriz = [
[1, 2],
[3, 4],
];
console.log(matriz[1][0]); // 3


//inmutabilidad
let original = [1, 2, 3];
original = original.map(x => x * 2);
console.log(original);

//Ejmemplo chulo
let numeros = [1, 2, 3, 4, 5];
let resultado = numeros
.filter(n => n % 2 === 0)
.map(n => n * 10)
.reduce((a,b) => a + b, 0);
console.log(resultado); // 60

const price = [2,8,15,16,23,42];
console.log(price);

/*
price.forEach((price,i,arr)=>{
    arr[i]=price * 0.5
})
*/
const nuevoPrecios=price.map(price=>price*0.5);
console.log("Precios originales "+price+" Precios mutados: "+nuevoPrecios);


const productor = [
    {name: "lapto", price:234, color:"white"},
    {name: "waza", price:150, color:"blue"}
]

const afoordableProductos = productor.filter(productor=> productor.price<200);
console.log(afoordableProductos);

const preciosGuay = [2,3,35,2,4,5,2];

const totalPrecio = preciosGuay.reduce((totall,precioInicial)=>{
    return totall+precioInicial;
},0);

console.log(totalPrecio);

