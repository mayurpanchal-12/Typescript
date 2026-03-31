/**
 ---Type Inference in TypeScript
 - When we do not explicitly specify a data type,
 - TypeScript automatically determines (infers) the type
 - based on the value assigned to the variable.
 */

// TypeScript infers 'msg' as a string
let msg = "hello world";

/**
        With 'let':
  - The value can be changed
  - But the data type must remain the same
 */
console.log(typeof msg, msg);

// Reassigning with same data type (string) → allowed
msg = "hello mayur";
console.log(typeof msg, msg);

// Reassigning with different data type → NOT allowed
// msg = 23;  Error: Type 'number' is not assignable to type 'string'


/**
         Using 'const'
  TypeScript infers the type here as a number (more specifically, a literal type).
  - Value cannot be reassigned
  - Type is fixed as well
 */
const a = 10;

console.log(typeof a, a);

// Reassigning a const variable → NOT allowed
// a = 23; ❌ Error: Cannot assign to 'a' because it is a constant