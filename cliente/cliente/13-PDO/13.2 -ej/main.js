//EJER 1
let titulo = document.querySelector("#titulo");
let botonActivar = document.querySelector("#Bactivar");

botonActivar.addEventListener("click",function(){
    titulo.innerHTML="Estado: ¡ACTIVO! ";
    titulo.style.color = "green";
});

//EJER 2
let divCaja = document.querySelector(".caja-apagada");

let botonEncender = document.querySelector("#Bencender");

botonEncender.addEventListener("click", function(){
    if(divCaja.classList.contains('caja-apagada')){
        divCaja.classList.remove('caja-apagada');
        divCaja.classList.add('caja-encendida');
    }else{
        divCaja.classList.remove('caja-encendida');
        divCaja.classList.add('caja-apagada');
    }

});

//EJER 3
let aria = document.querySelector("#area");
let parrafo = document.querySelector("#parrafo");

aria.addEventListener("keyup",function(){
    parrafo.innerHTML= aria.value.length;
});

//EJER 4
let enlace = document.querySelector("#enlaceGoogle");
enlace.addEventListener("click", function(event){
    event.preventDefault();
    alert("¡Navegación bloqueada por Javascript!");
});

//EJER 5
let cuadrado = document.querySelector("#cuadrado");
cuadrado.addEventListener("mouseover", function(){
    cuadrado.style.backgroundColor = "red";
});
cuadrado.addEventListener("mouseout", function(){
    cuadrado.style.backgroundColor = "blue";
});

//EJER 6
let abuelo = document.querySelector("#abuelo");
let padre = document.querySelector("#padre");
let hijo = document.querySelector("#hijo");
hijo.addEventListener("click", function(){
    console.log("Clic en el hijo");
});
padre.addEventListener("click", function(event){
    console.log("Clic en el padre");
    event.stopPropagation();
});
abuelo.addEventListener("click", function(){
    console.log("Clic en el abuelo");
});