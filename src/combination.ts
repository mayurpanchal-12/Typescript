//type guard + type narrowing + exhaustive check
function order(kind: string | number): string | number {

   if (typeof kind === 'string' /* Type Guard */) {  
     
      // Type Narrowing: here 'kind' is string
      return `order of ${kind}`;
   }

   // Type Narrowing: here 'kind' is number
   return `${kind} number of orders`;
};


// 1. Code used to check the type of a variable is called a Type Guard
//    → typeof kind === 'string'

// 2. After the type guard, TypeScript automatically narrows the type
//    inside that block, so 'kind' becomes string (Type Narrowing)

// 3. Both cases (string & number) are handled, but this is NOT a formal
//    exhaustive check because 'never' is not used