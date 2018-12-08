'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(generate),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(range),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(generator3);

function generate() {
    return regeneratorRuntime.wrap(function generate$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    console.log('start');
                    _context.next = 3;
                    return 1;

                case 3:
                    _context.next = 5;
                    return 2;

                case 5:
                    _context.next = 7;
                    return 3;

                case 7:
                    console.log('flash');

                case 8:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked, this);
}

console.log(typeof generate === 'undefined' ? 'undefined' : _typeof(generate));
generate();

var iterator = generate();

console.log(iterator.next()); // out {value: 1, done: false}
console.log(iterator.next()); // out {value: 2, done: false}
console.log(iterator.next()); // out {value: 3, done: false}

function generate2() {
    var count = 1;
    return _defineProperty({}, Symbol.iterator, function () {
        return {
            next: function next() {
                var result = { value: undefined, done: true };
                if (count <= 3) {
                    result.value = count;
                    result.done = false;
                    count++;
                } else {
                    result.value = undefined;
                    result.done = true;
                }
                return result;
            }
        };
    });
}

var iterator2 = generate2()[Symbol.iterator]();
console.log(iterator2.next()); // out {value: 1, done: false}
console.log(iterator2.next()); // out {value: 2, done: false}
console.log(iterator2.next()); // out {value: 3, done: false}


function range(start, end) {
    var current;
    return regeneratorRuntime.wrap(function range$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    current = start;

                case 1:
                    if (!(current <= end)) {
                        _context2.next = 6;
                        break;
                    }

                    _context2.next = 4;
                    return current++;

                case 4:
                    _context2.next = 1;
                    break;

                case 6:
                case 'end':
                    return _context2.stop();
            }
        }
    }, _marked2, this);
}

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = range(1, 10)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var num = _step.value;

        console.log(num);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

function generator3() {
    var result;
    return regeneratorRuntime.wrap(function generator3$(_context3) {
        while (1) {
            switch (_context3.prev = _context3.next) {
                case 0:
                    _context3.next = 2;
                    return;

                case 2:
                    result = _context3.sent;

                    console.log('Result: ' + result);

                case 4:
                case 'end':
                    return _context3.stop();
            }
        }
    }, _marked3, this);
}

var iterator3 = generator3();
console.log(iterator3.next());
console.log(iterator3.next(1)); // out: Result: 1