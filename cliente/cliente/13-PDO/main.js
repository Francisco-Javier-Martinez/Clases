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

let button = document.querySelector('button');
/* button.addEventListener('click',function(){
    alert("BOTON PULSADO");
});  */

function showMessage(message){
    alert(message);
}

button.addEventListener(
    "click",
    showMessage.bind(null, "Botón pulsado, mensaje desde función showMessage")
);

let input = document.querySelector('#itemInput');
let addButton = document.querySelector('#addButton');
let list = document.querySelector('#dynamicList');

addButton.addEventListener('click', function(){
    if(input.value.trim() !== ""){
        let newItem = document.createElement('li');
        newItem.textContent = input.value;
        list.appendChild(newItem);
        input.value = "";
    }
});

let filterInput = document.querySelector('#filterInput');
const itemList = document.querySelector('.list');

filterInput.addEventListener("keyup", function(){
    const tern = filterInput.value.toLowerCase();
    const items = itemList.getElementsByTagName("li");

    Array.from(items).forEach(function(item){
    if(item.textContent.toLowerCase().indexOf(tern)!=-1){
        item.style.display = "block";
    }else{
        item.style.display = "none";
    }
    });
});

// Drag and Drop
let draggable = document.getElementById('draggable');
let dropzone = document.getElementById('dropzone');

draggable.addEventListener('dragstart', function(event){
    setTimeout(()=>{this.style.display='none';},0);
});

dropzone.addEventListener('dragover', function(event){
    event.preventDefault();
});

dropzone.addEventListener('drop', function(event){
    draggable.style.display = 'block';
    dropzone.appendChild(draggable);
});