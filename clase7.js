var felipe = {
    nombre: 'Felipe',
    apellido: 'Vazquez',
    edad: 28
}
var yolo = {
    nombre: 'Yolo',
    apellido: 'Jimenez',
    edad: 27
}

function imprimirNombreEnMayusculas({ nombre }) {
   // var nombre = persona.nombre.toUpperCase()
    var {nombre} = persona.toUpperCase()
    console.log(nombre.toUpperCase())
}

//imprimirNombreEnMayusculas(felipe)
//imprimirNombreEnMayusculas(yolo)
//imprimirNombreEnMayusculas({ apellido: 'Pepito' })

function imprimirNombreYEdad({nombre ,edad}){
// funcion para imprimir nombre y edad
//Hola me llamo Felipe y tengo 28 años
//Hola me llamo Yolo y tengo 27 años
    console.log(`Hola me llamo ${nombre} y tengo ${edad} años` )

}

imprimirNombreYEdad(felipe)
imprimirNombreYEdad(yolo)
