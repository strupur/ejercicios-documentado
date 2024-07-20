function sumaLista(array) {
    let suma = 0; // Inicializa la suma en 0

    // Itera a través del array y suma cada elemento a la variable suma
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }

    return suma; // Devuelve la suma total
}

// Ejemplo de uso
console.log(sumaLista([2, 4, 5, 1, 2])); // Debería devolver 14

// Sin usar métodos del objeto array, diseña una función llamada sumaLista() capaz de sumar todos los números que forman el array que se le pase como argumento.
// Si ejecuto sumaLista([2,4,5,1,2]) deberá devolver como resultado 14