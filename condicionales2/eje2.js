let num1 = parseInt(prompt("Ingresa el primer número entero:"));
let num2 = parseInt(prompt("Ingresa el primer número entero:"));

let cuadrado = num1 * num1;

if (num2 === cuadrado) {
    console.log("El resultado es correcto");
} else {
    console.log("El resultado es incorrecto");
}

// <==== version condicional if mas corto ====>

// let num1 = parseInt(prompt("Ingresa el primer número entero:"));
// let num2 = parseInt(prompt("Ingresa el segundo número entero:"));

// let cuadrado = num1 * num1;

// console.log(num2 === cuadrado ? "El resultado es correcto" : "El resultado es incorrecto")

// El usuario debe entrar un número y su cuadrado. Si es correcto el script enviará un mensja ede acierto en caso contrario dirá que se produjo un error.

// Se trata de usar el if resumido (cond?true:false)

// Por ejemplo si teclea 3 y 9 el resutlado es Correcto. Si tecleo 3 8, el resultado será Error.