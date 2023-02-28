// JavaScript is a dynamically typed language. 
// Because datatype will be automatically assigned at the time of compilation or code execution.


// 1]Primitive Datatypes

// 7 types => 
// String, 
// Number, 
// Boolean, 
// Null, 
// Undefined, 
// Symbol, 
// BigInt

const score = 100                       // number
const scoreValue = 100.3                // number
const isLoggedIn = false                // boolean
const outsideTemp = null                // null
let userEmail;                          // undefined

const id = Symbol('123')                // symbol
const anotherId = Symbol('123')         // symbol

console.log(id === anotherId);  // false
console.log(typeof anotherId);  // symbol

// const bigNumber = 3456543576654356754n   // bigInt





// ---------------------------------------------------------------------------------------------------------------------------------------------

// 2]Reference(Non Primitive) Datatypes =>

// Arrays, 
// Objects, 
// Functions


// Array
const bigTech = ["Apple", "Google", "Meta"];
console.log(bigTech);   // [ 'Apple', 'Google', 'Meta' ]


// Object 
let myObject = {
    name: "Suraj",
    age: 18,
    language: "Javascript"
}

console.log(myObject);  // { name: 'Suraj', age: 18, language: 'Javascript' }


// Function

const myFunction = function(){
    
    console.log("Hello Javascript");
}

myFunction() // calling the function => Hello Javascript


// --------------------------------------------------------------------------------------------------------------------------------------

// Return type of variables in JavaScript =>

// 1]Primitive Datatypes 

// Number => number
// String  => string
// Boolean  => boolean
// null  => object
// undefined  =>  undefined
// Symbol  =>  symbol
// BigInt  =>  bigint


// 2]Reference(Non-Primitive) Datatypes
// Arrays  =>  object
// Function  =>  function
// Object  =>  object


// Refer this for more info=> https://262.ecma-international.org/5.1/#sec-11.4.3