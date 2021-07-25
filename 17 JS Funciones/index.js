/* 
   Buena practica:
*/
//Funciones
function iterar(arg1) {
  for (let i = 0; i < arg1.length; i++) {
    console.log(arg1[i]);
  }
}

const numeros = [1, 2, 3, 4, 5];
const nombres = [
  "Pedro",
  "Juan",
  "Felipe",
  "Chanchito feliz",
  "Chanchito triste",
];
//iterar(numeros);
//iterar(nombres);

function suma(a, b) {
  return a + b; //Si no usamos el return, retornara UNDEFINED
}
const resultado = suma(2, 3);
//console.log("resultado", resultado);

//Callback
function sumar(a, b, cb) {
  const r = a + b;
  cb(r);
}
function callback(result) {
  // Las funciones en JS son valores por eso se pueden pasar como valores
  console.log("resultado", result);
}
//callback(6)
//sumar(2, 3, callback);

//Fat Arrow Funtions
const miFatArrowFunction = (a, b) => a + b; //En el caso de FAF de una sola linea no es necesario usar el return y los {}
//Si usamos {} debemos utilizar el return
const otraFAF = (a, b) => {
  return a + b;
};
const r = otraFAF(1, 2);
//console.log(r);

//Funciones anonimas
sumar(2, 3, function (r) {
  console.log("Soy una funcion anonima y mi resultado es " + r);
});
