let language = ['JS', 'PHP','Python', 'Ruby'];

// let js = language[0];
// let php = language[1];
// let py = language[2];
// let rb = language[3];

//consol out: JS PHP Python Ruby

let [js, php, py, rb,a] = language;// or let [js, php, py, rb] = ['JS', 'PHP','Python', 'Ruby'];

console.log(js, php, py, rb);// out: JS PHP Python Ruby

function getValue([j, p]){
    console.log(j, p);
    return [j, p];
}

let arr = getValue(['JavaScript', 'PHP'])// out: JavaScript PHP
console.log(arr); // out:  ["JavaScript", "PHP"]


let yes = 'Yes';
let no = 'No';

[yes, no] = [no, yes];
console.log(yes);// out: No
console.log(no);// out: Yes