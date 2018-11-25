let firstNme = 'Bill',
    lastName = 'Gates',
    email = 'billGates@gmail.com';

let person = {
     firstNme, // es5 --> firstNme : firstNme
     lastName,
     email,
     sayHello(){
        console.log(`Hi my name us ${firstNme} ${lastName}`);
     },

     get fullName(){
        return this.firstNme + ' ' + this.lastName;
     },

     set fullName(value){
        this.firstNme = value;
     }
};

// get and set on ES5
// Object.defineProperty(person,'fullName', {
//     get: function(){
//         return this.firstNme + ' ' + this.lastName;
//     },
//     set: function(value){
//         this.firstNme = value;
//     }
// });


console.log(person);

//--------------------------------------------------------------------------------------------------//
// person.sayHello();

// //acces property objects
// person.firstNme;
// //or dynamic acces
// let propPeson = 'email';
// person = {
//     [propPeson]: 'Bill'
// };

// console.log(person);


// function createCar(property, value){
//     return{
//         [property]:value,
//         ['_' + property]:value,
//         [property.toUpperCase()]:value,
//         ['get' + property](){
//             return this[property];
//         }
//     }
// };

// console.log(createCar('vin', 1))// out {vin: 1, _vin: 1, VIN: 1, getvin: ƒ}
