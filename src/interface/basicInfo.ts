// interface always gives error for 
   // 1. duplicate key  in interface defination and while creating object
   // 2.extra key  while creating object
   // 3. missing key while creating object
   // 4. passing wrong data type while creating object

  
  interface Person{
    name:string,
    age:number,
    status:string
  };

  let person1:Person ={
       name:"aaaa",
       age: 34,
       status:"married",
         //no extra key- value , missing key ; duplicate key ; wrong data type for key 
  };

  console.log(person1);
  let {name , age , status } = person1;   //destructuring 
     console.log(name , age , status);


/*2nd example  err- missing key 

interface BookInfo{
  name:string
  price:string | number 

};
let book1:BookInfo={
    name:"aaaa"
    //err as price key from BookInfo not used
}
    console.log(book1.name);
    */

/* 3rd ex   err - duplication key 
interface Book{
  name:string,
  auther:string,
  name:number   err as duplicate key
}
     */

/* 4th example err- extra key in object

interface Book{
  name:string
};

let b:Book  ={
  name:"aaa",
  price:34,  //err- extra key directly use
}
  */


/* 5th ex  err- passing value of wrong data type 
interface Book{
  name:string,
  price:number
};

let bookInfo:Book = {
    name:"aaa",
    price:"340"  //err - passing value to key with wrong data type

}
  */