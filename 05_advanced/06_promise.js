const uno = () => {
    return "I am one";
}

// const dos = () => {
//     setTimeout( () => {
//         return "I am Two";
//     } , 3000)
    
// }

const dos = () => {
   return new Promise((resolve, reject) => {
    setTimeout(() => {
                resolve ("I am Two");
            } , 3000)
        
   })
    
}

const tres = () => {
    return "I am three";
}

// async() and await()
// In this below function there could be multiple await() calls
const callMe = async() => {
        let valOne = uno();
        console.log(valOne);
        
        let valTwo = await dos();
        console.log(valTwo);
        
        let valThree = tres();
        console.log(valThree);


}

callMe()