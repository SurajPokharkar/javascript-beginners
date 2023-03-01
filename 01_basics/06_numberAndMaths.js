const score = 500 // Here JS automatically detected the type of variable=> number
// console.log(score); // 500


// You can also explicitly define that you want only the datatype of number
const anotherScore =new Number(1000) 
// console.log(anotherScore);  // [Number: 1000]

// .toString() method
// console.log(anotherScore.toString().length);   // converted number to string and displayed it's length => 4

// .toFixed() method => fixed precision value
// console.log(anotherScore.toFixed(2));   // 1000.00

// .toPrecision() method
const otherNumber = 123.8900
// console.log(otherNumber.toPrecision(4)); // 123.9


// Sometimes we get difficulty in calcuating 0's in a number for example= 1000000
// .toLocaleString() method
const hundreds = 1000000 
// console.log(hundreds.toLocaleString()); // According to US standards it displays => 1,000,000

// to write those values according to INDIAN standards you can use=>
// console.log(hundreds.toLocaleString('en-IN')); // Indian standard number system => 10,00,000


// ------------------------------------ MATHS ------------------------------------------------------------------------------

// Math library

// console.log(Math);  // Object [Math] {}

// // Math.abs() Function=> absolute value => convert -ve values into +ve and not vice versa!!!
// console.log(Math.abs(-4));  // 4
// console.log(Math.abs(+4));  // 4

// // Math.round() Function=> round off value
// console.log(Math.round(4.4));   // 4
// console.log(Math.round(4.6));   // 5

// // Math.ceil() Function=> highest value 
// console.log(Math.ceil(5.5));    // 6

// // Math.floor() Function=> lowest value 
// console.log(Math.floor(5.7));   // 5

// // Math.min() => outputs min value in array
// console.log(Math.min(4,3,2,1)); // 1

// // Math.max() => outputs max value in array
// console.log(Math.max(4,3,2,1)); // 4

// Math.random() => outputs random values between 0 and 1 always
//console.log(Math.random());

// In problem statements sometimes you need values in some range 
// For eg=> dice values from 1-6 or any other values you can consider

// console.log(Math.random()*10);  // digit will shift by 1 if multiplied by 10

// sometimes the value could also be 0.0123456 === 0 
// To avoid this we add +1

// console.log((Math.random()*10) + 1); // this will guarantee min value will be 1 and not 0
// Values of your output will depend on how much big number you have multiplied it

// now let's make that value lowest to get a single number using floor() function
// console.log(Math.floor(Math.random()*10) + 1); // outputs lowest value


const min = 10
const max = 20

// Now here we want values in between 10 and 20 only

console.log(Math.floor(Math.random() * (max - min + 1)) + min)  
