let varUno = 10;
let varDos = 30;

console.log(`Antes del intercambio: varUno = ${varUno}, varDos = ${varDos}`);

// Usamos una variable temporal para guardar el valor de una de las variables
let temp = varUno;
varUno = varDos;
varDos = temp;

console.log(`Después del intercambio: varUno = ${varUno}, varDos = ${varDos}`);

/*Este ejercicio es todo un clásico si lo haces a la primera y sin tardar mucho, puedes estar seguro: entiendes las variables.

Teiens que escribir un programa que intercambie el valor de dos variables. Al final la primera variable debe terner el valor de la segunda y la segunda el valor de la primera. No vale usar arrays ni asignación múltiple

Antes:

varUno vale 10, varDos vale 30

Al final

varUno vale 30, varDos vale 10

https://www.aulascript.com/evaluar/ejercicios_basicos_1.htm*/