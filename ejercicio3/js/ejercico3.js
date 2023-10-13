const SIMBOLOS = ["1", "X", "2"];
const quiniela = [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "," ", " ", " ", " ", " ", " ", " ", " ", " ", " "];

const EQUIPOS = ["Alavés", "Atl Madrid", "Villareal", "Barcelona", "Real Madrid", "Getafe", "Espanyol", "Málaga", "Sevilla", "Levante", "Valencia", "Betis", "Celta", "Atl Bilbao", "Real Sociedad", "Rayo Vallecano", "Osasuna", "Mallorca", "Cádiz", "Granada"];


function generarSimbolo() {

    var simbolo =  SIMBOLOS[Math.floor(Math.random() * 3)];

    return simbolo;

}

function muestraEquipos(EQUIPOS) {

    var tablaEquipos = new Array(EQUIPOS.length);
    for (var i = 0; i < EQUIPOS.length; i++) {
        
        tablaEquipos[i] = "Equipo " + (i+1) + " : " +EQUIPOS[i];
    }
    console.table(tablaEquipos);
}


function generarResultados( quiniela){

    
        for (let i = 0; i < quiniela.length; i++) {
            quiniela[i] = new Array(quiniela.length);
            for (let j = 0; j < quiniela.length; j++) {
                if (i === j) {
                    quiniela[i][j] = "-";
                } else {
                    quiniela[i][j] = generarSimbolo();
                }
            }
        }
    
        console.table(quiniela);
    
}

function quinielas(EQUIPOS){

    do{
        var eleccion = prompt("Elige que vas a hacer" +"\n"+ "1: Generar quinielas" +"\n"+"2: Ver equipos" +"\n" +"3: Consultar resultados de un partido" +"\n"+ "4: Terminar programa");
        switch(eleccion){
            case("1"): 
                generarResultados(quiniela);
                break;
            case("2"): 
                muestraEquipos(EQUIPOS);
                break;
            case("3"):
                muestraDatos(EQUIPOS, quiniela);
                break;
        }
    }
    while(eleccion!="4");

}




function muestraDatos(EQUIPOS, quiniela){
    do{
        var equipo1 = prompt("Introduce el equipo local: ");
         equipo1 = repetirPregunta(equipo1);
        var equipo2 = prompt("Introduce el equipo visitante");
         equipo2 = repetirPregunta(equipo2);
        console.log("El resultado de "+equipo1+ " contra " +equipo2 + " es " +quiniela[EQUIPOS.indexOf(equipo1)][EQUIPOS.indexOf(equipo2)]);
        var eleccion = prompt("¿Desea realizaer una nueva consulta?"+"\n"+"SI"+"\n"+"NO");
    }
    while(eleccion!="NO");
}

function repetirPregunta(equipo){
    if(comprobarExiste(equipo)==false){
        while(comprobarExiste(equipo)==false){
            equipo = prompt("El equipo no existe, prueba otra vez");
        }
    }
   return equipo;
}


function comprobarExiste(equipo){

    var existeEquipo = false;

    for(var i=0;i<EQUIPOS.length;i++){
        if(equipo==EQUIPOS[i]){
            existeEquipo = true;
            break;
        }
    }
    return existeEquipo;
}





quinielas(EQUIPOS);
