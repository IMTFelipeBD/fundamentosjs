//Definir un objeto

var felipe = {
    nombre: 'Felipe',
    apellido: 'Vazquez',
    edad: 27,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone: true
}

var juan = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 13   
}


function imrpimirProfesiones(persona) {
    console.log(`${persona.nombre} es: `)
    if (persona.ingeniero) {
        console.log('Ingeniero')
    }
    if (persona.cocinero) {
        console.log('Cocinero')
    }
    if (persona.cantante) {
        console.log('Cantante')
    }
    if (persona.dj) {
        console.log('Dj')
    }
    if (persona.guitarrita) {
        console.log('Guitarrista')
    }
    if (persona.Drone) {
        console.log('Piloto de Drones')
    }
}

const MAYORIA_DE_EDAD = 18

function esMayorDeEdad(persona){
    return persona.edad >= MAYORIA_DE_EDAD
}

function imprimirSiEsMayorDeEdad(persona) {
    //felipe es mayor de edad
    //felipe es menor de edad
    if (esMayorDeEdad(persona)) {
        console.log(`El joven ${persona.nombre} tiene ${persona.edad} por lo tanto es:`)
        console.log('Mayor de edad')
    }
    else {
        console.log(`El joven ${persona.nombre} tiene ${persona.edad} por lo tanto es:`)
        console.log(`Es menor de Edad`)
    }
}

//imprimirSiEsMayorDeEdad(felipe)
//imprimirSiEsMayorDeEdad(juan)
