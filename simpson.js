const listadoImg=document.querySelector("#listImagenes");
const listNom=document.querySelector("#listNom");

//KER MARVEL da670a4e672828d1946716ee1fedbc71;
// DIRECCION MARVEL https://gateway.marvel.com:443/v1/public/characters?orderBy=name&limit=10&apikey=

const input=document.querySelector("#buscador");
async function buscarImagenes(){
    const url=`https://thesimpsonsquoteapi.glitch.me/quotes?count=50`;
    //const url=`https://gateway.marvel.com:443/v1/public/characters?orderBy=name&limit=10&apikey=18467844-755bb86481e5df0833ad9f142`;
    const data=await fetch(url);
    const response=await data.json();
    console.log(response);
    const lista=response;

    let titulo=document.createElement("div");
        titulo.innerHTML=`
        <p>En esta busqueda tiene los siguientes presonajes disponibles:</p>
        `
        listadoImg.appendChild(titulo);

    lista.forEach(element=>{
        let div2=document.createElement("div");
        div2.innerHTML=`
        <li>${element.character}</li>
        `
        listNom.appendChild(div2);

        var a = (element.character).toString();
        var separa = a.split(" ");
        var a= separa[0] ;
        var b = (input.value).toString();
        console.log( "variable a: ", a);
        console.log("variable b: ", b);
        const encontrado=false;
        
        if(a==b && encontrado==false){
            console.log("si!!");
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
            this.encontrado=true;
        }
    })
}


