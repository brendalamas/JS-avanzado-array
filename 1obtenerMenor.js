// Definí una función obtenerMenor que tome por 
// parámetro un array de números numeros y devuelva 
// el menor de ellos. Ejemplo:
const obtenerMenor = (numerosCortos) =>{
    let numeroMenor = numerosCortos[0]
    for (let i = 0; i<numerosCortos.length; i++) {
        if(numeroMenor>numerosCortos[i]){
            numeroMenor = numerosCortos [i]
        }
    }
     return numeroMenor
}
console.log(obtenerMenor(5, 7, 99, 34, 54, 2, 12))
// 2


const alumnas  = ["Cande", "Gaby", "Caro" ]
const alumnas2  = ["Cande", "Gaby", "Caro"]

// const compararArrays = (array1, array2) => {
//     let sonIguales = false
//     for (let i = 0; i < array1.length; i++) {
//     console.log(array1[i], array2[i])
//     array1[i] === array2[i]
//   }
//   return sonIguales

// }

// console.log(compararArrays(alumnas, alumnas2))
