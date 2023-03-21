// Some commonly used array methods in JavaScript:

// 1]push() - adds one or more elements to the end of an array and returns the new length of the array
// 2]pop() - removes the last element from an array and returns that element
// 3]shift() - removes the first element from an array and returns that element
// 4]unshift() - adds one or more elements to the beginning of an array and returns the new length of the array
// 5]splice() - changes the contents of an array by removing or replacing existing elements and/or adding new elements
// 6]slice() - returns a new array that contains a portion of the original array
// 7]concat() - returns a new array that combines two or more arrays
// 8]join() - returns a string that consists of the elements in an array, separated by a specified delimiter
// 9]reverse() - reverses the order of the elements in an array
// 10]sort() - sorts the elements of an array in place
// 11]filter() - creates a new array with all elements that pass a certain test
// 12]map() - creates a new array with the results of calling a function on each element of an array
// 13]reduce() - applies a function to each element of an array to reduce the array to a single value



// 1]push() - adds one or more elements to the end of an array and returns the new length of the array

const fruits1 = ['apple', 'banana', 'orange'];
const newLength1 = fruits1.push('pear', 'kiwi');

console.log(fruits1); // ['apple', 'banana', 'orange', 'pear', 'kiwi']
console.log(newLength1); // 5

// -----------------------------------------------------------------------------------------------------------------

// 2]pop() - removes the last element from an array and returns that element

const fruits2 = ['apple', 'banana', 'orange'];
const lastFruit = fruits2.pop();

console.log(fruits2); // ['apple', 'banana']
console.log(lastFruit); // 'orange'

// -------------------------------------------------------------------------------------------------------------------

// 3]shift() - removes the first element from an array and returns that element

const fruits3 = ['apple', 'banana', 'orange'];
const firstFruit = fruits3.shift();

console.log(fruits3); // ['banana', 'orange']
console.log(firstFruit); // 'apple'

// -------------------------------------------------------------------------------------------------------------------

// 4]unshift() - adds one or more elements to the beginning of an array and returns the new length of the array

const fruits4 = ['apple', 'banana', 'orange'];
const newLength4 = fruits4.unshift('kiwi', 'pear');

console.log(fruits4); // ['kiwi', 'pear', 'apple', 'banana', 'orange']
console.log(newLength4); // 5

// --------------------------------------------------------------------------------------------------------------------

// 5]splice() - changes the contents of an array by removing or replacing existing elements and/or adding new elements

const fruits5 = ['apple', 'banana', 'orange'];
fruits5.splice(1, 1, 'kiwi', 'pear');

console.log(fruits5); // ['apple', 'kiwi', 'pear', 'orange']

// --------------------------------------------------------------------------------------------------------------------

// 6]slice() - returns a new array that contains a portion of the original array

const fruits6 = ['apple', 'banana', 'orange', 'kiwi', 'pear'];
const slicedFruits = fruits6.slice(1, 4);

console.log(slicedFruits); // ['banana', 'orange', 'kiwi']

// -------------------------------------------------------------------------------------------------------------------

// 7]concat() - returns a new array that combines two or more arrays

const fruits71 = ['apple', 'banana'];
const fruits72 = ['orange', 'kiwi'];
const combinedFruits = fruits71.concat(fruits72);

console.log(combinedFruits); // ['apple', 'banana', 'orange', 'kiwi']

// ------------------------------------------------------------------------------------------------------------------

// 8]join() - returns a string that consists of the elements in an array, separated by a specified delimiter

const fruits8 = ['apple', 'banana', 'orange'];
const joinedFruits = fruits8.join(', ');

console.log(joinedFruits); // 'apple, banana, orange'

// ------------------------------------------------------------------------------------------------------------------

// 9]reverse() - reverses the order of the elements in an array

const fruits9 = ['apple', 'banana', 'orange'];
fruits9.reverse();

console.log(fruits9); // ['orange', 'banana', 'apple']

// -------------------------------------------------------------------------------------------------------------------

// 10]sort() - sorts the elements of an array in place

const fruits10 = ['orange', 'apple', 'banana'];
fruits10.sort();

console.log(fruits10); // ['apple', 'banana', 'orange']

// -------------------------------------------------------------------------------------------------------------------

// 11]filter() - In this example, we create an array of names and use the filter() method to create a new array 
// that contains only the names that start with the letter "J".

// Get all the names that start with the letter "J" from an array of names
const names = ["John", "Jane", "Mark", "Luke", "Julia"];
const filteredNames = names.filter(name => name[0] === "J");
console.log(filteredNames); // Output: ["John", "Jane", "Julia"]

// ---------------------------------------------------------------------------------------------------------------------

// 12]map() - In this example, we create an array of numbers and use the map() method to create a new array 
// that contains every number from the original array multiplied by 2.

// Double all the values in an array of numbers
const numbers12 = [1, 2, 3, 4, 5];
const doubledNumbers = numbers12.map(num => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// ---------------------------------------------------------------------------------------------------------------------

// 13]reduce()- In this example, we create an array of numbers and use the reduce() method 
// to calculate the sum of all the numbers in the array. The accumulator starts at 0, 
// and the currentValue is added to it on each iteration until we have the total sum. 
// The final result is stored in the sum variable.

// Get the total sum of all the values in an array of numbers
const numbers13 = [1, 2, 3, 4, 5];
const sum = numbers13.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum); // Output: 15

// ----------------------------------------------------------------------------------------------------------------------

