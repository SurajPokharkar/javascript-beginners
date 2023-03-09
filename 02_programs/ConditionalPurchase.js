// User is only allowed to make a purchase when he is 
// logged in 
// email verified
// cardInfo valid

// If any one of the above is missing- Stop the purchase

let isLoggedIn = true
let isEmailVerified = true
let cardInfo = true

if (isLoggedIn && isEmailVerified && cardInfo){
    console.log("User is ALLOWED to purchase!");
}
else{
    console.log("User is NOT ALLOWED to purchase!");
}