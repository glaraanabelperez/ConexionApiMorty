const listadoImg=document.querySelector("#listImagenes");
//KER MARVEL da670a4e672828d1946716ee1fedbc71;
// DIRECCION MARVEL https://gateway.marvel.com:443/v1/public/characters?orderBy=name&limit=10&apikey=

const input=document.querySelector("#buscador");
console.log(input.value);
async function buscarImagenes(){
   // const key="18467844-755bb86481e5df0833ad9f142";
    //const url=`https://pixabay.com/api/?key=${key}&q=${input.value}&per_page=10`;
    const url=`https://thesimpsonsquoteapi.glitch.me/quotes?count=${input.value}`;
    //const url=`https://gateway.marvel.com:443/v1/public/characters?orderBy=name&limit=10&apikey=18467844-755bb86481e5df0833ad9f142`;
    const data=await fetch(url);
    //console.log(data);
    const response=await data.json();
    console.log(response);
    const lista=response;
    console.log(lista);
    lista.forEach(element => {
        let div=document.createElement("div");
        div.innerHTML=`
        <h1>${element.character}</h1> 
        <img  src=${element.image}></img>
        </a>
        `
        let button = document.createElement("button");
        button.innerText="Usar imagen";
        button.addEventListener("click", function(){
            console.log(element);
        });

        div.appendChild(button);
        listadoImg.appendChild(div);

    });
}


