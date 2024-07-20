let num = +prompt('Ingrese un numero');

let array = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado']

console.log(`El día de la semana es ${array[num]}`);

// El mismo ejercicio pero con una funcion

function DiaSemana(num) {
    let array1 = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado']

    return `El día de la semana es ${array1[num]}`
}

console.log(DiaSemana(4));

// En este script deberás crear un array para guardar los nombres de los días de la semana, empezando por 0 para el domingo. Para comprobar el funcionamiento pide al usuario un número entre 0 y 6 y devuelve el nombre del día. Se supone que el dato tecleado estará entre 0 y 6
// Si tecleo el número 4 me deberá decir que el día de la semana es jueves

// https://www.aulascript.com/evaluar/arrays_inicio.html