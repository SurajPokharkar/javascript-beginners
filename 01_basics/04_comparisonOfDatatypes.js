// console.log(2 > 1);      
// console.log(2 < 1);     
// console.log(2 >= 1);     
// console.log(2 <= 1);
// console.log(2 != 1);


// Above examples are comparisons of **same datatypes**...Problem arises when we compare **different datatypes**

// Comparing different datatypes
// console.log("2" > 1);       // true
// console.log("02" > 1);      // true

// -----------------------------------------------------------------------------------------------------------------------------

// console.log(null == 0);     // false
// console.log(null > 0);      // false
// console.log(null >= 0);     // true
// console.log(null <= 0);     // true

// This behaviour of Javascript looks tricky...

/* The reason is that an equality check ==   and   Comparisons >, <, >=, <=   Work differently
    Comparisons convert null to a number, treating it as 0
    That's why
    line(18) null >= 0 is true   and 
    line(17) null >  0 is false 
*/

// ----------------------------------------------------------------------------------------------------------------------------



// ===  triple equals => Strict check

console.log("2" === 2); // false => because its a strict check- conversion will not take place of two diff datatypes.
console.log(2 === 2);   // true


// ---------------------------------------------------------------------------------------------------------------------------



// ******SUMMARY*******
// Avoid writing comparisons for different datatypes. It may lead to inconsistency...

