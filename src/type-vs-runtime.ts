let orders = ['12', '34', '56'];

let currentOrder;  
// TypeScript infers type as `any` (implicit any)
// At runtime, since no value is assigned, it is `undefined`

console.log(typeof(currentOrder)); // "undefined"

for (let order of orders) {
   if (order === '34') {
      currentOrder = order;  
      // Runtime value becomes a string ("34")
      // But TypeScript type is still `any` (no type safety)
      break;
   }
}

console.log(typeof(currentOrder), currentOrder); //if value found in orders, it will be   "string", "34" else "undefined", undefined;

//so idealy avoid any as we can ;