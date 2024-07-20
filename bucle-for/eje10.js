let num1 = +prompt("Ingrese un numero")
let num2 = +prompt("Ingrese un numero")
let num3 = +prompt("Ingrese un numero")
let num4 = +prompt("Ingrese un numero")

let numeros = [num1, num2, num3, num4];

// Calcular la suma de los números
let suma = 0;
for (let i = 0; i < numeros.length; i++) {
    suma = suma + numeros[i];
}

// Calcular la media
let media = suma / numeros.length;

// Mostrar el resultado
console.log(`El número medio es ${media}`);

//  Programa un script que pida al usuario que teclee 4 números (uno cada vez). Con esos números el programa deberá calcular la media aritmética. O sea la suma de los 4 números dividida entre 4
// El progrma pide 4 veces al usuario que telcee un número y este escribe 5,9,10,12. El programa dirá "La media es 9"