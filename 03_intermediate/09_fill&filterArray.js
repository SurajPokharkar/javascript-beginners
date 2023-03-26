
let myNumberArray = [11, 22, 55, 77, 99, 33]

console.log(myNumberArray.fill("empty"))        // [ 'empty', 'empty', 'empty', 'empty', 'empty', 'empty' ]

const testArray = [12, 11, 45, 78, 56, 90]

// we use exact same logic when we have to :
// delete something (find index or id) or find something or 
// not include something when we want to build new array from previous array

const result = testArray.filter( (num) => num < 50 )    // callback arrow function 
console.log(result);    // [ 12, 11, 45 ]