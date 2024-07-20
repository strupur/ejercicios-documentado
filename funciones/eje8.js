function impuesto(num1,num2) {

    //20   // 200
let descuento = num1 * 0.10; // = 20

   //180           //200     //20
let descuento2 = num1 - descuento;// = 180

if (num1 <= 99) {
  return `${num1 + num1 * num2 }`
} else if (num1 >= 100) {

           //200      //20         // 180     //0.05
  return `${(num1 - descuento) + (descuento2 * num2)}`
}                //180           +         //9
}                                 //189

console.log(impuesto(200,0.05));//189


// Escribe una función que reciba como argumento un precio y el porcentaje de impuestos. La función devolverá el valor total a pagar, teniendo en cuenta que al precio sin impuestos se le descuenta un porcentaje del 10% si es mayor de 100 euros.
// Si he comprado por valor de 200 euros con un impuesto del 5%, me descuentan un 10% por tanto pago 180 euros más los impuestos que son el 5% de 180. En total 189 euros.