let textoDeEntrada = document.querySelector("#input");
let textoDeSalida = document.querySelector("#output");


let botonEncriptar = document.querySelector(".botonEncriptar");
let botonDesencriptar = document.querySelector(".botonDesencriptar");
let botonInterior = document.querySelector(".botonInterior")


document.querySelector(".botonInterior").style.display = "none";

botonEncriptar.addEventListener("click", function () {
  let textoRecibido = textoDeEntrada.value;
  textoRecibido = textoRecibido.toLowerCase();
  textoRecibido = textoRecibido.replace(/e/g, "enter");
  textoRecibido = textoRecibido.replace(/i/g, "imes");
  textoRecibido = textoRecibido.replace(/a/g, "ai");
  textoRecibido = textoRecibido.replace(/o/g, "ober");
  resultado = textoRecibido.replace(/u/g, "ufat");

  textoDeSalida.value = resultado;
  textoDeEntrada.value = "";
  document.querySelector(".botonInterior").style.display = "initial";
  document.querySelector(".hiddenText").style.display = "none";
  document.querySelector("#noEncontrado").style.display = "none";
  
});

botonDesencriptar.addEventListener("click",function(){
    let textoRecibido = textoDeEntrada.value;
    textoRecibido = textoRecibido.toLowerCase();
    textoRecibido = textoRecibido.replace(/enter/g, "e");
    textoRecibido = textoRecibido.replace(/imes/g, "i");
    textoRecibido = textoRecibido.replace(/ai/g, "a");
    textoRecibido = textoRecibido.replace(/ober/g, "o");
    resultado = textoRecibido.replace(/ufat/g, "u");
  
    textoDeSalida.value = resultado;
    textoDeEntrada.value = "";
    document.querySelector(".botonInterior").style.display = "initial";
    document.querySelector(".hiddenText").style.display = "none";
    document.querySelector("#noEncontrado").style.display = "none";
})

botonInterior.addEventListener("click", function(){
   let copy = textoDeSalida.value
   navigator.clipboard.writeText(copy);
})