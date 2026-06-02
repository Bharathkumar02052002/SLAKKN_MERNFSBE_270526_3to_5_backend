// TASK 7 : EXECUTION CONTEXT

const greet = () => {

    console.log("Hello");
};

greet();


// OUTPUT
// Hello



// EXECUTION FLOW

// 1. Global Execution Context Created

// Memory Creation Phase
// greet -> function stored in memory



// 2. Execution Phase

// greet() is called



// 3. Function Execution Context Created

// console.log("Hello");



// 4. Function Execution Completed

// Function Execution Context removed from Call Stack



// 5. Program Execution Completed




// CALL STACK FLOW

// | greet() |
// | Global  |


// After Execution

// | Global |


// Program End

// Call Stack Empty