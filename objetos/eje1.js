// Crear un objeto para almacenar la información del alumno y sus calificaciones
const alumno = {
    nombre: 'Juan',
    calificaciones: {
        ingles: 9,
        programacion: 8,
        html: 7
    }
};

// aqui con este algoritmo estraemos los valore numerico del objeto y los tranformamos en un array.
const calificaciones = Object.values(alumno.calificaciones);
console.log(calificaciones);// (3) [9, 8, 7]


//aqui con este algoritmo sumamos los numero del array ([9, 8, 7]) dando como resultado 24.
const sumaCalificaciones = calificaciones.reduce((suma, calificacion) => suma + calificacion, 0);
console.log(sumaCalificaciones); // 24

//aqui en este algoritmo dividimos 24 / 3 (longitud del array que es 3)
const mediaCalificaciones = sumaCalificaciones / calificaciones.length;

// Imprimir el nombre del alumno y la media de sus calificaciones
console.log(`Nombre del alumno: ${alumno.nombre}`);
console.log(`Nota media: ${mediaCalificaciones}`);

// Para comenzar vamos a crear un objeto sencillo que se usa para guardar información sobre las calificaciones de un alumno. El curso contiene tres materias: Ingles, programación y HTML, y el objeto contendrá el nombre del alumno y la calificación en cada una de ellas. El script imprimirá el nombre y la media de sus calificaciones
// Por ejemplo, guardar las calificaciones de un alumno de nombre Juan, Inglés: 9, programacion: 8, HTML: 7. Sacará Nota media de Juan 8
// pero solo con javascript sin usar html 