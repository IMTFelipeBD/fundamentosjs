var nombre = prompt("Escribe tu nombre"), apellido = 'Vazquez'

var nombreEnMayusculas = nombre.toUpperCase()
var apellidoEnMinisculas = apellido.toLowerCase()

var primerLetraDelNombre = nombre.charAt(0)
var cantidadDeLetrasDelNombre = nombre.length

var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`

var str = nombre.substr((nombre.length)-1)