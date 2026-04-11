class Car{
name:string; //objects keys shape
model:number;
price:number;
  constructor(name:string , model:number , price:number /*parametrs shape*/){
      this.name = name;
      this.model = model;
      this.price = price;
}

display():void{
  console.log(`${this.name} and is of ${this.model} and price is ${this.price}`);
  
}
};

let car1 = new Car ("maruti" , 2014 , 4000);
let car2 = new Car("tata" , 2020 , 45000);

car1.display();
car2.display();