// Solicitar al usuario que ingrese las horas
let horas = prompt("Ingrese el número de horas:");

// Solicitar al usuario que ingrese los minutos
let minutos = prompt("Ingrese el número de minutos:");

// Convertir las horas y minutos a segundos
// Nota: 1 hora = 3600 segundos, 1 minuto = 60 segundos
let segundosTotales = (parseInt(horas) * 3600) + (parseInt(minutos) * 60);

// Mostrar el resultado
alert(`El total en segundos es: ${segundosTotales} segundos.`);

/*Cambio de unidades. en este ejercicio debes convertir a segundos una medida de tiempo dada en horas y minutos.

Recuerda una hora son 60 minutos y cada minuto son 60 segundos.*/

//https://www.aulascript.com/evaluar/ejercicios_basicos_1.htm