var felipe = {
    nombre: 'Felipe',
    apellido: 'Vazquez',
    edad: 28
}
var yolo = {
    nombre: 'Yolo',
    apellido: 'Jimenez',
    edad: 28
}

function imprimirNombreEnMayusculas({ nombre }) {
   // var nombre = persona.nombre.toUpperCase()
    var {nombre} = persona.toUpperCase()
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(felipe)
imprimirNombreEnMayusculas(yolo)
//imprimirNombreEnMayusculas({ apellido: 'Pepito' })
