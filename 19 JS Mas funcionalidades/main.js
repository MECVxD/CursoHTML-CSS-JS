const a = {
  b: 1,
  c: 2,
};

const b = a;
/*Ambas constantes hacen referencia al mismo objeto por lo que si modificamos en una
se modificara en el otro tambien*/
const c = { ...a }; //Hace una copia exacta de a pero si se modifica no afecta a la constante "a"

Promise.resolve(2)
  .then((valor) => valor + 1)
  .then((valor) => console.log(valor))
  .catch((e) => console.error(e));

Promise.reject(2)
  .then((valor) => valor + 1)
  .then((valor) => console.log(valor))
  .catch((e) => console.error(e));

new Promise((resolve, reject) => {
  setTimeout(() => resolve(), 1000);
})
  .then((x) => console.log(x))
  .catch((e) => console.error(e));
