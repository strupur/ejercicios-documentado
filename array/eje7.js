function esVocal(letra) {
    // Convertimos la letra a minúscula para evitar diferencias entre mayúsculas y minúsculas
    const letraMinuscula = letra.toLowerCase();

    // Definimos un array con las vocales
    const vocales = ['a', 'e', 'i', 'o', 'u'];

    // Verificamos si la letra está en el array de vocales
    return vocales.includes(letraMinuscula);
}

// Ejemplos de uso
console.log(esVocal('A')); // true
console.log(esVocal('z')); // false
console.log(esVocal('e')); // true
console.log(esVocal('U')); // true
console.log(esVocal('b')); // false
