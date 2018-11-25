//---ES5----
// function add(x, y){
//     return x + y;
// } 
 
//---ES6----
 let add = (x, y) =>  x + y;
console.log(add(5,2));

//---ES5----
// var square = function(x){
//     return x * x;
// }

//---ES6----
let square = x => x * x;
console.log(square(3));

//---ES5----
// var giveMeAnswer = function(){
//      return 42;
// }

//---ES6----
let giveMeAnswer = () => 42;
console.log(giveMeAnswer());

//---ES5----
// var log = function(){
//     console.log('logging');
// }

//---ES6----
let log = () => console.log('logging');
log();

//---ES5----
// var multiply = function(x, y) {
//     var result = x * y;
//     return result;
// }

//---ES6----
let multiply = (x,y) =>{
    var result = x * y;
     return result;
}
console.log(multiply(5,5));

//---ES5----
// var getPerson = function(){
//     return {name: 'John'};
// }

//---ES6----
let getPerson = () => ({name: 'John'}); // object wrapper brakets
console.log(getPerson());

//---ES5----
// (function(){
//     console.log('IIFE');
// })();

//---ES6----
(() => console.log('IIFE'))();// Immediately-Invoked Function Expression

//--------------------//--------------------------//
const  numbers = [1,2,3,4,5,6,7,8,9,10];

let sum = 0;
//---ES5----
// numbers.forEach(function(num){
//     sum += num;
// });
//---ES6----
numbers.forEach((num) => sum += num);
console.log(sum);

let squared = numbers.map(n => n * n);
console.log(squared);

//--------------------//--------------------------//
//---ES5----
// var person = {
//     name: 'Bob',
//     greet: function(){
//         console.log('Hello, my name is ' + this.name);
//         console.log(this);// out object Person, THIS REFERENCE TO OBJECT
//     }
// };

//---ES6----
let person = {
    name: 'Bob',
    greet: () => {
        console.log('Hello, my name is ' + this.name);
        console.log(this);// out: Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}, THIS REFERENCE TO CONTEXT
    }
};

person.greet();