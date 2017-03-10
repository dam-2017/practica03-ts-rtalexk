import { Cadena } from './string';
import { Numero } from './number';

let cadena = new Cadena('anita lava la tina');

console.log(cadena.vocales);
console.log(cadena.esPalindromo);
console.log(cadena.letras);
console.log(cadena.palabras);

let numero = new Numero(6);

console.log(numero.sumarArray([1, 2, 3]));
console.log(numero.sumar(1));
console.log(numero.restarArray([1, 2, 3]));
console.log(numero.restar(1));
console.log(numero.factorial);
console.log(numero.factorialNum(3));
console.log(numero.primo);
console.log(numero.primoNum(41));