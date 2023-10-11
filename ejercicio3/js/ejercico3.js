const SIMBOLOS = ["1", "X", "2"]

const EQUIPOS = ["Alavés", "Atl Madrid", "Villareal", "Barcelona", "Real Madrid", "Getafe", "Espanyol", "Málaga", "Sevilla", "Levante", "Valencia", "Betis", "Celta", "Atl Bilbao", "Real Sociedad", "Rayo Vallecano", "Osasuna", "Mallorca", "Cádiz", "Granada"];


function generarSimbolo() {

    return SIMBOLOS[Math.random(2 - 0 + 1) + 0];

}

function muestraEquipos(EQUIPOS) {

    var tablaEquipos = new Array(EQUIPOS.length);

    for (var i = 0; i < tablaEquipos.length; i++) {

        tablaEquipos[i] = EQUIPOS[i];
        
    }

    

    console.table(tablaEquipos);

}


muestraEquipos(EQUIPOS);