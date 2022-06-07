// https://docs.google.com/presentation/d/1Vkg4sT6S5IWw2xknQnZ9Iv8H_xe-dMNY/edit#slide=id.g115980d9f22_0_146
// https://docs.google.com/presentation/d/1V1vprFAQSvQgQ0RFRY-dfmjx6Tm_7lGW/edit#slide=id.p1

// VARIABLES
let nombre = "Jesus"
let apellido = "Fernandez"
let edad = 29
let pais = "Mexico"

// console.log(nombre)

nombre = 'Juan'

// console.log(nombre)

// CONSTANTES
const PI = 3.1416
const IVA = 0.16
const VELOCIDAD_LUZ = 300000
const GRAVEDAD_TIERRA = 9.8

// console.log(PI)

// PI = 3.14 // Error


// TIPOS DE DATOS
let nick_name = "Hola"
let mes = 10
let activo = true
let indefinido
let nulo = null


// COERCION DE DATOS
let modelo = 2022
// console.log(typeof (modelo))
modelo = "2022"
// console.log(typeof (modelo))


// OPERADORES ARITMETICOS
let numero1 = 10
let numero2 = 20

let suma = numero1 + numero2
let resta = numero1 - numero2
let multiplicacion = numero1 * numero2
let division = numero1 / numero2
let modulo = numero1 % numero2

// console.log({
//     suma,
//     resta,
//     multiplicacion,
//     division,
//     modulo
// })

// OPERADORES LOGICOS
let igual = numero1 == numero2
let diferente = numero1 != numero2
let mayor = numero1 > numero2
let menor = numero1 < numero2
let mayorIgual = numero1 >= numero2
let menorIgual = numero1 <= numero2

// console.log({
//     igual,
//     diferente,
//     mayor,
//     menor,
//     mayorIgual,
//     menorIgual
// })


// CONDICIONALES
if (numero1 > numero2) {
    // console.log("El numero 1 es mayor que el numero 2")
} else {
    // console.log("El numero 2 es mayor que el numero 1")
}

switch (numero1) {
    case 1:
        // console.log("El numero 1 es 1")
        break;
    case 2:
        // console.log("El numero 1 es 2")
        break;
    default:
        // console.log("El numero 1 no es ni 1 ni 2")
        break;
}

// BUCLES
for (let i = 0; i < 10; i++) {
    // console.log(i)
}

while (numero1 < 10) {
    // console.log(numero1)
    numero1++
}

// FUNCIONES
function sumar(numero1, numero2) {
    return numero1 + numero2
}

// console.log(sumar(numero1, numero2))

let sumar2 = function (numero1, numero2) {
    return numero1 + numero2
}

// console.log(sumar2(numero1, numero2))

const sumar3 = (numero1, numero2) => {
    return numero1 + numero2
}

// console.log(sumar3(numero1, numero2))

(function () {
    // console.log("Hola")
})()


// funcion para imprimir los primeros numeros pares 
const pares = (numero) => {

    for (let i = 1; i <= numero; i++) {
        if (i % 2 == 0) {
            console.log(i)
        }
    }
}

pares(6)



// ARREGLOS
let arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
