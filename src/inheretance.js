class Task {
    constructor(title){
        this.title = title;
        this.done = false;
        Task.count += 1;
        console.log('create task')
    }

    get title(){
        return this._title;
    }

    set title(value){
        this._title = value;
    }

    static getDefaultTitle(){
        return 'Task';
    }

    complete() {
        this.done = true;
        console.log(`task ${this.title} comleted`)
    }
}

Task.count = 0; // static count = 0;

class SubTask extends Task {
    constructor(title, parent){
        super(title); // or super().title = title;
        this.parent = parent;
        console.log('create subTask')
    }

    complete(){
        super.done = true;// or super.complete();
        console.log(`SubTask ${this.title} completed`)
    }
}

let task = new Task('Learn JS');
let subTask = new SubTask('Learn ES6', task);

console.log(SubTask.getDefaultTitle());
console.log(subTask.count);

task.complete();
subTask.complete();

console.log(task);
console.log(subTask);

// console.log(subTask instanceof SubTask);
// console.log(subTask instanceof Task);