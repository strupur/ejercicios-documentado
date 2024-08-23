// El método map() es muy útil cuando deseas transformar cada elemento de un array sin modificar el array original. Cada uno de estos ejemplos te muestra cómo puedes usar map() para diferentes casos de uso en tu desarrollo con JavaScript.

// < ?========= metodo map =========>

    const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);

console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// ---------------------------

const numbers1 = [1, 2, 3, 4, 5];
const parejas = numbers1.map(num => [num,num]);

console.log(JSON.stringify(parejas));//[[1,1],[2,2],[3,3],[4,4],[5,5]]

//-----------------------------

const palabras = ['hola', 'mundo', 'javascript'];

const palabrasMayusculas = palabras.map(palabra => palabra.toUpperCase());

console.log(palabrasMayusculas); // ['HOLA', 'MUNDO', 'JAVASCRIPT']

//------------------------------

const personas = [
    { nombre: 'Juan', edad: 25 },
    { nombre: 'Ana', edad: 30 },
    { nombre: 'Luis', edad: 35 }
  ];
  
  const nombres = personas.map(persona => persona.nombre);
  
  console.log(nombres); // ['Juan', 'Ana', 'Luis']
  
