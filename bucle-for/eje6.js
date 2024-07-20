let numero = +prompt("Ingrese un numero");
let consonante = "x";

let resultado = ""

for (let i = 1; i <= numero; i++) {
    resultado += `${consonante}\n`
}

console.log(resultado);

// Este script el usuario deberá teclear una letra y un número, y el programa mostrará una cadena formada por la letra repetida el número que haya tecleado.
// Si el usuario teclea x y 5 el script mostrará xxxxx. O sea una cadena de 5 letras x