//we can assign multiple data types to a variable using union types

let age:string | number = 21
   console.log(typeof(age),age);
 
  age="21";
  console.log(typeof(age),age);

//const 
const result:string | boolean = false;
  console.log(typeof(result),result);
  //result value can not be reasign as it is const 

//funtion 

function msg(num1:number , num2:number):string | number{
    if(num1>num2){
      return `${num1} is greater`
    }
    return num2
};
 


//object 

let item:{name:string |number }={
  name: 21
}
 

//array 

let arr :(number | string | boolean)[] = ["hello" , true , 4]
  //// Array can contain values of multiple allowed types
   

let a:number|string|boolean[] = 5;
/*   a can be:
number
string
OR array of boolean 
*/
console.log(typeof(a),a);


  

   