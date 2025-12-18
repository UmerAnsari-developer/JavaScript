// Primitive 
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt
// JS is dynamically typed language

const score = 789
const scoreValue = 789.45

const isLoggedin = false
const outsideTemo = null 
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id===anotherId);

const bigNumber = 8724839437654623897n




// Reference (Non primtive)

// Array, Objects, Functons

const heros = ["Iron man","thor","Wanda"]
const ob = {
    name:"Umer",
    age: 20
}

const myFunc = function(){
    console.log("Function");
    
}

console.log(myFunc);
console.log(typeof(null));
console.log(typeof(myFunc));
console.log(typeof(id));

