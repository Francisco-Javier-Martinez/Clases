//Ej 1
let titulo = document.querySelector("#titulo");
let mensaje = document.querySelector(".mensaje");
let body = document.querySelector("body");

let boton = document.querySelector("#cambiar");
boton.addEventListener("click",function(){
    titulo.innerHTML ="Titulo modificado con DOM";
    mensaje.style.color = "blue";
    body.style.backgroundColor = "lightblue";
});

//Ej 2
let botonMosntarOcultar = document.querySelector("#boton");
let textoOculto = document.querySelector("#texto");

botonMosntarOcultar.addEventListener("click",function(){
    if(botonMosntarOcultar.textContent=="Ocultar"){
        textoOculto.style.display="none";
        botonMosntarOcultar.innerHTML ="Monstrar";
    }else{
        textoOculto.style.display="block";
        botonMosntarOcultar.innerHTML="Ocultar";
    }

});

//Ej 3
let botonAgregar = document.querySelector("#agregar");
let inputTexto = document.querySelector("#entrada");
let lista = document.querySelector("#lista");

botonAgregar.addEventListener("click",function(){
    if(inputTexto.value.trim() !== ""){
        let newItem = document.createElement('li');
        newItem.textContent = inputTexto.value;
        lista.appendChild(newItem);
        inputTexto.value = "";
    }
});

//Ej 4
let contador = document.querySelector("#contador");
let botonSumar = document.querySelector("#sumar");
let botonRestar = document.querySelector("#restar");
let botonResetear = document.querySelector("#reset");

botonSumar.addEventListener("click",function(){
    contador.textContent = parseInt(contador.textContent) + 1;
});
botonRestar.addEventListener("click",function(){
    contador.textContent = parseInt(contador.textContent) - 1;
});
botonResetear.addEventListener("click",function(){
    contador.innerHTML=0;
});

//Ej 5

let botonCrear = document.querySelector("#crear");
let contenedor = document.querySelector("#contenedor");

botonCrear.addEventListener("click",function(){
    let tarjeta = document.createElement("div");
    tarjeta.className="tarjeta";

    let parrafo = document.createElement("p");
    parrafo.textContent="Soy una tarjeta";
    tarjeta.appendChild(parrafo);

    let botonEliminar = document.createElement("button");
    botonEliminar.textContent="Eliminar";
    tarjeta.appendChild(botonEliminar);

    contenedor.appendChild(tarjeta);
    
    botonEliminar.addEventListener("click",function(){
        tarjeta.style.display="none";
    });
});
