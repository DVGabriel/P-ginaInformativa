//Script para el nav para cuando se mueva hacia arriba y abajo aparezca y desaparezca

let ubicacionPrincipal = window.pageYOffset;

//inicialización de la libreria AOS animaciones
  AOS.init();
//Finaliza libreria

window.addEventListener("scroll", function(){
    let desplazamientoActual = window.pageYOffset;
    if(ubicacionPrincipal >= desplazamientoActual){
        document.getElementsByTagName("nav")[0].style.top = "0px"

    }else{
        document.getElementsByTagName("nav")[0].style.top = "-100px"
    }

    ubicacionPrincipal = desplazamientoActual;
})


//Menu

let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;

document.querySelectorAll(".lista-despegable")[0].addEventListener("click", function(){

    if(semaforo){
        document.querySelectorAll(".lista-despegable")[0].style.color ="#fff";
        semaforo=false;
    }else{
        document.querySelectorAll(".lista-despegable")[0].style.color ="#000";
        semaforo=true;
    }

    enlacesHeader.classList.toggle("menudos")

})