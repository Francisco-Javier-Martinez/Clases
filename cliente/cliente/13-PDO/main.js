let titulo = document.getElementById('title');

console.log(titulo);

let mainDiv = document.querySelector('.main-div');

console.log(mainDiv);

let lista = document.querySelectorAll('.item-list');

console.log(lista);

titulo.textContent = "Titulo nuevo";

titulo.innerHTML = "<p> Titulo con innerHTML </p>";

let img = document.querySelector('#imagenEjemplo');

img.setAttribute('src','kirby.png');

mainDiv.style.backgroundColor = "lightblue";

let oldDiv = document.querySelector('.old-div');
document.body.removeChild(oldDiv);

let nuevoDiv = document.createElement('div');
nuevoDiv.innerText="Este es un div creado con JavaScript";
document.body.appendChild(nuevoDiv);

///////////////////////////////////////////////////////////

/* let button = document.querySelector('button');
button.addEventListener('click',function(){
    alert("BOTON PULSADO");
}); */

function showMessage(message){
    alert(message);
}

button.addEventListener(
    "click",
    showMessage.bind(null, "Botón pulsado, mensaje desde función showMessage")