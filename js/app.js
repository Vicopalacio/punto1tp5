let botonComenzar = document.querySelector("#btnComenzar");
let numeroMagico = 0;
let formulario = document.querySelector("#formJuego");
let btnAdivinar = document.getElementById("btnAdivinar");
botonComenzar.addEventListener("click", comenzarJuego);
formulario.addEventListener("submit", adivinarNumeroMagico);

btnAdivinar.disabled = true;

function comenzarJuego(){
    numeroMagico = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    console.log(numeroMagico);
    btnAdivinar.disabled = false;
    botonComenzar.disabled = true;
}

function adivinarNumeroMagico(e){
    e.preventDefault();
    let numeroIngresado = parseInt(document.querySelector("input").value);

    if(numeroIngresado === numeroMagico){
        alert("ganaste");
        formulario.reset();
        btnAdivinar.disabled = true;
        botonComenzar.disabled = false;
    }
    else if(numeroIngresado > numeroMagico){
        alert("el numero es menor");
        formulario.reset();
    }else if(numeroIngresado < numeroMagico){
        alert("el numero es mayor");
        formulario.reset();
    }
}