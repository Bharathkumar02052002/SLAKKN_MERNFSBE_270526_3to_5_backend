// TASK 9 : PRIMITIVE vs NON-PRIMITIVE



// ==============================
// PRIMITIVE DATA TYPES
// ==============================


// STRING
const userName = "Bharath";

console.log(userName);


// NUMBER
const age = 23;

console.log(age);


// BOOLEAN
const isLoggedIn = true;

console.log(isLoggedIn);


// UNDEFINED
let salary;

console.log(salary);


// NULL
const selectedValue = null;

console.log(selectedValue);


// BIGINT
const mobileNumber = 98765432123456789n;

console.log(mobileNumber);


// SYMBOL
const employeeId = Symbol("id");

console.log(employeeId);




// ==============================
// NON-PRIMITIVE DATA TYPES
// ==============================


// OBJECT
const user = {
    name: "Bharath",
    city: "Chennai"
};

console.log(user);




// ARRAY
const skills = ["HTML", "CSS", "JavaScript"];

console.log(skills);




// FUNCTION
const greet = () => {

    console.log("Welcome");
};

greet();





// ==============================
// PRIMITIVE TYPES
// ==============================

// String
// Number
// Boolean
// Undefined
// Null
// BigInt
// Symbol




// ==============================
// NON-PRIMITIVE TYPES
// ==============================

// Object
// Array
// Function





// ==============================
// MEMORY STORAGE
// ==============================


// Primitive Values
// Stored directly in Stack Memory

// Example
const course = "JavaScript";




// Non-Primitive Values
// Stored in Heap Memory

// Variable stores reference address

// Example
const student = {
    name: "Bharath"
};




// ==============================
// IMPORTANT DIFFERENCE
// ==============================


// Primitive -> Stores actual value

let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20




// Non-Primitive -> Stores reference

let person1 = {
    name: "Bharath"
};

let person2 = person1;

person2.name = "Kumar";

console.log(person1.name); // Kumar
console.log(person2.name); // Kumar




// Reason
// Both variables point to same object reference




// ==============================
// FINAL OUTPUT UNDERSTANDING
// ==============================


// Primitive
// Immutable
// Stored in Stack


// Non-Primitive
// Mutable
// Stored in Heap
// Reference stored in Stack