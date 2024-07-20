// < ?========= metodo split =========>

    let texto1 = "Hola, ¿cómo estás?";
let palabras = texto1.split(" ");
console.log(palabras); // ["Hola,", "¿cómo", "estás?"]

let texto2 = "Manzana, Plátano, Naranja, Fresa";
let frutas = texto2.split(", ", 2);
console.log(frutas); // ["Manzana", "Plátano"]

let cadena = "JavaScript";
let caracteres = cadena.split("");
console.log(caracteres); // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]