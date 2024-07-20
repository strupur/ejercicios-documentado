let numeros = +prompt('ingrese un numero')

resultado = '';

for (let i = numeros; i >= 1; i--) {
    resultado += `${i},`; // esta linea es lo mismo que esto: (resultado =  resultado + `${i},`;) es una manera de concatenar
}

resultado = resultado.slice(0,-1);

console.log(`${resultado}.`);

// Se trata de que dado un número entero el script muestre una cuenta atrás, es decir, una lista de numeros separados por comas desde el número tecleado hasta el 0.
// Si tecle o número 5 deberá mostarar 5,4,3,2,1.