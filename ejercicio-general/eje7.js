// Pide al usuario que ingrese un número de dos dígitos
let numero = prompt("Por favor, ingresa un número de dos dígitos:");

// Asegura que el input es un número entero
numero = parseInt(numero);

// Verifica que el número está en el rango permitido (10-99)
if (numero >= 10 && numero <= 99) {
  // Calcula el número de decenas y unidades
  let decenas = Math.floor(numero / 10);
  let unidades = numero % 10;

  // Muestra los resultados
  console.log(`El número de decenas es: ${decenas}`);
  console.log(`El número de unidades es: ${unidades}`);
} else {
  console.log("Por favor, ingresa un número válido de dos dígitos.");
}

/*En este script debes pedir al usuario un número de dos dígitos y debes devolver el número de unidades y de decenas, o sea, cada dígito del número. Usa solo operationes aritméticas

Recuerda si divides un número entre 10 el cociente entero es el número de decenas y el resto es el número de unidades

Si ese teclea el número 45

Unidades: 5

Decenas: 4*/

//https://www.aulascript.com/evaluar/ejercicios_basicos_1.htm