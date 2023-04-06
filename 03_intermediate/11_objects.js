// Objects is the central and spinal chord of Javascript
// When you will see how API looks like, you will see it's moreover looks like object

// Objects are a bit of optimized compared to array.
// In the array surely you can grab the values and pull the values with numbers as an index
// But in Object => you can change/delete the values, it doesn't affect the performance much
// because everything is accessed by => "key"
// " . "  dot feature is used access an object


let users = {
    firstName : "Suraj",
    lastName : "Pokharkar",
    loginCount : 20,
    isLoggedInGoogle : true,
    country : "India",
    state : "Maharashtra",
    city : "Pune",
    code : 9876543210

}


console.log(users);
console.log(users.city);




// Assignment=>
// Define an object for an iPhone 
// Insert your own properties(eg: features of the iPhone)

let iPhone = {
    iphoneModelName : "iPhone 14 Pro ",
    OperatingSystem : "iOS 16",
    Chip : "A16 Bionic chip",
    Camera : "48MP Main | 12MP Ultrawide | 12MP 2x Telephoto",
    SIMCard : " Dual(nano and e-SIM)",
    Sensors : " Face ID | LiDAR Scanner | Barometer | High dynamic range gyro | Proximity sensor | Dual ambient light sensors",
    MagSafe : " Wireless Charging upto 15W | Accessory Identification NFC | Magnet Array",
    Size : " Weight: 206 grams (7.27 ounces) ",
    Display : " Super Retina XDR display(OLED) | 2556x1179-pixel resolution at 460 ppi | 15.54 cm / 6.1 inch (diagonal)",
    Safety : " Emergency SOS | Crash Detection",
    Price :  129900.00
}

console.table(iPhone)

