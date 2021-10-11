// Definí una función recortar que reciba como argumentos 
// un número cantidadLetras y un array de strings palabras y 
// devuelva un array con las mismas palabras pero recortadas. 
// Las palabras se recortan dejando cantidadLetras letras al iniciando, 
// y recortando las demás. Por ejemplo, elefante recortada a 4 letras queda elef.

const recortar = (cantidadLetras, palabras)=>{
    let nuevoArray = []
    for (let i = 0; i < palabras.length; i++) {
    let palabraCortada = palabras[i].slice(0,cantidadLetras)
    nuevoArray.push(palabraCortada) 
    }
    return nuevoArray
}

console.log(recortar(4, ['elefante', 'dinosaurio', 'chocolate', 'avion', 'america']))
// ['elef', 'dino' 'choc', 'avio', 'amer']
console.log(recortar(1, ['algoritmo', 'bug', 'compilador']))
// ['a', 'b', 'c']