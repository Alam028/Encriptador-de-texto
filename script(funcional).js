function encriptar(){
    var frase = document.getElementById("textoEncriptado").value.toLowerCase();

    var textoEncriptado = frase.replace(/e/img,"enter");
    var textoEncriptado = textoEncriptado.replace(/o/img, "ober");
    var textoEncriptado = textoEncriptado.replace(/i/img, "imes");
    var textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    var textoEncriptado = textoEncriptado.replace(/u/img, "ufat");

    
    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
    document.getElementById("botonCopiar").style.display = "show";
    document.getElementById("botonCopiar").style.display = "inherit";

}

function desencriptar(){
    var frase = document.getElementById("textoEncriptado").value.toLowerCase();

    var textoEncriptado = frase.replace(/enter/,"e");
    var textoEncriptado = textoEncriptado.replace(/ober/, "o");
    var textoEncriptado = textoEncriptado.replace(/imes/, "i");
    var textoEncriptado = textoEncriptado.replace(/ai/, "a");
    var textoEncriptado = textoEncriptado.replace(/ufat/, "u");

    document.getElementById("imgDer").style.display = "none";
    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
    document.getElementById("copiar").style.display = "show";

    
}
function copiar(){
    var contenido = document.querySelector("#textoDesencriptado");
    contenido.select();
    document.execCommand("copy")
    alert("¡Se copió!");
}