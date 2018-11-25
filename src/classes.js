class Task {

    constructor(title = Task.getDefaultTitle()){//  the properties init only construtor
        this.title = title;
        this._done = false;// private
        Task.count += 1;
    }

    get done(){
        return this._done === true ? 'compete' : 'not compelte'
    }

    set done(value){
        if(value !== undefined && typeof value === 'boolean'){
            this._done = value;
        } else {
            console.error('Error. Need value true or false');
        }
    }


    complete(){
        this.done = true;
        console.log(`task ${this.title} done`);
    }

    static getDefaultTitle(){
        return 'Task the default';
    }

}

Task.count = 0;


let taks = new Task('create task');
console.log(taks.done, taks._done);
taks.complete();
console.log(taks.done, taks._done);

//-------------------------------//-------------------------------------//
console.log('----------------------------------------------------------');
let taks2 = new Task('buy products');
let task3 = new Task();

console.log(typeof taks);
console.log(taks instanceof Task);
console.log(taks.title);
console.log(taks2.title);
console.log(task3.title);

console.log(Task.count);

taks2.complete();
console.log(Task.getDefaultTitle());// acces to method as Java 