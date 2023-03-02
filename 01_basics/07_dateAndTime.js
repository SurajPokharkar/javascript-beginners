// Date is in itself a Object.

let myDate = new Date()
// console.log(myDate);    // 2023-03-02T17:08:42.436Z
// console.log(myDate.toString());     // Thu Mar 02 2023 17:09:58 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); // Thu Mar 02 2023
// console.log(myDate.toISOString());  // 2023-03-02T17:12:32.349Z
// console.log(myDate.toLocaleDateString());   // 3/2/2023
// console.log(myDate.toLocaleString());       // 3/2/2023, 5:12:32 PM
// console.log(myDate.toLocaleTimeString());   // 5:12:32 PM

// console.log(typeof myDate); // object


let myCreatedDate = new Date(2023, 0, 25)   // month is starting from 0
// console.log(myCreatedDate.toDateString());  // Wed Jan 25 2023

let newCreatedDate = new Date(2023, 0, 25, 5, 3)
// console.log(newCreatedDate.toLocaleString());   // 1/25/2023, 5:03:00 AM

// Now if you want to design quizzes, polls to check whether who gave the first answer, second answer and so on...
// We use TimeStamp for that purpose

let myTimeStamp = Date.now()  
// console.log(myTimeStamp);                   // 1677778209957 msec
// console.log(newCreatedDate.getTime());      // 1674622980000 msec

// console.log(Math.round(Date.now()/1000));     // 1677778492


let newDate = new Date()
console.log(newDate);                   // 2023-03-02T17:42:09.469Z
console.log(newDate.getDate());         // 2
console.log(newDate.getDay());          // 4
console.log(newDate.getFullYear());     // 2023
console.log(newDate.getMonth());        // 2 => starting from 0. You can Add +1 to understood by user
console.log(newDate.getMilliseconds()); // 294 (random)


// ctrl+space will give you properties => Intellisense by VS code

