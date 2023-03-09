// Allow user to access course if he is :
// logged in from E-mail
// logged in from Google 
// logged in from Meta


let isuserLoggedInFromEmail = false
let isuserLoggedInFromGoogle = true
let isuserLoggedInFromMeta = false

if (isuserLoggedInFromEmail || isuserLoggedInFromGoogle || isuserLoggedInFromMeta){
    console.log("User is ALLOWED access!");
}
else{
    console.log("User is NOT ALLOWED acess!");
}