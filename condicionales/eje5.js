let num1 = parseInt(prompt(" ingrese un numero"));
let num2 = parseInt(prompt(" ingrese un numero"));
let resta = num2 - num1;

if(isNaN(num1 || num2)) {
    console.log("Por favor, ingrese un número válido.");
} else if (num1 > num2) {
    console.log(`Este numero no se puede restar`);
} else if (num1 < num2) {
    console.log(`El resultado es ${ resta } ( ${num2} - ${num1} )`);
} ;

// En este ejemplo el usuario tecleará dos números. Debe devvolver la diferencia entre el mayor y el menor
// Si el usuario entre el 5 y el 8, el programa devolverá 3 (8 - 5)

//https://www.aulascript.com/evaluar/condicionales_1.htm