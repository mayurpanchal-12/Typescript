//types gives errors same as interface
  //1. duplicate key  in type  defination and while using type
  //2.extra key  while using type
  //3. missing key while using type
  //4. passing wrong data type while using type


//err - wrong data type
  type name = string;
  //  let a:name = 23 //err as wrong data type pass
    let a:name = "aa"
     console.log(a);

     

  //err - missing propty while using type 
  type obj ={
    name:string,
    age:number
  }

  // let info:obj={
  //   name:"aaa"
  //    //err as missing property of type 
  // }
     
  let info:obj ={
    name:'aaa',
    age:23
  }

  //err - duplicate 

  type objj = {
    name:string;
    age :number,
    // age:number  //err duplicate while type creation
  } 
let b:objj ={
   name:"bbb",
   age:23,
  //  age:24  //err - duplicate prop use
}
   console.log(b.age , b.name);


   //err - extra prop use 

   type obbj ={
    name:string
   };

   let x:obbj={
    name:"aaa",
    // age:23  //err - extra prop
   }
   