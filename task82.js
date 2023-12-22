'use strict';
// const animal = 'niggers';

// function makeShout() {
//   let animal = 'cat';

//   const shout = function () {
//     // Environment
//     // lets = []
//     // link = makeShout

//     console.log(animal);
//   };

//   animal = 'dog';
//   animal = 'slaves';
//   animal = 'i hate';
//   return shout;
// }

// shout = makeShout();

// shout();

// shout = function () {
//   // Env
//   // lets = []
//   // link =  node
//   console.log(animal);
// };

// shout();

// //

var radius = 30;
var shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => {
    console.log(this);
    return 2 * Math.PI * this.radius;
  },
};

console.log(shape.diameter());
console.log(shape.perimeter());

//
// setTimeout(() => console.log('apple'), 100);
// setTimeout(() => console.log('orange'));

// new Promise((resolve, reject) => {
//   setTimeout(() => resolve('carrot'), 300);
// }).then((data) => console.log(data));

// const newFn = () => {};
// console.log(newFn);

// new Promise((resolve, reject) => {
//   resolve();
//   console.log('melon');
// }).then(() => console.log('pear'));

// console.log('mango');

//
// console.log(1);

// setTimeout(() => console.log(2));

// Promise.resolve().then(() => console.log(3));

// Promise.resolve().then(() => setTimeout(() => console.log(4)));

// Promise.resolve().then(() => console.log(5));

// setTimeout(() => console.log(6));

// console.log(7);

// console.log(1);

//  1 7 1 3 5 2 4 6

// melon mango pear orange apple carrot

// let a = 7;
// let b = 19;

// b = 7;
// a = 19;
// console.log(a, b);
let str = 'aye';
str[2] = 's';
console.log(str);
