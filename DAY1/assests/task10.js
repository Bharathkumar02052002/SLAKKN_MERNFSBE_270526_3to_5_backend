// TASK 10 : COMPLETE INTERVIEW SCENARIO



// ==============================
// HOISTING EXAMPLE
// ==============================

console.log(course);

// OUTPUT
// undefined

var course = "JavaScript";




// ==============================
// TDZ EXAMPLE
// ==============================

// console.log(studentName);

// OUTPUT
// ReferenceError

let studentName = "Bharath";




// ==============================
// GLOBAL SCOPE
// ==============================

const company = "SLA";




// ==============================
// FUNCTION
// ==============================

const startTraining = () => {

    // FUNCTION SCOPE

    var trainer = "Sudhakar";

    let batch = "Frontend Development";

    console.log(company);

    console.log(trainer);

    console.log(batch);




    // ==============================
    // BLOCK SCOPE
    // ==============================

    if (true) {

        const topic = "JavaScript";

        console.log(topic);




        // ==============================
        // LEXICAL SCOPE
        // ==============================

        const taskSession = () => {

            console.log(company);

            console.log(trainer);

            console.log(batch);

            console.log(topic);




            // ==============================
            // TYPE CONVERSION
            // ==============================

            console.log("10" + 5);

            console.log(true + 1);

            console.log(Number("100"));

        };



        // FUNCTION CALL

        taskSession();
    }
};




// FUNCTION CALL

startTraining();





// =======================================
// MEMORY CREATION PHASE
// =======================================


// 1. company stored in memory

// 2. course declared with undefined

// 3. studentName created in TDZ

// 4. startTraining stored as function

// 5. taskSession stored during function execution





// =======================================
// EXECUTION PHASE
// =======================================


// console.log(course)
// => undefined

// course = "JavaScript"

// studentName initialized

// startTraining() called

// Function Execution Context created

// if block executed

// taskSession() called

// Inner Function Execution Context created





// =======================================
// SCOPE CREATION
// =======================================


// Global Scope
//    ↓
// startTraining Function Scope
//    ↓
// if Block Scope
//    ↓
// taskSession Lexical Scope





// =======================================
// VARIABLE LOOKUP PROCESS
// =======================================


// taskSession searches variables like:

// topic -> current scope ✅

// batch -> outer function scope ✅

// trainer -> outer function scope ✅

// company -> global scope ✅





// =======================================
// FINAL OUTPUT
// =======================================


// undefined

// SLA
// Sudhakar
// Frontend Development
// JavaScript

// SLA
// Sudhakar
// Frontend Development
// JavaScript

// 105
// 2
// 100