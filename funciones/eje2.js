function esPar(num) {
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(esPar(6));

const esPar1 = (num1) => {
    if (num1 % 2 === 0) {
        return true;
    } else {
        return false;
    }
};

console.log(esPar1(6));

// Esta función se va a llamar esPar(num) y deberá devolver verdadero si el argumento es par y falso si es impar. Se acepta que solo se usarán números válidos.
// Por ejemplo al llamarla como esPar(5) me dará false, mientras que con esPar(6) me dará true.
