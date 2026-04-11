//if two or more interfaces have same name then they are automatically merged into one interface with all the properties of the merged interfaces. This is called interface merging.

interface Book{
  name:string
};

interface Book{
  price:number 
}

//both the above interfaces are merged into one interface with both name and price properties

let book1:Book={
  name:"aaaa",
  price:300
};

console.log(book1.name , book1.price);


//merging means Same name declared twice → TS merges them automatically. 



//why it is exits 
// imagine this comes from a library — you can't edit it
interface Request {
  body: any;
  headers: any;
}

// you want to add your own property to it
// you can't edit library code
// so you declare same interface again 
interface Request {
  user: { id: number; name: string }  // your addition
}

// Now Request has body + headers + user 

let req: Request={
  body: "some data",
  headers:"some headers",
  user:{
    id: 1,
    name: "John Doe"
  }
};

let { body , headers , user } = req;  //destructuring

console.log(body , headers , user);


//merging also work with methods

interface User{
  name:string,
  greet():void
}
interface User{
  age:number,
   msg():void
};

let user1 :User ={
  name:"aaaa",
  greet(){
    console.log(`hello ${this.name}`);
    
  },
  age:21,
  msg(){
    console.log("this is study of interface merging");
    
  }
};

// same key same type — no error
interface Book { name: string; }
interface Book { name: string; }  // fine — same type

//  same key different type — error
// interface Book { name: string; }
// interface Book { name: number; }  // error — conflict