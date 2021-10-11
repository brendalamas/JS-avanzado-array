// Definí una función invertirCaso que tome por 
// parámetro un string string y devuelva un string 
// donde cada letra tiene el caso invertido, es decir, 
// cada letra está mayúscula si estaba en minúscula, y viceversa.


const invertirCaso =(string)=>{
    let resultado = ""
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i)>= "a" && string.charAt(i) <="z") {
            resultado += string.charAt(i).toUpperCase()
        } else if(string.charAt(i)>= "A" && string.charAt(i) <="Z"){
            resultado += string.charAt(i).toLowerCase()
        }
    }
    return resultado
}
console.log(invertirCaso('Ada Lovelace'))
// 'aDA lOVELACE'
console.log(invertirCaso('feliz cumple'))
// 'FELIZ CUMPLE'
console.log(invertirCaso('jAvAsCrIpT'))
// 'JaVaScRiPt'
