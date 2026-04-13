//in type we use intersection operator (&) to combine multiple types together to create a new type that has all the properties of the combined types.

//non - primitive example  
    // ⚠️ Same key → narrow OR never - ✔️ Different keys → combine 
      //never - no value possible 
type person ={
  name:string;
  age:number;
}
type info= {
  weight :number;
};

let personInformation:person & info ={
  name:"aa",
  age:21,
  weight:34
};

//same props - extend as one

type cat = {
  name:string,
  weight:number
};
type Dog={
  name:string ,
  age:number
};
 

let Animal : cat & Dog ={
  name:"aaa",
  weight:2,
  age:3
}


//fn 

type logger ={
  log:()=>void
};

type withId = {
  id : number
};

let info: logger & withId ={
  id:3,
  log() {
    console.log("logging with id ");
    
  },
}

//nested obj 

 type A = {
  user: {
    name: string;
  };
};

type B = {
  user: {
    age: number;
  };
};

type C = A & B;

/* 
type C = {
  user: {
    name: string;
  } & {
    age: number;
  };
};
*/

const obj: C = {
  user: {
    name: "Mayur",
    age: 22
  }
};

//primitives extend - ✔️ Same / overlap → narrow  , ❌ No overlap → never 
          //never - no value possible 

   
type hello  = string & "hello"   // hello 
type num = number & 10  //10 
type bool = boolean & true //true

type D = string & number;   // never
type E = string & boolean;  // never
type F = number & boolean;  // never

  //union & intersection
   type a = string | number ;
   type b = boolean | string ; 

   type c  = a & b   // string


       type d = "a" | 4 | true 
       type e =  6 | true | "a"  

       type f = d & e  //true , a

       //diff - no overlap 

       type x = string ;
       type y = number ;

       type z = x & y  //never 

