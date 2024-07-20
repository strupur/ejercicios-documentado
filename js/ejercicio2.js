function factorial(num) {

    let multiplicar = 1;
    let resultado = ""

    for (let index = num; index >= 1; index--) {
        multiplicar = multiplicar * index;
        resultado = resultado + `${index}*`;
    }
    
    console.log(`el factorial de ${resultado.slice(0, -1)} es ${multiplicar}`);
    
    return multiplicar;
    
}

console.log(factorial(3));

// Diseña una función que calcule el factorial de un número, usa una función recursiva (que se llama a si misma). Recuerda que el factorial de un número es el resultado de multiplicar cada número por el anterior hasta llegar a 1. Y el factorail de 0 es por definición 1
// Si escribo factorial(3) obtendré 3*2*1 = 6,