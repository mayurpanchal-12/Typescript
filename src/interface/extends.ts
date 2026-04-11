//extends property is used to get property fron another interface in current interface so it reduce extra code 

//ex 1
interface Animal {
    name:string,
};

let animal1:Animal={
  name:"bull"
};

console.log(animal1.name);


interface dog{
  name:string,
  age:number
}
//now here in interface dog we write name key ; which is also used in animal interface so here in dog interface we need to define name again to avoid this kind of extra work we use extends key word 

//extends keyword 

interface Book {
  name:string
};

let book1:Book = {
  name : "aaa"
};

interface BookInfo extends Book {
  price:number ;
    // now by using extends this interface have two keys as name from Book and price which is in this interface 
};

let book2 :BookInfo ={
  name : "bbb",   
  price:340
}
console.log(book2);


//extending multiple interfaces 

interface Bull{
  name:string
};

interface Cat{
  age :number | string 

};
interface Dog{
  bark():void,
  
};

interface Animal1 extends Bull , Cat , Dog{
  breed: string;
}

let animal2:Animal1={
    name:"aaa",
    age:7,
    bark(){
       console.log("loudly");
       
    },
    breed:"fff"
};

let {name , age , breed } = animal2;
console.log(name , age , breed);
//interface with extends also give same err as interface without extends like missing key , extra key , duplicate key , wrong data type for key
// but if dupliacate keys with same type the no err and also if duplicate keys with different data type then err as well