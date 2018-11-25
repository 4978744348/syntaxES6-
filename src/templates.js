function greet(name){
    console.log(`hello ${name}`.toUpperCase());//reverse quotes
}

greet('Bill');

function createEmail(to, from, subject, message){
    console.log(`
        To: ${to}
        From: ${from}
        Subject: ${subject}
        Message: ${message}
    `);
}

createEmail('Jon@gmail.com', 'Jane@gmail.com', 'Hello', 'How are you?')

function add(x, y){
    console.log(`${x} + ${y} = ${parseInt(x) + parseInt(y)}`);
}

add(5, 7) // out: 5 + 7 = 12
add('5', '7') // out: 5 + 7 = 12

let name = 'Bill';
console.log(upperName`Hello ${name} Hi ${"Jane"} ${"more names..."}`);// !!!warning don't need brackets after upperName()!!!
// out: Hello Bill,Jane,more names...
function upperName(literals, ...values){// param VALUES is array
    return literals[0] + values
}