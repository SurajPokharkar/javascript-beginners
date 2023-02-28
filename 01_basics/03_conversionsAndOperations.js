// let gameScore = 50

//  type of the gameScore variable => number
//  for frontend it may look like a number 
// but sometimes the typeof variable may be "String" or "Object" or any other format

// console.log(typeof gameScore);
// run this command on the terminal to check the output => node 01_basics/03_conversionsAndOperations.js

// ---------------------------------------------------------------------------------------------------------

// now suppose 
// let gameScore = "50"
// console.log(typeof gameScore); // string

// let valueInNumber = Number(gameScore)   // type conversion strictly into a number
// console.log(typeof valueInNumber);     // type conversion of string to number

// ------------------------------------------------------------------------------------------------------------

// let gameScore = "50abcd"
// console.log(typeof gameScore);

// let valueInNumber = Number(gameScore)       // type conversion 
// console.log(valueInNumber);                // "50abcd" => NaN
// console.log(typeof valueInNumber);         // "50abcd"  => this will give you the type = number


// --------------------------------------------------------------------------------------------------------------

// let gameScore = null
// console.log(typeof gameScore);             // object

// let valueInNumber = Number(gameScore)
// console.log(valueInNumber);                // 0
// console.log(typeof valueInNumber);         // number

// ---------------------------------------------------------------------------------------------------------------

// let gameScore = undefined
// console.log(typeof gameScore);             // undefined

// let valueInNumber = Number(gameScore)
// console.log(valueInNumber);                // NaN
// console.log(typeof valueInNumber);         // number

// -----------------------------------------------------------------------------------------------------------------

// notes of conversion 
// "50"=> 50
// "50abcd"=> NaN
// true=> 1; false=>0

// -------------------------------------------------------------------

// let isLoggedIn = 1                              

// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);                 //true

// -------------------------------------------------------------------

// notes: 

// 1=>true; 
// 0=>false; 
// "Suraj"=>true;
// " "=> false


// --------------------------------------------------------------------------------------------------------------------

// Conversion of Number => String

let someNumber = 55

let stringNumber = String(someNumber)
console.log(stringNumber);                      // 55
console.log(typeof stringNumber);               // string

// --------------------------------------------------------------------------------------------------------------------

// to run all the above code, type this command in the terminal => node 01_basics/03_conversionsAndOperations.js 


