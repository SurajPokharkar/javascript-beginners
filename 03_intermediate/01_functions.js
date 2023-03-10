// Function => a block of code, which is separated out so that it can be used again and again.

// many times the functionality part is thrown away in a separate file 
// so that we can write all the functions or usability part there 
// and then bring them up in the file and use it again and again.


// whenever you want to call a function use -paranthesis ()
// whenever you want to refer a function don't use paranthesis.

// function declaration 
function sayHello(name){
    console.log(`Hello there ${name}! How are you doing?`); // Use string interpolation for better code readability
}


sayHello("Suraj") // Hello there Suraj! How are you doing?
sayHello("Omkar") // Hello there Omkar! How are you doing?


function namsatey(){
    return "Hello in India"
}

namastey() // not going to output anything beacuse it just returns and not display values

// note that console.log() and return are two different things.

let greeting = namastey()   // Part of functional programming- treating a function just like a variable

console.log(greeting);      // explicitly mentioning the value to print
console.log(namastey());    // taking directly the function to print