/**
       Type Annotation in TypeScript
  - Type Annotation means explicitly defining the data type
  - of variables, function parameters, and return values.
 
   -It gives better control and avoids unexpected type issues.
 */


         // Variables

// Explicitly defining type as string
let name: string = "Mayur";

/**
  Since we are using 'let':
  - Value can be reassigned
  - But it must remain a string
 */
name = "Mayur Panchal";
// name = 123;  Error: number not assignable to string


// Number type
let a: number = 20;
a = 23; // ✅ allowed
// a = "hello";  Error

console.log(typeof a, a);


         // Constants

// Boolean type
const b: boolean = true;

/**
 * With 'const':
  - Value cannot be reassigned
  - Type is fixed
 */
// b = false;  Error


      //  Functions 

function sum(num1: number, num2: number): number {
  return num1 + num2;
}// Accepts numbers → returns number


let subtraction = (num1: number, num2: number): number => {
  if (num1 > num2) {
    return num1 - num2;
  }
  return num2 - num1;
};


let msg = (): string => "hello";

function ex():void{
  console.log("hello this returns nothing ");
}


        //  Objects

let obj: { name: string; age: number } = {
  name: "mayur",
  age: 21
};

/**
  - Object structure is fixed:
  - Cannot add/remove properties ; so for this we can use interface or dynamic method
  - Types must match
 */
// obj.age = "21"; ❌ Error

  //dynamic method
  let user: { [key: string]: any } = {
  name: "Mayur"
};

user.age = 21;      //add
user.city = "Mumbai";  //add



     //   Arrays

let numbers: number[] = [2, 5, 6, 9];

/**
 * Only numbers are allowed
 */
// numbers.push("hello");  Error