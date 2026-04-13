//type can be union also it supports data types as union 
//interface can not be of union they only support union as data type for properties

type price = number  | "23"
  let mango:price = 20   //number 
  let apple:price = 100 //number
  let banana:price = "23"  //defined
   console.log(mango , banana , apple);

     apple = 34  //can be changeas it is let 
      apple = "23"  //change use defined


