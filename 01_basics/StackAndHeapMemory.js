// Stack Memory => Primitive 
// When Stack memory is used, whatever variable you declare  => you get a copy

// Heap Memory => Non-Primitive
// whatever goes in heap memory => you get a reference- original value
// so whatever change you do => happens in original value

// example 1] => using primitive datatypes

let myJavascriptName = "surajpokharkar.com"

let anotherName = myJavascriptName
anotherName = "javascriptbeginners"

console.log(myJavascriptName);          // surajpokharkar.com
console.log(anotherName);               // javascriptbeginners

// note that value of myJavascriptName is not changed 
// this is because => you get a copy of myJavascriptName variable and changes are made in that copy and not in the original variable.


// example 2] => using non-primitive datatypes

let userOne = {
    email : "userOne@google.com",
    upi : "userOne@upi.com"
}

let userTwo = userOne

userTwo.email = "Reactjs@beginners.com"     // " . " keyword => used to access the properties of object

console.log(userOne.email);     // Reactjs@beginners.com
console.log(userTwo.email);     // Reactjs@beginners.com

// so here we get Reference from HEAP memory that means original value is changed from the memory.
