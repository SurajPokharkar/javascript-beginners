// init- initialization

function init() {
    var firstName = "Suraj"
    function sayFirstName() {
        console.log(firstName);
    }
    sayFirstName()
}

init()

// This is Lexical Scoping
// Anything called outside the function will not work
// As soon as the context of function is over everything gets cleared from the memory


