// var, let, const keywords 

// Q. Why we need let keyword if var was already present?

// Ans- 
// var gives you issue in block scope and functional scope 
// After few yrs of development of Javascript, var was used in the backend part.
// var throws you with **undefined** which is good for frontend
// but **undefined** is really bad for backend



// {}  => This is scope. Scope is a big issue for JS especially for "var"
// function()  => JS considers functions as scope


// console.log(firstname);
// var firstname = "suraj"   // undefined

// undefined => good for frontend but in case of Backend we need error!!
// Now we replace "var" with "let"


// EXAMPLE 1]
// console.log(firstname);
// let firstname = "Suraj" // let gives you => ERROR!!!

// EXAMPLE 2]
// if(true){
//     var lastName = "Pokharkar"
// }
// console.log(lastName);         // gives the value even if it's outside of the scope 

// This is not a good thing.
// Variables which are declared inside the scope should go away and should not be accessible to anyone outside the scope

// Hence, we also use "let" in for(){} loops. the scope remains until the loop runs and then it goes away

// SO USE "let" instead of "var"

if(true){
    let lastName = "Pokharkar"
}
console.log(lastName); // ERROR!!

// Now, Javascript is not allowing you to access the variable once the scope is over


