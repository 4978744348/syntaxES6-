'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var arr = ['obj1', 'obj2', 'obj3'];

for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (var key in arr) {
    console.log(arr[key]);
}

arr.forEach(function (arr) {
    return console.log(arr);
});

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var obj = _step.value;

        console.log(obj);
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

var iterator = arr[Symbol.iterator]();
//console.log(iterator.next()); // out: {value: "obj1", done: false}
console.log(iterator.length);

var next = iterator.next(); //out undefined
while (!next.done) {
    console.log(next.value); // out: obj1 obj2 obj3
    next = iterator.next();
}

var idGenerator = _defineProperty({}, Symbol.iterator, function () {
    var id = 1;
    return {
        next: function next() {
            value = id > 100 ? undefined : id++;
            var done = !value;
            return { value: value, done: done };
        }
    };
});

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
    for (var _iterator2 = idGenerator[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var id = _step2.value;

        console.log(id);
        if (id > 100) {
            break;
        }
    }

    //------------------------------------///-----------------------------///-----------------------------///
} catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
        }
    } finally {
        if (_didIteratorError2) {
            throw _iteratorError2;
        }
    }
}

var ArrayIterator = function () {
    function ArrayIterator(array) {
        _classCallCheck(this, ArrayIterator);

        this.array = array; // array.map(item => item).sort();
        this.index = 0;
    }

    _createClass(ArrayIterator, [{
        key: 'next',
        value: function next() {
            var result = { value: undefined, done: true };

            if (this.index < this.array.length) {
                result.value = this.array[this.index];
                result.done = false;
                this.index += 1;
            }

            return result;
        }
    }]);

    return ArrayIterator;
}();

var TaskList = function () {
    function TaskList() {
        _classCallCheck(this, TaskList);

        this.tasks = [];
    }

    _createClass(TaskList, [{
        key: 'addTask',
        value: function addTask() {
            for (var _len = arguments.length, tasks = Array(_len), _key = 0; _key < _len; _key++) {
                tasks[_key] = arguments[_key];
            }

            this.tasks = this.tasks.concat(tasks);
        }
    }, {
        key: Symbol.iterator,
        value: function value() {

            return new ArrayIterator(this.tasks);

            // let tasks = this.tasks;
            // let index = 0;

            // return {
            //     next(){
            //         let result = {value: undefined, done: true};
            //         if(index < tasks.length){
            //             result.value = tasks[index];
            //             result.done = false;
            //             index += 1;
            //         }

            //         return result;
            //     }
            // };
        }
    }]);

    return TaskList;
}();

var taskList = new TaskList();
taskList.addTask('learn javaScriot', 'es6', 'c++');

var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
    for (var _iterator3 = taskList[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var task = _step3.value;

        console.log(task);
    }
} catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
        }
    } finally {
        if (_didIteratorError3) {
            throw _iteratorError3;
        }
    }
}