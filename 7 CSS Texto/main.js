/*const example = async () => {
    const nums = [1, 2, 3]
    nums.forEach( num => {
        const result =returnNum(num)
        console.log(result)
    });
    console.log('after foreach')
}

const returnNum = x => {
    return new Promise ((resolve, reject)=> {
        setTimeout(() => {
            resolve(x)
        }, 500)
    })
}

example().then(() =>{
    console.log('done')
})

let MyObj = {
    name="ADC",
    age=6,
    sayName: function () {
        console.log('My name is: ${this.name}')
    }
}
MyObj.sayName()

let MyObj = {
    name = "ADC",
    age : 6,
    sayName: function (){
        console.log(`My name is: ${this.name}`)
    }
}

setTimeout(MyObj.sayName, 1000)

let MyObj = {
    name: 'ADC',
    age: 6,
    sayName: function(){
        console.log(`My name is ${this.name}`);
    }
}

setTimeout(MyObj.sayName.bind(MyObj), 1000)

var myObject = {
    foo: "bar",
    func: function(){
        console.log("outer func: this.foo="+this.foo)

        const innerFunction = function() {
            console.log("inner func: this.foo"+this.foo)
        }
        innerFunction()
    }
}
myObject.func()

const x = 10;

function myFunction() {
  let x = 1;
  x++;
  console.log(this.x);
}

myFunction();*/

let texto= "Node.js es un **entorno** en tiempo de ejecución multiplataforma, **de** código abierto, para la capa del servidor basado en el lenguaje de programación **JavaScript**, asíncrono, con E/S **de** datos en una arquitectura orientada a eventos y basado en el motor V8."
let separador="**"
let textoAreaDividido = texto.split(separador);
let cont=0
let texto1
let array=[]
for(let i=0; i<=textoAreaDividido.length-1; i++)
{
    texto1=textoAreaDividido[i]
    if(texto1.includes(' ')==false)
    {
        if(array.includes(texto1)==false)
        {
            array.push(texto1)
            cont++
        }
    }
}
console.log(array, cont)