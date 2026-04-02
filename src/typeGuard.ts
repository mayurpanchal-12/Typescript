let value :string | number | boolean = "hello";

 if (typeof value === "string" /* Type Guard */) {
     console.log(value.toUpperCase()); //ts know value is string here so it is type narrowing and we can use string methods   
 };

 //truthy checks 
    // false values : false, 0, "", null, undefined, NaN
    // truthy values : all values except false values
        // if block will execute only if value is truthy
 let data: string | undefined = "hello";

 if (data) {  // Type Guard for truthy values
     console.log(data.length); //ts know data is string here so it is type narrowing and we can use string methods   
 };


 //instanceof type guard
let value1: Date | string = new Date();

if (value1 instanceof Date) { // Type Guard for Date instance
   console.log(value1.getFullYear()); // ✅ Date
}