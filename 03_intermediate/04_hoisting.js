// There are two types of major Context running/available while executing a program
// Global Context and Execution Context

// Global Context=> Collects the information about anything and everything. It's on top of Execution Context

// Execution Context=> kicks in when you want to run some code (maybe one line of code or totally a whole function)
// After execution of code, it goes away.

// Execution Context=> 
// Variable Object 
// Scope Chain
// this 

// 2 Rules to follow whenever there is Execution Context
// 1]Function Declarations are scanned and made available  //we were able to call the function first and then defn. =>Global Context
// 2]Variable Declarations are scanned and made undefined


tipper(5)                       // Global Context kicks in here
function tipper(a){
    let bill = parseInt(a)
    console.log(bill + 5);
}

// tipper(5)


// -----------------------------------------------------------------------------------------------------------------

// Code Hoisting =>
// When a Function is declared as Variable => It should strictly call the function below it and not above it. 
// Or else it will throw ERROR!

// bigTipper("200")                    // this will throw ERROR! 
                                   // Rule 2]Variable Declarations are scanned and made undefined.

let bigTipper = function (a){       // Function declared as variable
    let bill = parseInt(a)
    console.log(bill + 5);
}

bigTipper("200")             // This is the proper way to call the function 



// --------------------------------------------------------------------------------------------------------------

// 2]Variable Declarations are scanned and made undefined.

console.log(name);      // O/P => undefined
var name = "Javascript"      // Global Context knows variable is available, but right now it is undefined. 
                        // You have collected the information but you are trying to use it first.

function sayName(){
    console.log("ReactJS");
}

sayName()               // Execution Context kicks in and then goes away. O/P => ReactJS

console.log(name);      //  Global Context kicks in. O/P =>Javascript