interface Person {
  name: string;
  greet(): void;
}

class Student implements Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet(): void {
    console.log("Hello " + this.name);
  }
}

const s1 = new Student("Mayur");
s1.greet();