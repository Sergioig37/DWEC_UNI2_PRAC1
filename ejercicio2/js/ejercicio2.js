function pedirNumero(){

    var cantidadNumeros = prompt("Cuántos décimos quieres generar ? ");
    if(esEntero(cantidadNumeros)!=true&&esPositivo(cantidadNumeros)!=true){
        while(esEntero(cantidadNumeros)!=true&&esPositivo(cantidadNumeros)!=true){
            cantidadNumeros = prompt("Número no válido, prueba otra vez");
        }
    }
    return cantidadNumeros;
}

function comprobarGanador(numeros, min, max){

    var encontrado = false;

    while(encontrado!=true){
        var numero = generarAleatorio(min, max);
        for(var i=0; i<numeros.length;i++){
            if(numeros[i]==numero){
                encontrado = true;
                break;
            }
        }
    }
    console.log("Número encontrado, enhorabuena"+numeros[i]);

}

function esEntero(cadena) {

    var esEntero = true;

    if (parseInt(cadena)) {
        return esEntero;
    }
    else {
        esEntero = false;
        return esEntero;
    }
}

function esPositivo(numero) {

    var esPositivo = true;

    if (numero > 0) {
        return esPositivo;
    }
    else {
        esPositivo = false;
        return esPositivo;
    }
}


function generarAleatorio(min, max){

    var numeroGanador = Math.round(Math.random()*(max - min + 1)+min);

    return numeroGanador;

}

function generarNAleatorios(cantidad, min, max){

    var decimos = [];

    for(var i=0; i<cantidad;i++){
        decimos.push(generarAleatorio(max, min));
    }

    return decimos;
}


comprobarGanador(generarNAleatorios(pedirNumero(), 0, 9), 0, 9);