//interface used to create shape of objects and classes 
//they can not hold anything else like primitives 
// they can not be union but supports union inside key ;
//gives error for duplicate , extra , missing property during object creation from interface , and during interface defination
// suports merging ; same name merge automaticaly 
// extends using extend key 
// while extending duplicate keys but same data type no err;
//extend errors are same as normal interface errors  

interface Cat{
  name:string
};

interface Dog{
  colour:string
};
interface Bull {
  weight: number | string
};


interface Animal extends Cat , Dog , Bull {
   colour:string,    //no err as same data type and key 
   breed:string
};

let AnimalInfo:Animal = {
  name:'aaa',
  colour:"red",
  weight:65,
  breed:"ccc"
};

let {name , colour , weight , breed} = AnimalInfo