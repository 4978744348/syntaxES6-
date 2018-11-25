'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var staticLanguages = ['C', 'C++', 'Java'];
var dynamicLanguages = ['JavaScript', 'PHP', 'Ruby'];

var language = [].concat(staticLanguages, ['C#'], dynamicLanguages, ['Python']);
console.log(language);

var allLang = [].concat(_toConsumableArray(language));
console.log(allLang); // out:["C", "C++", "Java", "C#", "JavaScript", "PHP", "Ruby", "Python"]

function add(x, y, z) {
    console.log(x + y + z);
}

var numbers = [1, 2, 3];

add.apply(undefined, numbers); // out: 6