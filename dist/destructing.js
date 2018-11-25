'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var language = ['JS', 'PHP', 'Python', 'Ruby'];

// let js = language[0];
// let php = language[1];
// let py = language[2];
// let rb = language[3];

//consol out: JS PHP Python Ruby

var js = language[0],
    php = language[1],
    py = language[2],
    rb = language[3],
    a = language[4]; // or let [js, php, py, rb] = ['JS', 'PHP','Python', 'Ruby'];

console.log(js, php, py, rb); // out: JS PHP Python Ruby

function getValue(_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        j = _ref2[0],
        p = _ref2[1];

    console.log(j, p);
    return [j, p];
}

var arr = getValue(['JavaScript', 'PHP']); // out: JavaScript PHP
console.log(arr); // out:  ["JavaScript", "PHP"]


var yes = 'Yes';
var no = 'No';

var _ref3 = [no, yes];
yes = _ref3[0];
no = _ref3[1];

console.log(yes); // out: No
console.log(no); // out: Yes