// let botonComenzar = document.querySelector("#btnComenzar");
// let formulario = document.querySelector("#formJuego")
// let numeroMagico = 0;
// //agregar eventos desde javascript
// //botonComenzar.addEventListener("click", ()=>{comenzarJuego(variable)}); en el caso que tenga parametros mi funcion
// botonComenzar.addEventListener("click", comenzarJuego);
// formulario.addEventListener("submit", adivinarNumero);

// function comenzarJuego(){
//  numeroMagico = Math.floor(Math.random() * (10 - 1 + 1) + 1);
//  console.log(numeroMagico);
// }

// function adivinarNumero(e){
//     e.preventDefault();
//     console.log("desde la funcion adivinar numero");
//     let numeroIngresado = document.querySelector("input").value;
//     console.log(numeroIngresado);
//     if(numeroIngresado = numeroMagico){
//         alert("ganaste")
//     }
//     if(numeroIngresado > numeroMagico){
//         alert("mm.. casi")
//     }
//     if(numeroIngresado < numeroMagico){
//         alert("mm.. sigue intentando")
//     }
// }

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