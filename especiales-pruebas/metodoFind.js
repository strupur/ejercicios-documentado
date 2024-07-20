// Arreglo de números
const numeros = [1, 5, 8, 10, 9];

// Umbral que queremos superar
const umbral = 8;

// Usamos find para buscar el primer número mayor DESDE izquierda a derecha que el umbral
const numeroMayor = numeros.find(num => num > umbral);

if (numeroMayor) {
    console.log(`El primer número mayor que ${umbral} es ${numeroMayor}`);
} else {
    console.log(`No se encontró ningún número mayor que ${umbral}`);
}

// EN LA CONSOLA: El primer número mayor que 8 es 10

// En este ejercicio se buscara un numero del array que supere al numero umbral, el primero que aparesca de izquierda a derecha solo tomara el primero que aparesca. 






























