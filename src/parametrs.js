function greet(greeting, name){
console.log(`${greeting} ${name}`);
}

// ----ES5---
// function greet(greeting, name){
//     if(greeting !== undefined && name !== undefined){
//         console.log(`${greeting} ${name}`);
//     }else if (greeting === undefined && name !== undefined){
//         console.log(`Hello ${name}`);
//     }else if (greeting !== undefined && name === undefined){
//         console.log(`${greeting} friend`);
//     } else {
//         console.log('Hello friend');
//     }
// }

// ----ES6-----
function greet(greeting = 'Hello', name = 'friend'){// mocks
    console.log(`${greeting} ${name}`);
    }
    

greet('Hi', 'Bill');
greet('Hi');
greet(undefined, 'Bill');
greet();

// ----ES5---
// function sum(){
//     console.log(arguments instanceof Array); // false
//     var sum = 0;
//     Array.prototype.forEach.call(arguments, function (value){
//         sum += value;
//     });

//     console.log(sum);
// }


// ----ES6---
function sum (...values){
    console.log(values instanceof Array); // true
    let sum = 0;
    values.forEach(function(value){
        sum += value;
    });
    console.log(sum);
}


function sum (...values){
    console.log(values.reduce(function(prevValue, currentValue){
        return prevValue + currentValue;
    }));
}

sum(5, 7, 2, 10);