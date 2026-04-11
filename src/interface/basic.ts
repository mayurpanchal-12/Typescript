//1.interface used to define shape of object , class 
// 2.by using interface we can only define shap eof object not other data types like string, number, boolean etc
//3.interface does not support union means properties , keys inside interface can be union but interface itself can not be union 
//4.interface supports merging 
//5.use extends keyword to extend interface


// interface defination always should be look like object not like primitive defination etc 
 

//without interface object is created like this
let book1:{name:string , auther:string} ={
     name :"aaaa",
     auther : "bb"
};

let book2: {name:string , auther:string}={
  name:"bbbb",
  auther:"cc"
}


//with interface like this 
  
interface Book{
  name:string,
  auther:string
};

let book3:Book ={
  name:"dddd",
  auther:"ee"
};

let book4:Book ={
  name:"fff",
  auther:"ff"
};

console.log(book1);
console.log(book2);
console.log(book3);
console.log(book4);


//properties , keys can be of union 

interface BookInfo{
  name:string
  price:string | number   //union type of key 
  
}; 

//interface itself can not be union 

// interface id = string | number //err 