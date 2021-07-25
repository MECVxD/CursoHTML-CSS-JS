/* 
   Buena practica:
*/
//Control de flujo

//IF
const edad = 6;
if (edad > 5 && edad < 18) {
  //console.log("El niño puede jugar");
} else {
  //console.log("EL niño no puede jugar :(");
}
//console.log("Fin programa");

//WHILE
let x = 0;
while (x < 5) {
  //console.log(x);
  x++;
}
//console.log("Fin loop x");
let y = true;
while (y) {
  //console.log(y);
  y = false;
}
//console.log("Fin loop y");

//SWITCH
let a = 3;
switch (a) {
  case 1:
    //console.log("Yo soy el caso 1");
    break;
  case 2:
    //console.log("Chanchito feliz");
    break;
  case 3:
    //console.log("Chancito triste :(");
    break;
  default:
    //console.log("No hay chancitos :(");
    break;
}

//FOR
/*for (let i = 0; i < 10; i++) {
  console.log(i);
}*/
const numeros = [1, 2, 3, 4, 5];
//console.log(numeros[2]);
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}
