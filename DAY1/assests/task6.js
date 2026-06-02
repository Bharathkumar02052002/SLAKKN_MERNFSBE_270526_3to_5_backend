console.log(username);

let username = "Sudhan";

// Output => ReferenceError: Cannot access 'username' before initialization

// Why This Error Happens

// Because of:

// TDZ (Temporal Dead Zone)
// Important Point

// let variables are hoisted, but they are NOT initialized immediately.