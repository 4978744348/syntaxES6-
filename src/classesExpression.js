// let Task = class Task{
//     constructor(){
//         console.log('Creating task');
//     }
// }

// ------------ or --------------

let Task = class {
    constructor(){
        console.log('Creating task');
    }
}

let SubTask = class extends Task {
    constructor(){
        super();
        console.log('creatingsubTask');
    }
}

let task = new Task();
let subTask = new SubTask();

console.dir(task); // dir() ---> inside object
console.dir(subTask);