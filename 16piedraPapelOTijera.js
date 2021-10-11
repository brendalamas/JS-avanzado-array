// Definí una función jugarPiedraPapelTijeras que reciba como 
// argumentos dos strings jugadoraA y jugadoraB con los nombres 
// de cada jugadora respectivamente, y dos arrays de strings 
// jugadasA y jugadasB con jugadas de Piedra, Papel o Tijera, 
// de la misma longitud. La función debe devolver un string con 
// el nombre de la ganadora o Empate en caso de que no haya ninguna. 
// Para eso, debe comparar las mismas posiciones de cada array de 
// jugadas, y sumar puntos a la jugadora correspondiente. Por ejemplo:

const jugarPiedraPapelTijeras = (jugadoraA, jugadoraB, jugadasA, jugadasB)=>{
    let ganadoraA = 0
    let ganadoraB= 0
    let empate = 0
    for (let i = 0; i < jugadasA.length; i++) {
        if (jugadasA[i] !== jugadasB[i]) {
            if (jugadasA[i] === "piedra" && jugadasB[i] === "tijera"||
            jugadasA[i] === "papel" && jugadasB[i] === "piedra" ||
            jugadasA[i] === "tijera" && jugadasB[i] === "papel") {
                ganadoraA ++
            }
            else if(jugadasA[i] === "piedra" && jugadasB[i] === "papel"||
            jugadasA[i] === "papel" && jugadasB[i] === "tijera" ||
            jugadasA[i] === "tijera" && jugadasB[i] === "piedra"){
               ganadoraB++
            }
        }else if(jugadasA[i] === jugadasB[i]){
            empate ++ 
        }     
    }
    if(ganadoraA > ganadoraB){
        return jugadoraA
    } else if(empate > ganadoraA || empate > ganadoraB){
        return "Empate"
    }else if (ganadoraA < ganadoraB){
        return jugadoraB
    }
}


// const jugadasA = ['piedra', 'piedra', 'tijera']
// const jugadasB = ['papel', 'tijera', 'tijera']

// jugadasA[0] vs. jugadasB[0] -> Gana B
// jugadasA[1] vs. jugadasB[1] -> Gana A
// jugadasA[2] vs. jugadasB[2] -> Empate

// Resultado final: Empate
console.log(jugarPiedraPapelTijeras('Ada', 'Grace', ['tijera'], ['piedra']))
// Grace
console.log(jugarPiedraPapelTijeras('Ada', 'Grace', ['papel'], ['papel']))
// Empate
console.log(jugarPiedraPapelTijeras(
  'Ada','Grace',
  ['piedra', 'papel', 'papel', 'piedra', 'tijera'],
  ['papel', 'piedra', 'tijera', 'tijera', 'papel']
))
// Ada