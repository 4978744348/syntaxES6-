'use strict';

//---ES5----
// function add(x, y){
//     return x + y;
// } 

//---ES6----
var add = function add(x, y) {
    return x + y;
};
console.log(add(5, 2));

//---ES5----
// var square = function(x){
//     return x * x;
// }

//---ES6----
var square = function square(x) {
    return x * x;
};
console.log(square(3));

//---ES5----
// var giveMeAnswer = function(){
//      return 42;
// }

//---ES6----
var giveMeAnswer = function giveMeAnswer() {
    return 42;
};
console.log(giveMeAnswer());

//---ES5----
// var log = function(){
//     console.log('logging');
// }

//---ES6----
var log = function log() {
    return console.log('logging');
};
log();

//---ES5----
// var multiply = function(x, y) {
//     var result = x * y;
//     return result;
// }

//---ES6----
var multiply = function multiply(x, y) {
    var result = x * y;
    return result;
};
console.log(multiply(5, 5));

//---ES5----
// var getPerson = function(){
//     return {name: 'John'};
// }

//---ES6----
var getPerson = function getPerson() {
    return { name: 'John' };
}; // object wrapper brakets
console.log(getPerson());

//---ES5----
// (function(){
//     console.log('IIFE');
// })();

//---ES6----
(function () {
    return console.log('IIFE');
})(); // Immediately-Invoked Function Expression

//--------------------//--------------------------//
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var sum = 0;
//---ES5----
// numbers.forEach(function(num){
//     sum += num;
// });
//---ES6----
numbers.forEach(function (num) {
    return sum += num;
});
console.log(sum);

var squared = numbers.map(function (n) {
    return n * n;
});
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
var person = {
    name: 'Bob',
    greet: function greet() {
        console.log('Hello, my name is ' + undefined.name);
        console.log(undefined); // out: Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}, THIS REFERENCE TO CONTEXT
    }
};

person.greet();