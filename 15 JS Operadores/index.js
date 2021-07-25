/* 
   Buena practica:
*/

// Operadores matematicos
const suma = 1 + 2; //Suma
const restar = 1 - 2; //Resta
const multiplicar = 2 * 3; //Multiplicacion
const division = 9 / 3; //Division
//console.log(suma, restar, multiplicar, division);

//Const no permite modiifcar el valor de la variable, en un objeto permite modificar las propiedades
const modulo = 10 % 3; // Modulo
//console.log(modulo);

let num = 5;
num++;
//console.log(num);

num--;
//console.log(num);

//Operador de asignacion
num += 3;
//console.log(num);
num -= 5;
//console.log(num);
num *= 5;
//console.log(num);
num /= 5;
//console.log(num);

//Operadores de comparacion
const resultado = 5 === 6; //Igualdad estricta, compara el tipo y el dato
const resultado1 = 5 == "5"; //Igualdad  no estricta, por esta razon no debe usarse el '=='
const resultado2 = 5 < 6;
const resultado3 = 5 < 5;
const resultado4 = 5 > 6;
const resultado5 = 5 > 5;
const resultado6 = 5 <= 6;
const resultado7 = 5 <= 5;
const resultado8 = 5 >= 6;
const resultado9 = 5 >= 5;

const resultado10 = 5 !== 6;
const resultado11 = 5 != "6";
//console.log(resultado10, resultado11);

//Operadores Logicos or ||, and &&, not !, Numeros, String t datos son true exepto el numero 0
const resultadoOr = false || true;
//console.log(resultadoOr);

const resultadoAnd = true && false;
console.log(resultadoAnd);

const resultadoNot = !true;
//console.log(resultadoNot);
