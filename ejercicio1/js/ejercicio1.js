
function pedirFrase(){
    
    
    do{
        var frase = prompt("Escribe la palabra o frase a la que quieras dar la vuelta"+"\n" +"Escribe ESC o esc para salir del prograna ");
        if(frase!=="esc"&&frase!=="ESC"){
            console.log(frase);
            girarPalabras(separarPalabras(frase, " "));
        }
    }
    while(frase!=="esc"&&frase!=="ESC")
}


function separarPalabras(frase, separador){
    
    let cadena = "";
    var palabras = [];
    var letras = []
     palabras=frase.split(separador);

     for(var i=0;i<palabras.length;i++){
         cadena = palabras[i];
        for(var j=cadena.length-1;j>=0;j--){
            if(j==0){
                letras.push(cadena.charAt(j));
                letras.push(" ");
            }else{
                letras.push(cadena.charAt(j));
            } 
        }
    }
    return letras

}

function girarPalabras(arrayNormal){

   var textoInverso = "";
   textoInverso += arrayNormal.join("");
    console.log(textoInverso);

}


pedirFrase();