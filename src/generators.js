function* generate(){
    console.log('start');
    yield 1;//valuef
    yield 2;
    yield 3;
    console.log('flash');
}

console.log(typeof generate)
generate();

let iterator = generate();

console.log(iterator.next());// out {value: 1, done: false}
console.log(iterator.next());// out {value: 2, done: false}
console.log(iterator.next());// out {value: 3, done: false}

function generate2(){
    let count = 1;
    return {
        [Symbol.iterator](){
            return{
                next(){
                    let result = {value: undefined, done: true};
                    if(count <= 3){
                        result.value = count;
                        result.done = false;
                        count ++;
                    }else{
                        result.value = undefined;
                        result.done = true;
                    }
                    return result;
                }
            }
        }
    }
}

let iterator2 = generate2()[Symbol.iterator]();
console.log(iterator2.next());// out {value: 1, done: false}
console.log(iterator2.next());// out {value: 2, done: false}
console.log(iterator2.next());// out {value: 3, done: false}


function* range(start, end){
    let current = start;
    while(current <= end){
         yield current++;
    }
}

for(let num of range(1, 10)){
    console.log(num);
}


function* generator3(){
    let result = yield;
    console.log(`Result: ${result}`);
}

let iterator3 = generator3();
console.log(iterator3.next());
console.log(iterator3.next(1));// out: Result: 1