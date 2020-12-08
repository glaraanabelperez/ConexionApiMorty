const listadoImg=document.querySelector("#listImagenes");
const input=document.querySelector("#buscador");
console.log(input.value);
async function buscarImagenes(){
   // const key="18467844-755bb86481e5df0833ad9f142";
    //const url=`https://pixabay.com/api/?key=${key}&q=${input.value}&per_page=10`;
    const url=`https://thesimpsonsquoteapi.glitch.me/quotes?count=${input.value}`;
    const data=await fetch(url);
    //console.log(data);
    const response=await data.json();
    console.log(response);
    const lista=response;
    console.log(response);
    lista.forEach(element => {
        let div=document.createElement("div");
        div.innerHTML=`
        <h1>${elemnt.character}</h1> 
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


