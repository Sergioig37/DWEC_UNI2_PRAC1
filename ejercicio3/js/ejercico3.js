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

        var quinielita = new Array(quiniela.length);
    
        for (let i = 0; i < quiniela.length; i++) {
            quinielita[i] = new Array(quiniela.length);
            for (let j = 0; j < quiniela.length; j++) {
                if (i === j) {
                    quinielita[i][j] = "-";
                } else {
                    quinielita[i][j] = generarSimbolo();
                }
            }
        }
    
        console.table(quinielita);
    
}

function quinielas(EQUIPOS){

    do{
        var eleccion = prompt("Elige que vas a hacer" +"\n"+ "1: Generar quinielas" +"\n"+"2: Ver equipos" +"\n" +"3: Salir del programa");
        switch(eleccion){
            case("1"): 
                generarResultados(quiniela);
                break;
            case("2"): 
                muestraEquipos(EQUIPOS);
                break;
        }
    }
    while(eleccion!="3");

}

quinielas(EQUIPOS);
