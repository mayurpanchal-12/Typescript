let a;
 a="name";
 a=56;
 console.log(a);  // will log 56 as a is of type any and can hold any type of value 

 let b:number;
  b=56;
  console.log(b);  // will log 56 as b is of type number and can hold only number type of value 
  // b="name";  // will give error as "name" is not of type number
  b=78;  // will log 78 as b is of type number and can hold only number type of value
  console.log(b);  // will log 78

  let name:string|number;
  name="mayur";
  console.log(name);
  name=56;
  console.log(name);  // will log 56 as name is of type string|number and can hold both string and number type of value
  // name=true;  // will give error as true is not of type string or number

  