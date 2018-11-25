'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Task = function () {
    function Task() {
        var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Task.getDefaultTitle();

        _classCallCheck(this, Task);

        //  the properties init only construtor
        this.title = title;
        this._done = false; // private
        Task.count += 1;
    }

    _createClass(Task, [{
        key: 'complete',
        value: function complete() {
            this.done = true;
            console.log('task ' + this.title + ' done');
        }
    }, {
        key: 'done',
        get: function get() {
            return this._done === true ? 'compete' : 'not compelte';
        },
        set: function set(value) {
            if (value !== undefined && typeof value === 'boolean') {
                this._done = value;
            } else {
                console.error('Error. Need value true or false');
            }
        }
    }], [{
        key: 'getDefaultTitle',
        value: function getDefaultTitle() {
            return 'Task the default';
        }
    }]);

    return Task;
}();

Task.count = 0;

var taks = new Task('create task');
console.log(taks.done, taks._done);
taks.complete();
console.log(taks.done, taks._done);

//-------------------------------//-------------------------------------//
console.log('----------------------------------------------------------');
var taks2 = new Task('buy products');
var task3 = new Task();

console.log(typeof taks === 'undefined' ? 'undefined' : _typeof(taks));
console.log(taks instanceof Task);
console.log(taks.title);
console.log(taks2.title);
console.log(task3.title);

console.log(Task.count);

taks2.complete();
console.log(Task.getDefaultTitle()); // acces to method as Java