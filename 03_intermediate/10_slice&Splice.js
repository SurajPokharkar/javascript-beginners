
// Slice() => 
// provide =>start and end value to cut
// almost like slicing of birthday cake and take a chunk out of it.
// make sure we are slicing 2 parts there and not 1, that is the most important thing

// start and end position should be provided
// start value => inclusive (included)
// end value => exclusive (excluded)



var users = ["Ram", "Shyam", "Ashwin", "Kartik", "Marg", "Paush", "Chaitra"]

// console.log(users.slice(1, 3));         // [ 'Shyam', 'Ashwin' ]
// console.log(users.slice(1, 5));         // [ 'Shyam', 'Ashwin', 'Kartik', 'Marg' ]
// console.log(users.slice(1));            // [ 'Shyam', 'Ashwin', 'Kartik', 'Marg', 'Paush', 'Chaitra' ]



// --------------------------------------------------------------------------------------------------------------

// Splice() =>
// provide => starting and count value to replace
// start value => inclusive
// second value => count value to delete till that position 
// third value => value that will be replaced by deleting 

// var users = ["Ram", "Shyam", "Ashwin", "Kartik", "Marg", "Paush", "Chaitra"]
users.splice(1, 3, "Removed values", "1 to 3");
console.log(users)                      // [ 'Ram', 'Removed values', 'Marg', 'Paush', 'Chaitra' ]


