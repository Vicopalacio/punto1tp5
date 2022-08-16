let botonComenzar = document.querySelector("#btnComenzar");
let formulario = document.querySelector("#formJuego")
let numeroMagico = 0;
//agregar eventos desde javascript
//botonComenzar.addEventListener("click", ()=>{comenzarJuego(variable)}); en el caso que tenga parametros mi funcion
botonComenzar.addEventListener("click", comenzarJuego);
formulario.addEventListener("submit", adivinarNumero);

function comenzarJuego(){
 numeroMagico = Math.floor(Math.random() * (10 - 1 + 1) + 1);
 console.log(numeroMagico);
}

function adivinarNumero(e){
    e.preventDefault();
    // console.log("desde la funcion adivinar numero");
    let numeroIngresado = document.querySelector("input").value;
    console.log(numeroIngresado);
}