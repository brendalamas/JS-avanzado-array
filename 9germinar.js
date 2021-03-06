// DefinΓ­ una funciΓ³n germinar que tome por parΓ‘metro 
// un string de plantines con flores y plantines (π±). 
// El array debe comenzar con una flor. La funciΓ³n debe 
// devolver un string con los plantines convertidos en flores. 
// El plantΓ­n se debe convertir en la primera flor que 
// encuentre a su izquierda. Ejemplo:
const germinar = (plantines)=>{
    let planta = "π±"
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

console.log(germinar('π·π±π»π±πΈπ±π·π±π»π±πΈπ±'))
// 'π·π·π»π»πΈπΈπ·π·π»π»πΈπΈ'
// "113344113344"

console.log(germinar('π·π±π±π±π»π±π±πΈπ±π±π±π±'))
// 'π·π·π·π·π»π»π»πΈπΈπΈπΈπΈ'

//console.log(germinar('342132211222'))
// 'π»πΈπΈπ·π»π»π»π·π·π·π·π·'