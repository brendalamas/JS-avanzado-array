// Definí una función sumar que reciba como argumento 
// un array de números numeros y devuelva la suma de 
// ellos. Ejemplo:

const sumar = (numeros)=>{
    let acc = 0
    for (let i = 0; i<numeros.length; i++) {
        acc = acc + numeros[i]
    }
    return acc
}

console.log(sumar([5, 7, 10, 12, 24]))
58