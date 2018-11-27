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


let person = {
    firstName: 'John',   
    lastName: 'Doe'
};

let{firstName: first, lastName: last} = person;//or let{firstName, lastName} = person;
console.log(first, last); // out: John Doe

let user = {
    firstNameTwo: 'John',   
    lastNameTwo: 'Doe',
    social: {
        facebook: 'FB:John Doe',
        twitter: 'JDoe'
    }
};

let{firstNameTwo: firstTwo, lastNameTwo: lastTwo, social:{facebook}} = user;
console.log(firstTwo, lastTwo, facebook);//out: John Doe FB:John Doe

function post(url, {data, cache}) {
    console.log(url, data, cache);
};
let result = post('api/users', {data:user, cache:false});// out: api/users {firstNameTwo: "John", lastNameTwo: "Doe", social: {…}}firstNameTwo: "John"lastNameTwo: "Doe"social: {facebook: "FB:John Doe", twitter: "JDoe"}__proto__: Object false

function post(url, {data:{firstNameTwo, lastNameTwo}, cache}) {
    console.log(url, firstNameTwo, lastNameTwo, cache);
};
let result2 = post('api/users', {data:user, cache:false}); //out: api/users John Doe false

function getUserInfo(){
    return{
            firstNameThree: 'John',   
            lastNameThree: 'Doe',
            social: {
            facebook: 'FB:John Doe',
            twitter: 'JDoe'
        }
    };
}

let{firstNameThree, lastNameThree, social:{twitter}} = getUserInfo();
console.log(firstNameThree, lastNameThree, twitter);