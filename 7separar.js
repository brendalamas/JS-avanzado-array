// Definí una función separar que tome por 
// parámetro un string con emojis de perros y 
// gatos y devuelva un string con los perros agrupados 
// por un lado y los gatos por otro.

const separar = (string)=>{
    let perro="🐶"
    let gato= "🐱"
    let perrosYGatos = []
    for (let i = 0; i < string.length; i++) {
    if(string[i] === gato){
      perrosYGatos.push(string[i])
    }
    if(string[i]=== perro){
      perrosYGatos.unshift(string[i])
    }
   }
    return perrosYGatos
}
  
console.log(separar('🐶🐱🐶🐱🐱🐶🐶'))
// '🐶🐶🐶🐶🐱🐱🐱'

