//type not supports merging but interface supports merging

type obj = {
  name:string;
  age:number
};
// type obj ={
//   weight:number;
// }  //err as type does not support merging


//interface supports merging
interface obj2{
  name:string;
  age:number;
};

interface obj2{
  weight:number
};


let obj:obj2 ={
  name:"aa",
  age:21,
  weight:30
}