//type is used to give another nick name to any data type like string , number , boolean , object etc
//type can be union but interface can not be union 
//type can not be merged like interface 
//type used to shape primitives as well as non primitives but interface used to shape only non primitives
//Types exist only at compile time, not at runtime

type name = string;
//now whereever i assign name then it should be string

let a:name = "aaa";
const b:name = "bbb";

console.log(typeof a);
console.log(typeof b);

//type for obj 
type obj ={
  name:string,
  age:number
}

let man:obj={
  name:"aaaa",
  age:34
};

type fn = (a:number , b:number) => number;  //type for function

let add:fn = (x,y) => x+y;

console.log(add(4,5));