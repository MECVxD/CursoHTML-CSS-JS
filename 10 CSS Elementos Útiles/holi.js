function hash(x) {
  seed = 11;
  diccionario = "acefimoprstuv";
  for (i = 0; i < x.length; i++) {
    seed = seed * 23 + diccionario.indexOf(x[i]);
  }
  return seed;
}

function entero(num) {
  for (i = 0; i < 13; i++) {
    aux = (num - i) / 23;
    if (Number.isInteger(aux)) {
      return [aux, i];
    }
  }
}

function array(hash) {
  let array = [];
  for (a = 9; a >= 0; a--) {
    array[a] = entero(hash)[1];
    hash = entero(hash)[0];
  }
  return array;
}

function palabra(hash) {
  diccionario = "acefimoprstuv";
  let word = [];
  let number = array(hash);
  for (o = 0; o < number.length; o++) {
    word[o] = diccionario[number[o]];
  }
  return word;
}
//468484901136871
console.log(palabra(468484901136871));
console.log(hash("aaaaaaaaaa"));
