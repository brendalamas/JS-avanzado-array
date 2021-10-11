// Definí una función filtrarPorLongitud que tome por parámetro 
// un número longitud y un array de strings palabras y que devuelva 
// un array con las palabras que tengan una cantidad de letras mayor 
// a longitud. Ejemplo:

const filtrarPorLongitud = (longitud, palabras)=>{
    let cantidadDeLetras = []
    for (let i = 0; i < palabras.length; i++) {
        if (palabras[i].length > longitud) {
            cantidadDeLetras.push(palabras[i])
        }
    }
    return cantidadDeLetras

}

console.log(filtrarPorLongitudMayorA(4,['dia','remolacha',
'azul','sorpresa','te','verde',]))
['remolacha', 'sorpresa', 'verde']