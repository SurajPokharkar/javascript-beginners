// Self Executing Anonymous Function  OR 
// IIFE -(Immediately Invoked Function Expression)


// normal declartion of function

// function sayHello(){
//     console.log("Say Hello");
//     console.log("Say Hello Again");
// }

// sayHello()


// IIFE or Self Executing Anonymous Function
(function(){
    console.log("Say Hello");
    console.log("Say Hello Again");
})()

// these functions have very limited scope of working 
// but in many testing cases and web scraping cases they are being used