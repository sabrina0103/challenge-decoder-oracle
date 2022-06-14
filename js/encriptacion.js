var btn_encriptar = document.querySelector("#btn-encriptar");
btn_encriptar.addEventListener("click", encriptar);

var btn_desencriptar = document.querySelector("#btn-desencriptar");
btn_desencriptar.addEventListener("click", desencriptar);

var btn_copiar = document.querySelector("#btn-copiar");
btn_copiar.addEventListener("click", copiar);


var box_respuestaok = document.querySelector("#box-respuestaok");
box_respuestaok.classList.add("invisible");
var box_respuestavacia = document.querySelector("#box-respuestavacia");

txt_transformado = document.querySelector("#texto-transformado");

function encriptar(){
    
    var txt_entrada = document.querySelector("#entrada");
    var entrada = String(txt_entrada.value);
    if(entrada == ""){
        alert("No hay texto para encriptar");
    }else{
        box_respuestaok.classList.remove("invisible");
        box_respuestavacia.classList.add("invisible");
        txt_transformado.value = null;
        var arremplazar = {"a":"ai","e":"enter","i":"imes","o":"ober","u":"ufat"};    
        entrada =  entrada.replace(/a|e|i|o|u/g,function(letra) {return arremplazar[letra];});
        document.querySelector("#texto-transformado").value = entrada;
        txt_entrada.value = null;
    }

    
}

function desencriptar(){
   
    var txt_entrada = document.querySelector("#entrada");
    var entrada = String(txt_entrada.value);
    if(entrada == ""){
        alert("No hay texto para desencriptar");
    }else{
        box_respuestaok.classList.remove("invisible");
        box_respuestavacia.classList.add("invisible");
        txt_transformado.value = null;
        entrada =  entrada.replace("ai","a");
        entrada =  entrada.replace("enter","e");
        entrada =  entrada.replace("imes","i");
        entrada =  entrada.replace("ober","o");
        entrada =  entrada.replace("ufat","u");
        txt_transformado.value = entrada;
        txt_entrada.value = null;

    }
    
}
//boton copiar

async function copiar(){
   
    if(!navigator.clipboard){
        return;
    }
    var texto_copiar = document.querySelector("#texto-transformado").value;
    if(texto_copiar == ""){
        alert("No hay texto para copiar");
    }else{
        await navigator.clipboard.writeText(texto_copiar);
        alert("El texto fue copiado");
      
    }
    
}