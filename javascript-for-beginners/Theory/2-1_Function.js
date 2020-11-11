console.log(console); // console은 Object이다. log는 console log 안에 있는 function 이다.
// console : built-in Object, log : built-in function

function sayHello(name, age) {
  console.log(`Hello ${name} you are ${age} years old`); // return nothing
}

sayHello("Minsoo", 15);

const greetMinsoo = sayHello("Minsoo", 15);
console.log(greetMinsoo); // return value of the function sayHello : undefined

function sayHello1(name, age) {
  return `Hello ${name} you are ${age} years old`;
}

const greetMinsoo1 = sayHello1("Minsoo", 15);
console.log(greetMinsoo1);

const calculator = {
  plus: function (a, b) {
    return a + b;
  },
};

const plus = calculator.plus(5, 5); // same as console.log
console.log(plus);
