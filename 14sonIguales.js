// Definí una función sonIguales(a, b) que reciba como 
// argumentos dos arrays a y b y devuelva si ambos arrays tienen 
// los mismos valores en la misma posición.

const sonIguales = (arrayA,arrayB) =>{
for (let i = 0; i < arrayA.length; i++) {
    if (arrayA[i] !== arrayB[i])  return false
}
return true
}

console.log(sonIguales([10, 25, 6, 33, 48, 105], [10, 25, 6, 33, 48, 105]))
// true
console.log(sonIguales([19, 25, 6, 33, 48, 105], [11, 25, 6, 33, 48, 105]))
// false
console.log(sonIguales([10, 25, 6, 33, 48, 105], [25, 10, 6, 33, 48, 105]))
// false