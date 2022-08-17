let botonComenzar = document.querySelector("#btnComenzar");
let numeroMagico = 0;
let formulario = document.querySelector("#formJuego");
botonComenzar.addEventListener("click", comenzarJuego);
formulario.addEventListener("submit", adivinarNumeroMagico);

function comenzarJuego(){
    numeroMagico = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    console.log(numeroMagico);
}

function adivinarNumeroMagico(e){
    e.preventDefault();
    let numeroIngresado = document.querySelector("input").value;

    if(numeroIngresado === numeroMagico){
        alert("ganaste");
    }
    else if(numeroIngresado > numeroMagico){
        alert("el numero es menor");
    }else if(numeroIngresado < numeroMagico){
        alert("el numero es mayor");
    }
}