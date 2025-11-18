console.log('Fetch API');
const btn = document.getElementById('btnFetchCharacters');
const div = document.getElementById('characters');
const btnTxt = document.getElementById('btnTxt');

btn.addEventListener('click', () => {
    //console.log("fetch API");
    fetch('https://rickandmortyapi.com/api/character')                      //indicamos url que queremos consultar
    .then((response) => response.json())                                    //respuesta con response y la tratamos como un json
     .then((data) => rendersCharacters(data.results));   
                         //la data la mostramos por consola.
});


function rendersCharacters(characters){
    characters.forEach(element => {
        div.innerHTML += `<img src="${element.image}">`
    });
}

btnTxt.addEventListener('click', () => {
    fetch('empleados2DAW.txt')                      
    .then((response) => response.text())                                    
    .then((data) => console.log(data));                       
});
