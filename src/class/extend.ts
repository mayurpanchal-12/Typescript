class Book{
  name:string;
  author:string;
  constructor(name:string , author:string){
    this.name = name;
    this.author = author
  };
  display():void{
     console.log(this.name + this.author);
     
  }
};


class P extends Book {
  price :number
  constructor(price:number , name:string , author:string){
    super(name , author)
    this.price = price
  };
  display(): void {
    super.display();
    console.log(this.price);
    
  }
};

let b = new P(320 , "aaaa" , "jjjjj")
b.display()