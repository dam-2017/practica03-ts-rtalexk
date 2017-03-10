import { Cadena } from './string';
import { Numero } from './number';

let cadena = new Cadena('anita lava la tina');
const voc = cadena.vocales;
console.log('Vocales de ' + cadena.cad + ': ');
console.log(voc);
console.log('Es palindromo? ' + cadena.cad + ': ' + cadena.esPalindromo);
console.log('Letras de ' + cadena.cad + ': ' + cadena.letras);
console.log('Palabras de ' + cadena.cad + ': ' + cadena.palabras);

let numero = new Numero(6);

console.log('sumar [1, 2, 3] + ' + numero.num + ' = ' + numero.sumarArray([1, 2, 3]));
console.log('sumar 4 + ' + ' ' + numero.num + ' = ' + numero.sumar(4));
console.log('restar [1, 2, 3] + ' + numero.num + ' = ' + numero.restarArray([1, 2, 3]));
console.log('restar 1 - ' + numero.num + ' = ' + numero.restar(1));
console.log('factorial de ' + numero.num + ' = ' + numero.factorial);
console.log('factorial de 3 = ' + numero.factorialNum(3));
console.log('primo: ' + numero.num + ' =  ' + numero.primo);
console.log('primo 41 = ' + numero.primoNum(41));