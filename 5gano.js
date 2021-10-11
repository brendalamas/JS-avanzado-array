
// Definí una función gano que reciba como argumento un 
// array tragamonedas  con 5 símbolos y nos indique si son 
// iguales. Si el array tiene más de 5 símbolos, sólo debe 
// comparar los 5 primeros.

const gano = (tragamonedas)=>{
    let contador = 0
    for (let i = 0; i < tragamonedas.length; i++) {
        if (tragamonedas[0] !== tragamonedas [i]) {
            return false
        }
        contador ++
        if (contador === 5) {
            return true
        }
    }
}

console.log(gano(['⭐', '⭐️', '⭐️', '💫', '✨']))
// false
console.log(gano(['💫', '💫', '💫', '💫', '💫']))
// true
console.log(gano(['💫', '💫', '💫', '💫', '💫', '⭐️'])) 
// true
