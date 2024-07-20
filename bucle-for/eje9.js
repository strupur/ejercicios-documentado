let userInput = parseInt(prompt("Ingrese un número entero positivo:"));

if (isNaN(userInput) || userInput < 0) {
    console.log("Por favor ingrese un número entero positivo válido.");
} else {
    let suma = 0;
    let resultado = "";

    
    for (let i = 1; i <= userInput; i++) {
        suma = suma + i;
        resultado = resultado + `${i}+`;
    }

   
    console.log(`Los números enteros de 0 a ${userInput} suman ${suma} (${resultado.slice(0, -1)})`);
}

// let resultado = ""

// for (let i = 1; i <= 5; i++) {
//     resultado = resultado + `${i}+`
// }

// console.log(`${resultado.slice(0,-1)} `);



// Se trata de crear una aplicación que calcule la suma de todos los números enteros positivos entre 0 y el número tecleado por el usuario. El resultado será de la forma "Los números enteros de 0 a n  suman suma"
// Si tecleo el 5 obtendré "Los enteros enteros de 0 a 5 suman 15" (1+2+3+4+5 ).