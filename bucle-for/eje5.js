let numero = parseInt(prompt("Ingresa un número"));

let resultado = '';

for (let i = 0; i < numero; i++) {
    if (i % 3 === 2) {

        resultado += `${i},`;
    }
}

console.log(`${resultado.slice(0, -1)}.`);

// En este ejercicio mezclamos bucles con condicionales: el usuario escribe un número y el script imprimirá (console.log) todos los números menores que al dividirlos por 3 den como resto 2.

// Recuerda: un número es múltiplo de N cuando el dividirlo por N el resto es 0.

// Por ejemplo si tecleas el 14, obtendré la lista 2, 5, 8 y 11