// Calculate Discount on a Product


let sellingPrice = 199
let listingPrice = 799

// Formula =>  D = ((L - S)/L) * 100
let discountPercent = ((listingPrice - sellingPrice)/listingPrice) * 100

let displayDiscount = Math.round(discountPercent)
console.log(displayDiscount + "%OFF");   // 75



