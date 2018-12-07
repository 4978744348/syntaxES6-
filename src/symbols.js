let symbol = Symbol("name");
let symbol2 = Symbol("name");
console.log(symbol);
console.log(symbol2);
console.log(symbol === symbol2)//out: false

let symbol3 = Symbol.for('name');
let symbol4 = Symbol.for('name');
console.log(symbol3 === symbol4)// out: true

let symbol5 = Symbol.for('name');
let name = Symbol.keyFor(symbol5);
console.log(name)// out: name


let user = {
    userName: 'evgen',
    [Symbol.for('password')]:'1234'
}

console.log(user.passeord) // out: undefined

let password = user[Symbol.for('password')]
console.log(password)// out: 1234
