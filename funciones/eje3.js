const esMultiplo = (num1, num2) => {
    if (num1 % num2 == 0) {
        console.log(`${true} por que ${num1} es multiplo de ${num2}`);  
    } else {
        console.log(`${false} por que ${num1} no es multiplo de ${num2}`);
    }
}

esMultiplo(13,4); // se imprimira igual aun que no tengo el console.log que el if no esta con return

// Función que calcule si un número es múltiplo de otro. La función recibirá dos argumentos, el primero será el supuesto mutiplo del segundo argumento.
// Si ejecuto o llamo a la función con esMultiplo(40,4) debe devolver true porque 40 es divisible por 4. Si ejecutas esMultiplo(23,4) dará false.
