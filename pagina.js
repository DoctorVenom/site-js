let button1 = document.querySelector(".button1");
let catalogo = document.querySelector(".catalogo");
let catalogoAberto = false;


button1.onclick = function(){
    if(catalogoAberto){
        catalogo.style.transform = "translateX(-106%)";
        catalogoAberto = false;
    }else{
        catalogo.style.transform = "translateX(0%)";
        catalogoAberto = true;
    }
}

