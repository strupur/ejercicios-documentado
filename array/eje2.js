let num = +prompt('Ingrese un numero');
const booleano = ['verdadero','falso']

if (num >= 0 && num <= 9 ) {
    console.log(booleano[0]);
} else {
    console.log(booleano[1]);
}

// Crea un array booleano con dos valores 'verdadero' y 'falso'. Este array te sirve para traduicr los valores true y false. Usalo para que el script muestre un alert con el nombrevedadero si un usuario teclea un valor entre 0 y 9 y falso en el caso contrario
// Por ejemplo al teclear 10 deberá devolver falso