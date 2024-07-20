let num1 = parseInt(prompt("Inserte un número para definir la base, segun el tipo de medidas se dira que tipo de figura geometrica es"));

let num2 = parseInt(prompt("Inserte un número para definir la altura, segun el tipo de medidas se dira que tipo de figura geometrica es"));

const FiguraGeometrica = (num1 === num2) ? "Es un Cuadrado " :
                         (num1 > num2) ? "Es un Rectangulo Horizontal" : "Es un Rectangulo Vertical";
                 
console.log(`${FiguraGeometrica}`);

// En este ejercicio el usuario entra la longitud de la base y el alto de un cuadrado. Si la base y el alto son idénticos la respuesta será "Es un cuadrado", si la base es mayor que el alto dira "Rectángulo horizontal" y en caso contrario dirá "Rectángulo vertical".
// Si entro base es 10, alto es 5. Resultado rectángulo