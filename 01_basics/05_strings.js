const name = "Suraj "
const githubRepos = 2

// console.log(name + githubRepos + " repos");  // this is not a good way practice to write code

// Use Backticks => String Interpolation 
// We make placeholders ${} and directly inject our variables into them.

// console.log(`Hi my name is ${name} and my Github repoCount is ${githubRepos} `);  // Modern way to write the syntax

// ----------------------------------------------------------------------------------------------------------------------------------------

// Another way to declare Strings =>
const gameName = new String("Nitro-Discord-Pro")

// console.log(gameName[0]);    // N
// console.log(gameName.__proto__);  // {} Empty Object

// console.log(gameName.length);   // 15
// console.log(gameName.toUpperCase());  // NITRODISCORDPRO => original value still remains the same => NitroDiscordPro

console.log(gameName.charAt(2));  // t
console.log(gameName.indexOf('t')); // 2

// Check out => All String Methods/Functions in Javascript by reading the docs on MDN 

// --------------------------------------------------------------------------------------------------------------------------------------

// String Slicing

// substring() function ignores negative values
const newString = gameName.substring(0, 4)
console.log(newString); // Nitr => prints till 0-3

// we can use negative values in slice() function but not in substring function
const anotherString = gameName.slice(-8, 15)
console.log(anotherString); // scordPro

// ---------------------------------------------------------------------------------------------------------------------------------------------

// .trim() method/function

const twoString = "      Contactno           "

console.log(twoString);           // this will include spaces also
console.log(twoString.trim());      // this will trim all the unwanted spaces

// .replace() method/function

const url = "https://surajpokharkar/contact%20javascript"

console.log(url.replace('%20', '-'))    // https://surajpokharkar/contact-javascript

// .includes() function
console.log(url.includes('suraj'))      // true

// .split() function
console.log(gameName.split('-'));       // [ 'Nitro', 'Discord', 'Pro' ]






