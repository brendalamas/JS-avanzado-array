// Definí una función germinar que tome por parámetro 
// un string de plantines con flores y plantines (🌱). 
// El array debe comenzar con una flor. La función debe 
// devolver un string con los plantines convertidos en flores. 
// El plantín se debe convertir en la primera flor que 
// encuentre a su izquierda. Ejemplo:
const germinar = (plantines)=>{
    let planta = "🌱"
    let arrayPlantinesConvertidos = []
    for (let i = 0; i < plantines.length; i++) {
        if (plantines [i] === planta) {
            arrayPlantinesConvertidos.push(plantines[i-1])
        }
        if(plantines[i] !== planta){
            arrayPlantinesConvertidos.push (plantines[i])
        }
    }
    return arrayPlantinesConvertidos.join("")
}

console.log(germinar('🌷🌱🌻🌱🌸🌱🌷🌱🌻🌱🌸🌱'))
// '🌷🌷🌻🌻🌸🌸🌷🌷🌻🌻🌸🌸'
// "113344113344"

console.log(germinar('🌷🌱🌱🌱🌻🌱🌱🌸🌱🌱🌱🌱'))
// '🌷🌷🌷🌷🌻🌻🌻🌸🌸🌸🌸🌸'

//console.log(germinar('342132211222'))
// '🌻🌸🌸🌷🌻🌻🌻🌷🌷🌷🌷🌷'