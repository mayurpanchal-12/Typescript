//basics

function greet(name:string):void{
  console.log(`hello ${name}`);
  
};

greet("mayur");


let a:string ="mayur";
a= "saurabh";
console.log(a);

let b = (num1:number , num2:number = 5):number=>{
        
     return (num1 + num2)
};
console.log(b(6));

let c = (num:number=6):number=>num*2 
 console.log(c());


 //type inference 

 let name = "mayur"   //string
   name = "aa"  //ok
  //  name = 9 ; //error
  console.log(name);

  let obj: {price:number , weight:number } = {
    price:21,
    weight:34
  };
  console.log(obj);
  
  
 
 //type guard 

 let value:string|number = "mayur";

   if(typeof  value === "string"){
       console.log(value.toLowerCase());       
   }