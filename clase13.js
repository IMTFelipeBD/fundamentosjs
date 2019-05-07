var felipe = {
    nombre: 'Felipe',
    apellido: 'Vazquez',
    edad: 27,
    peso: 100
}

console.log(`Al inicio del año ${felipe.nombre} pesa ${felipe.peso} kg`)

const INCREMENTO_PESO = 0.200
const diasDelAnio = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO

for (var i = 1; i <= 365; i++ ){
    var random = Math.round(Math.random()) /*El número Random está entre 0 y 1*/
    if (random < 0.25 ){
        //Aumenta de peso
        aumentarDePeso(felipe)
    }
    
    else if (random < 0.5){
        //Disminuye de peso
        adelgazar(felipe)
    }
}

console.log(`Al final del año ${felipe.nombre} pesa ${felipe.peso.toFixed(1)} kg`)
