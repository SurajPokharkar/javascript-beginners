const uno = () => {
    console.log("I am one");
}

const dos = () => {
    setTimeout( () => {
        console.log("Wooohooo");
    } , 3000)
    console.log("I am two");
}

const tres = () => {
    console.log("I am three");
}

uno()
dos()
tres()

// OUTPUT:
// I am one
// I am two
// I am three
// Wooohooo

// Non blocking io
// Asynchronous execution of JavaScript
// Event Loop


// But here there's a problem
// Now JS also interacts with Backend (DATABASE)
// So its not good to execute some function first if its taking less time than some who takes more time or vice versa
// It should load up as per given instructions and not asynchronously