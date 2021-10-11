// Definí una función obtenerResultado que tome por parámetros dos 
// strings jugadoraA y jugadoraB con los nombres de cada jugadora 
// respectivamente, y dos arrays de numeros puntajesA y puntajesB 
// de la misma longitud. La función debe devolver un string con el 
// nombre de la ganadora o Empate en caso de que no haya ninguna. 
// Para eso, debe comparar las mismas posiciones de cada array de 
// puntajes, y sumar puntos a la jugadora correspondiente dependiendo 
// de quien tenga el puntaje más alto. Por ejemplo:

const obtenerResultado = (jugadoraA, jugadoraB, puntajesA, puntajesB)=>{
    let contadorA = 0
    let contadorB = 0
    for (let i = 0; i < puntajesA.length; i++) {
        if (puntajesA[i] !== puntajesB[i]) {
            contadorA += puntajesA[i]
            contadorB += puntajesB[i]
            if (contadorA>contadorB) {
                return jugadoraA
            }else{
                return jugadoraB
            }
        }
        if (contadorA === contadorB) {
            console.log("Empate") 
        }

    }

}

// const puntajesA = [3, 5, 2]
// const puntajesB = [4, 6, 2]

// puntajesA[0] vs. puntajesB[0] -> Gana B
// puntajesA[1] vs. puntajesB[1] -> Gana B
// puntajesA[2] vs. puntajesB[2] -> Empate

// Resultado final: Gana Jugadora B
console.log(obtenerResultado('Ada', 'Grace', [4, 4, 4], [1, 2, 3]))
// Ada
console.log(obtenerResultado('Ada', 'Grace', [3, 5, 5, 7], [4, 1, 2, 9]))
// Empate
console.log(obtenerResultado('Ada', 'Grace', [5, 6, 3, 1, 8], [8, 2, 4, 2, 3]))
// Grace