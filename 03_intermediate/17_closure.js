

function init() {
    var firstName = "Suraj"
    
    function sayFirstName() {
        console.log(firstName);
        console.log("I Am Closure");
    }
    return sayFirstName         // Here, return gives the reference and not the function call value,
    //                             this means it still remains in the memory. It does not go away, it is alive in the memory 
}

// assign init() into a variable and then call the variable 
var callUpFunction = init()
callUpFunction()            // this is Closure 