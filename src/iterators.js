let arr = ['obj1', 'obj2', 'obj3'];

for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

for(let key in arr){
    console.log(arr[key])
}

arr.forEach(arr => console.log(arr));

for(let obj of arr){
    console.log(obj);
}

let iterator = arr[Symbol.iterator]();
//console.log(iterator.next()); // out: {value: "obj1", done: false}
console.log(iterator.length)

let next = iterator.next();//out undefined
while(!next.done){
    console.log(next.value);// out: obj1 obj2 obj3
    next = iterator.next();
}

let idGenerator = {

    [Symbol.iterator]() {
        let id = 1;
        return {
            next(){
                value = id > 100 ? undefined : id++;
                let done = !value;
                return {value, done}
            }
        }
    }
}

for(let id of idGenerator){
    console.log(id);
    if(id > 100){
        break;
    }
}

//------------------------------------///-----------------------------///-----------------------------///
class ArrayIterator {
    constructor(array){
        this.array = array;// array.map(item => item).sort();
        this.index = 0;
    }

    next(){
        let result = {value: undefined, done: true};

        if(this.index < this.array.length){
            result.value = this.array[this.index];
            result.done = false;
            this.index += 1;
        }

        return result;
    }

}


class TaskList {
    constructor(){
        this.tasks = [];
    }

    addTask(...tasks){
        this.tasks = this.tasks.concat(tasks);
    }

    [Symbol.iterator]() {

       return  new ArrayIterator(this.tasks);

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
}

let taskList = new TaskList();
taskList.addTask('learn javaScriot', 'es6', 'c++');

for(let task of taskList){
    console.log(task);
}



