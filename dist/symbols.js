"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var symbol = Symbol("name");
var symbol2 = Symbol("name");
console.log(symbol);
console.log(symbol2);
console.log(symbol === symbol2); //out: false

var symbol3 = Symbol.for('name');
var symbol4 = Symbol.for('name');
console.log(symbol3 === symbol4); // out: true

var symbol5 = Symbol.for('name');
var name = Symbol.keyFor(symbol5);
console.log(name); // out: name


var user = _defineProperty({
    userName: 'evgen'
}, Symbol.for('password'), '1234');

console.log(user.passeord); // out: undefined

var password = user[Symbol.for('password')];
console.log(password); // out: 1234