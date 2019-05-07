var felipe = {
    nombre: 'Felipe',
    apellido: 'Vazquez',
    edad: 27,
    peso: 100
}

console.log(`Al inicio del año ${felipe.nombre} pesa ${felipe.peso} kg`)

const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANIO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random < 0.4

const META = felipe.peso - 3
var dias = 0 


while(felipe.peso > META){

    if(comeMucho()){
        //aumentarDePeso
        aumentarDePeso(felipe)
    }
    if(realizaDeporte){
        //aumentarDePeso
        adelgazar(felipe)
    }
    dias += 1
}

/*El número Random está entre 0 y 1*/
/*
for (var i = 1; i <= DIAS_DEL_ANIO; i++ ){
    var random = Math.round(Math.random()) 
    if (random < 0.25 ){
        //Aumenta de peso
        aumentarDePeso(felipe)
    }
    
    else if (random < 0.5){
        //Disminuye de peso
        adelgazar(felipe)
    }
}
*/
console.log(`Pasaron ${dias} hasta que ${felipe.nombre} adelgazo 3 kg`)
