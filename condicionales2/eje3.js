let num1 = parseInt(prompt("Ingresa el primer número entero:"));

let calculo = 18 - num1 ;

console.log(num1 <= 17 ? `Espera ${calculo} años` : "Puede entrar")

// En ste caso, también usando el perador ternario o if reducido, un visitante a la página deberá teclear su edad, si es igual o mayor de 18 recibirá el mensaje de "Entra" en caso contario deberá decirle los años que tiene que estperar para entrar

// Si le digo que tengo 19 años me dirá "Puedes entrar", si le digo que tengo 14 años me dirá "Espera 4 años"