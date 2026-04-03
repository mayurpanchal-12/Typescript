class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet(): void {
    console.log("Hello " + this.name);
  }
}

class Student extends Person {
  rollNo: number;

  constructor(name: string, rollNo: number) {
    super(name);
    this.rollNo = rollNo;
  }
}

const s1 = new Student("Mayur", 101);
s1.greet();
console.log(s1.rollNo);