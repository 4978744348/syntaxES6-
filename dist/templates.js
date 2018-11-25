'use strict';

var _templateObject = _taggedTemplateLiteral(['Hello ', ' Hi ', ' ', ''], ['Hello ', ' Hi ', ' ', '']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function greet(name) {
    console.log(('hello ' + name).toUpperCase()); //reverse quotes
}

greet('Bill');

function createEmail(to, from, subject, message) {
    console.log('\n        To: ' + to + '\n        From: ' + from + '\n        Subject: ' + subject + '\n        Message: ' + message + '\n    ');
}

createEmail('Jon@gmail.com', 'Jane@gmail.com', 'Hello', 'How are you?');

function add(x, y) {
    console.log(x + ' + ' + y + ' = ' + (parseInt(x) + parseInt(y)));
}

add(5, 7); // out: 5 + 7 = 12
add('5', '7'); // out: 5 + 7 = 12

var name = 'Bill';
console.log(upperName(_templateObject, name, "Jane", "more names...")); // !!!warning don't need brackets after upperName()!!!
// out: Hello Bill,Jane,more names...
function upperName(literals) {
    for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        values[_key - 1] = arguments[_key];
    }

    // param VALUES is array
    return literals[0] + values;
}