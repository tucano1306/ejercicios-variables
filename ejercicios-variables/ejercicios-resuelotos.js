// 1. Declarar dos variables sin inicializarlas.
let myEmail;
let secondEmail;

// 2. Asignar tu correo a la primer variable.
myEmail = "tucano0109@gmail.com";

// 3. Inicializar la segunda variable con el valor de la primera variable.
secondEmail = myEmail;

// 4. ¿Qué valor tiene la segunda variable?
console.log(secondEmail); // Salida: "tucano0109@gmail.com"

/*1.

  ¿Cuál es el resultado de las siguientes expresiones? 
*/
// const a = 1
// a = 2
// console.log(a)
// Respuesta: En JavaScript, las variables declaradas con const no se pueden reasignar después de ser inicializadas.
// Por lo tanto, la línea console.log(a) nunca se ejecutará porque el programa se detendrá en la línea de la reasignación inválida (a = 2).

// 2.

// let b = 1
// b = 2
// console.log(b)
// Respuesta: 2  Explico= let permite declarar variables cuyo valor puede cambiar a lo largo del programa.
// En este caso, b se declara inicialmente con el valor 1. Luego se le asigna un nuevo valor 2.
// Finalmente, cuando se ejecuta console.log(b), se imprime 2 en la consola.

// 3.

// console.log(c)
// var c
// Respuesta:undefined
// Explico: elevación (hoisting) 

// 4.

// let age
// let age = 25
// Respuesta: Incorrecto
// Explico: Esto generará un SyntaxError porque let no permite la redeclaración de variables en el mismo contexto.

// 5.

// const 3users = 3
// Respuesta:Incorrecto
// Explico: No pueden comenzar con un número  , este caso ' 3users'

// 6.

// const email
// email = 'alejandra@email.com'
// Respuesta:Incorrecto
// Explico: Cuando declaras una variable con const, debes inicializarla al mismo tiempo

// 7.

// var userName
// var userName = 'Alejandra'
// Respuesta:Correcto
// Explico: JavaScript, var permite declarar una variable varias veces dentro del mismo contexto

// 8.

// let my User Name = 'RositaFresita'
// Respuesta: Incorrecto
// Explico: Los nombres de variables no pueden contener espacios.

// 9.

// let $students = ['Pedro', 'Betty', 'Vilma', 'Pablo']
// Respuesta: Correcto
// Explico: Sigue las reglas de nomenclatura permitidas en JavaScript.

// 10.

// let numbers1 = 123456
// Respuesta: Correcto

// 11.

// const var = 'string'
// Respuesta: Incorrecto
// Explico: No se puede usar una palabra reservada como nombre de variable 

// 12.

// CONST my_variable = 'Constante'
// Respuesta: Incorrecto
// Explico : Las palabras clave como const distinguen entre mayúsculas y minúsculas

// 13.

// let is_student = true
// Respuesta: Corecto

// 14.

/*
  ¿Cuál es la diferencia entre var, let y const?
*/
// var => Ámbito: Función o global.
// Reasignación: Permitida.
// Redefinición: Permitida.
// Hoisting: Sí, con valor undefined.
// Uso actual: No recomendado.

// let => Ámbito: Bloque.
// Reasignación: Permitida.
// Redefinición: No permitida.
// Hoisting: Sí, pero no se puede usar antes de la declaración.
// Uso: Para variables que cambian.

// const => Ámbito: Bloque.
// Reasignación: No permitida.
// Redefinición: No permitida.
// Hoisting: Sí, pero no se puede usar antes de la declaración.
// Uso: Para valores que no cambian.
