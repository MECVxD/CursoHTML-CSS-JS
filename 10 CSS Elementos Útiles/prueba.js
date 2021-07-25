function entero(num) {
  let i = 12;
  do {
    aux = (num - i) / 23;
    i--;
  } while (aux % 1 != 0);
  return [aux, i + 1];
}

function array(hash) {
  let array = [];
  diccionario = "acefimoprstuv";
  for (a = 9; a >= 0; a--) {
    array[a] = diccionario[entero(hash)[1]];
    hash = entero(hash)[0];
  }
  return array;
}
//468484901136871
console.log(array(468484901136871));
