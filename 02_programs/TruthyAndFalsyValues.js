// Falsy values =>

// null
// 0
// "" - EmptyString with no space
// undefined
// NaN


// -------------------------------------------------------------------
// Truthy Values =>

// All values except the above ones are Truthy values


let user = ""

if(user){
    console.log("Condition is Working...");
}

// this program will not work as "" => Empty String is a Falsy Value