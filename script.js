function encriptar (){
    var texto = document.querySelector("#inputTexto").value;
    var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector(".textInputSalida").value = textoCifrado;
    document.querySelector("#inputTexto").value;
}

var boton1 = document.querySelector("#btnEncriptar");
boton1.onclick = encriptar;

function desencriptar (){
    var texto = document.querySelector("#inputTexto").value;
    var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.querySelector(".textInputSalida").value = textoCifrado;
    document.querySelector("#inputTexto").value;
}

var boton2 = document.querySelector("#btnDesencriptar");
boton2.onclick = desencriptar;