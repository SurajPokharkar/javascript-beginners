// Array

// an array is a special data type that allows you to store a collection of values (elements) of any data type 
// (such as numbers, strings, objects, etc.) in a single variable.

// An array is defined using square brackets [], with each element separated by a comma.

let numbers = [1, 2, 3, 4, 5];

console.log(numbers); // outputs [ 1, 2, 3, 4, 5 ]

let firstNumber = numbers[0];
console.log(firstNumber);    // 1

// You can also modify elements in an array by assigning new values to their respective indices.
// For example, to change the value of the second element in the numbers array:
numbers[1] = 10
console.log(numbers);   // [ 1, 10, 3, 4, 5 ]


// You can also add or remove elements from an array using various methods such as push(), pop(), shift(), and unshift().

// For example, to add a new element to the end of the numbers array:
// push() method
numbers.push(25)
console.log(numbers);   // [ 1, 10, 3, 4, 5, 25 ]

// And to remove the last element from the numbers array:
// pop() method
numbers.pop() 
console.log(numbers);   // [ 1, 10, 3, 4, 5 ]


// unshift() method => Adds value at the starting of an array. Cost expensive operation as it requires shifting of all elements in array
numbers.unshift("New Value")
console.log(numbers);   // [ 'New Value', 1, 10, 3, 4, 5 ]

// shift() method => Deletes the value from the start of the array
numbers.shift()
console.log(numbers);   // [ 1, 10, 3, 4, 5 ]



// -----------------------------------------------------------------------------------
// Another way to declare array=>

const myArr2 = new Array(1, 2, 3, 4, 5) // It would automatically add square brackets
console.log(myArr2[5]);  // undefined








