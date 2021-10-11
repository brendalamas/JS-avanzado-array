// Definí una función estanJuntos que reciba como 
// argumento un array de strings personajes, y devuelva 
// si Sam se encuentra al lado de Frodo, puede encontrarse 
// antes o después.

const estanJuntos =(personajes)=>{
    let frodo = "Frodo"
    let sam = "Sam"
      for (let i = 0; i < personajes.length; i++) {
          if (personajes[i] === frodo && personajes[i+1] === sam || personajes[i] === frodo && personajes[i-1] === sam) {
              return true                   
          }
      }
      return false
}
  
  
console.log(estanJuntos(['Sam', 'Frodo', 'Legolas']))
// true
console.log(estanJuntos(['Aragorn', 'Frodo', 'Sam']))
// true
console.log(estanJuntos(['Sam', 'Orco', 'Frodo']))
// false

// const estanJuntos = (personajes) => {
//     for(const personaje in personajes){
      
//       if ((personajes[personaje]==="Sam" && personajes[+personaje+1]==="Frodo")|| (personajes[personaje]==="Sam" && personajes[+personaje -1]==="Frodo")){
//           return true;
//         }
//       }
//     return false;
// }
  