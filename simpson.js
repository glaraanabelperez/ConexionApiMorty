let info;
let cardFinal = '';
const input=document.querySelector("#buscador");
//prueba git
fetch('https://rickandmortyapi.com/api/character')
  .then( response => {
    if(response.status == 200) {
      return response.text();
    } else {
      throw "Respuesta incorrecta del servidor" 
    }
  })
  .then( responseText => {
    let personajes = JSON.parse(responseText).results;
    console.log('Este es el objeto: ', personajes);
    info=personajes;

    for( i=0; i<info.length; i++){
            const lista = document.querySelector('#listaNombres');
            let div=document.createElement("div");
            div.innerHTML=`
            <ul>
                <li class="listaN">
                    <a style="text-decoration:none" onclick="inputName">
                    ${info[i].name}
                    </a>
                </li>
            </ul> 
            `
            lista.appendChild(div);
    }
  })

  .catch( err => {
    console.log(err);
  });
 
function buscarImagenes(){
    let card = '';
    console.log("Datos", info);
    var b = (input.value).toString();

    if(b===""){
        card += '<h5 class="lead">Por favor ingrese nombre completo!</h5>';
    }
    for (var i = 0; i < info.length; i++) {
        
        if( info[i].name.toString() === b ){
            card +='<br>';
            card +='<img class="card-img " src="' +info[i].image+ '">';
            card += '<div class="card-body">';
            card += '<h5 class="card-title">'+ info[i].name +'</h5>';
            card += '<a href="'+info[i].image +'" class="btn btn-primary" target="_blank" >Go!</a>';
            card += '</div>';
            $('#empresas').html(card);
        }
        $('#listImagenes').html(card);
        cardFinal=card;
    }
 }

