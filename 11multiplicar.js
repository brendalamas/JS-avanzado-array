// Definí una función multiplicar que reciba como argumentos 
// un número multiplicador y un array de números numeros, y que 
// devuelva un array donde cada elemento es el resultado del elemento 
// del primer array (en la misma posición) multiplicado por el número 
// ingresado. Ejemplo:

const multiplicar = (multiplicador, numeros)=>{
    let resultadoFinal = []
    for (let i = 0; i < numeros.length; i++) {
        resultadoFinal.push(multiplicador * numeros[i])
    }
    return resultadoFinal
}

console.log(multiplicar(2, [5, 7, 15, 22, 40]))
[10, 14, 30, 44, 80]
console.log(multiplicar(10, [2, 5, 77]))
[20, 50, 770]