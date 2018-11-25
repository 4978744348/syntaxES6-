let staticLanguages = ['C','C++','Java'];
let dynamicLanguages = ['JavaScript','PHP','Ruby'];

let language = [...staticLanguages, 'C#', ...dynamicLanguages,'Python'];
console.log(language);

let allLang = [...language];
console.log(allLang); // out:["C", "C++", "Java", "C#", "JavaScript", "PHP", "Ruby", "Python"]

function add(x, y, z){
    console.log(x + y + z);
}

let numbers = [1, 2, 3];

add(...numbers); // out: 6