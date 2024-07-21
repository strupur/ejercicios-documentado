function existeEn(letra, array) {
    return array.includes(letra);
}

// Ejemplo de uso:
console.log(existeEn('a', ['w', 'e', 'r', 'i'])); // Devolverá false
console.log(existeEn('e', ['w', 'e', 'r', 'i'])); // Devolverá true

// Escribe una función que determina si la letra que se le pasa como argumento se encuentra contenida dentro de un array de letras que se le pasa como segundo argumento.

// Se trata de resolverlo sin usar métodos del objeto array, solo el dato tipo array.

// existeEn('a', ['w','e','r','i']) devolverá false porque la letra 'a' no existe en el array