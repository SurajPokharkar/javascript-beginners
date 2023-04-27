
function doAddition(x) {
    return function(y){
        return x+y
    }
}

var addFive = doAddition(10)
console.log(addFive(5))

// doAddition() never goes off from the memory because still one reference is still alive of it => doAddition()()

// This is all possible because of closure and also how memory works in JS
console.log(doAddition(5)(5))   // Another way to to do it

// Also there are other things-

// Curring concept => asked sometimes in interviews 
// doAddition()()() => there could be three inputs or more. THis is "Curring"

// Curring is not only in JS but in other languages too


