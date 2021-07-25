console.log("Hola Mundo");
/* Tipos de datos en JS
    -String: cadena de caracteres. 'a' 'hola' 'Hola Mundo' "a" "Hola" " Hola Mundo".
    -Boolean: true false.
    -Null: nulo, vacio, no contiene datos, es una variable que esta definida.
    -Number: numeros, sin comillas. 
    -Undefined: Es una variable que no esta definida.
    -Object: Objeto, son estructuras que permiten agrupar los otros tipos de datos.

   Definicion de variables:
    var cuando se usa la variable se va hasta el principio del archivo.
      var miPrimeraVariable = "lala";
    let 
      let miPrimeraVariable = "Mi Primera Variable"; Siempre deben comenzar con una letra del alfabeto
    const

   Buena practica:
    -Agregar un nombre descriptivo a la variable
    -En los objetos poner una coma en el ultimo elemento
*/
let miPrimeraVariable = "Mi Primera Variable!";
//console.log(miPrimeraVariable);

//Mutabilidad, una variable puede cambiar su valor
miPrimeraVariable = "Esto ha cambiado";
//console.log(miPrimeraVariable);

//Boolean
let miBoolean = true;
let miOtroBool = false;

//Numeros
let miNumero = 0;
let miNumero2 = 12;
let miNumero3 = -250;
//console.log(miNumero, miNumero2, miBoolean, miPrimeraVariable);

//Undefined
let undef;
//console.log(undef);

//Nulo
let nulo = null;
//console.log(nulo);

//Objeto vacio
const miPrimerObjeto = {};

//Objeto vacio
const miObjeto = {
  //Propiedad: valor,
  unNumero: 12,
  unString: "Esta cadena de caracteres",
  unaCondicion: true,
};
//Se puede acceder a una propiedad en especifico del objeto
console.log(miObjeto.unString);

//Arreglo Vacio
const arrVacio = [];

//Arreglo
const arr = [1, 2, "Hola", "Mundo", miObjeto];

//console.log(arrVacio, arr);

//push agrega un elemnto al arreglo
arr.push(5);
arr.push(miPrimeraVariable);
console.log(arr);

//Una lista es similar a un arreglo solo que los datos deben ser del mismo tipo
