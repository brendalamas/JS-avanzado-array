// Definí una función contiene que reciba como argumentos 
// un número numero y un array de números numeros y 
// devuelva si el número se encuentra en dicho array.

const contiene =(numero, arrayNumeros)=>{
    for (let i = 0; i<arrayNumeros.length; i++) {
        if(numero === arrayNumeros [i]){
            return true
        }
    }
    return false
}
console.log(contiene(54, [5, 7, 99, 3, 4, 54, 2, 12]))
true
console.log(contiene(103, [5, 7, 99, 3, 4, 54, 2, 12]))
false