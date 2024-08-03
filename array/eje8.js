function listar(array) {
    // La función join() une todos los elementos de un array en una cadena,
    // y puedes especificar un separador como argumento.
    return array.join('-');
}

// Ejemplo de uso:
const colores = ["rojo", "verde", "azul"];
const resultado = listar(colores);

console.log(resultado); // Debería imprimir "rojo-verde-azul"
