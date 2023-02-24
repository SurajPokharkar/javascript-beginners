const javascriptId = 123456;
let javascriptEmail = "javascript@beginners.com";
var javascriptPassword = "789456123";
javascriptCity = "Navi Mumbai";
let javascriptState;   // Declared variable but value not assigned, will give => undefined

// const, let, var => these are reserved keywords used to declare variables.

// const => remains constant throughout the program. You can't change the value of javascriptId.
// javacriptId = abcdefg  => here we are changing the value. This is not allowed ERROR!!


// modifying the above values
javascriptEmail = "reactjs@beginners.com";
javascriptPassword = "0123456789";
javascriptCity = "Pune";



// console.log() => outputs/prints whatever value provided to the console.
// console.log(javascriptId);   => 123456

// console.table() => this method will output in the form of a table.
console.table([javascriptId, javascriptEmail, javascriptPassword, javascriptCity, javascriptState]);


/*
Prefer not to use=> var 
because of the issue in block scope & functional scope.
*/