// ------ beginner level code -------------------------------

// function isEven(element){
//     // if (element % 2 === 0 ){
//     //     return true
//     // }
//     // return false

//     return element % 2 === 0
// }

// console.log(isEven(2));


// ----------------------------------------------------------

// Arrow function
let isEven = (element) => {
    return element % 2 === 0
}

// console.log(isEven(2));

//  ---------------------------------------------------------


// ************** Callback Function ******************

// every() method - goes into array and scans all the elements
// [2, 4, 6, 8].every(isEven) 

// let result = [2, 4, 6, 8].every(isEven)
// console.log(result);

// Without using loops we're able to do certain operation on every single element
// spend some time reading documentation of arrays in Javascript



// You can avoid above code by writing => callback
// We'll be writing Arrow function callbacks ES6+ onwards...

// How to write a callback? => A simple function() which doesn't have a name
// Arrow Function  (() => {})

// let result = [2, 4, 6, 8].every((e) => {
//     return e%2 === 0 
// })
// console.log(result);

// now another way of writing this function is => removing the return keyword
// Note: whenever you remove return => no need of curly braces{}. Remove {}

let result = [2, 4, 6, 8].every((e) => e%2 === 0 )      // removed return and {} 
console.log(result);

// Syntax shortcut 
// (() => ())        // Without using return keyword and {}

// By using these Arrow callback function() 
// You'll be avoiding a lot of bugs if you're coding in REACT/ANGULAR or whatever lib/framework in the future.





