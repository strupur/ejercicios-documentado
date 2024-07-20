let num1 = parseInt(prompt("Ingresa el primer número entero:"));
let num2 = parseInt(prompt("Ingresa el segundo número entero:"));

let mensaje = num1 <= num2 ?  "es mayor el segundo" : "es mayor el primero";

console.log(`${mensaje}`);



// El usuario debe introducir dos valores numéricos por teclado y la aplicación deberá indicar cual es el mayor, el primero o el segundo.
// La idea es usar las sentencias if reducidas (cond ? ture:false)
// Si el usuario entra 2 y luego 4, debe decir que el mayor es el segundo número.

// https://www.aulascript.com/evaluar/condicionales_2.htm