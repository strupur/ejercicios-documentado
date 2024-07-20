const limiteDelCiclo = +prompt('ingrese un numero')

let resultado = '';

for (let i = 0; i <= limiteDelCiclo; i++) {
    resultado += `${i},`; // esta linea es lo mismo que esto: (resultado =  resultado + `${i},`;) es una manera de concatenar
}

resultado = resultado.slice(0, -1);

console.log(resultado)

// Usando un bucle for escribir un script que pida un valor entero y muestre en pantalla una lista de números desde el 0 al valor tecleado. Los números se separarán por comas.  
// Si el usuario entra por teclado el número 5 el script devolverá la secuencia  0, 1, 2, 3, 4, 5  

// https://www.aulascript.com/evaluar/bucles_for.htm
