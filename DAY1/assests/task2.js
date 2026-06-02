// GLOBAL SCOPE
const appName = "Swiggy";

console.log("Outside Function - App Name:", appName);

 // FUNCTION SCOPE
function placeOrder() {

    let userName = "Bharath";

    console.log("Inside Function - User Name:", userName);
    console.log("Inside Function - App Name:", appName);

 // BLOCK SCOPE
    if (true) {

        const discountCode = "FOOD50";

        console.log("Inside Block - Discount Code:", discountCode);
        console.log("Inside Block - User Name:", userName);
        console.log("Inside Block - App Name:", appName);
    }

    
    // console.log(discountCode); - Error
}

placeOrder();


// console.log(userName); - Error
// console.log(discountCode); - Error