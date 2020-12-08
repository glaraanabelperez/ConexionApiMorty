const buscarImagenes=async()=>{
    let input=document.querySelector("#buscador").value;
    if(input===''){
        mostrarError("msj-error", "FALTA RECIBIR VALOR");
        return;
    }
    const key="18467844-755bb86481e5df0833ad9f142";
    const url=`https://pixabay.com/api/?key=${key}&q=${input}`;
    console.log(url);
    //verificar esto
    const resta=await fetch(url);
}

/*var API_KEY = '18467844-755bb86481e5df0833ad9f142';
var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent('red roses');
$.getJSON(URL, function(data){
if (parseInt(data.totalHits) > 0)
    $.each(data.hits, function(i, hit){ console.log(hit.pageURL); });
else
    console.log('No hits');
});*/

const mostrarError=(elemento, mensaje)=>{
    divError=document.querySelector(elemento);
    divError.innerHTML='<p class="alert alert-primary">${mensaje}</p>';
    setTimeout(()=>{divError.innerHTML='';},2000);
}