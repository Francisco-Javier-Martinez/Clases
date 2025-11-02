const producto ={
    id:101,
    nombre:"Teclado mecanico",
    precio:59.99,
    disponible:true,
    categorias: ["prerifericos","oficina"],
    detalles:{
        marca:"logiTech",
        garantia:"2 años"
    }
}

const textoProdu =JSON.stringify(producto);
console.log(textoProdu);

localStorage.setItem("producto",textoProdu);

const produ= localStorage.getItem("producto");
const nuevo=JSON.parse(produ);

console.log("Producto recuperado: " + nuevo.nombre);
console.log("Precio: " + nuevo.precio);
console.log("Marca: " + nuevo.detalles.marca+ " Garantia: "+nuevo.detalles.garantia);

console.log(typeof(producto));
console.log(typeof(textoProdu));
