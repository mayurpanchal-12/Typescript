// Shaping class using interface = contract
// Every class using this interface must follow same shape
// now ervey class using interface must have all keys of interface otherwise error ; class can be have extra keys but atleast it needs interface propertise

interface Animal {
  name: string;
  age: number;
}

class Dog implements Animal {
  name: string;
  age: number;
  animalBreed : string

  constructor(name: string, age: number , breed:string) {
    this.name = name;
    this.age = age; 
    this.animalBreed = breed
  }
} ;

let dog = new Dog('aa' , 2 ,"cc");

