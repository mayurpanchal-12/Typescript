class Book {
  name:string;
  author:string;
  price:string | number;
  constructor(name:string , author:string , price:string | number){
    this.name = name;
    this.author =  author;
    this.price = price;
  };
  display(){
    console.log(this.name + this.author + this.price);
    
  }
};

let book1 = new Book ("aaa" , "abc" , 200)