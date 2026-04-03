class Book {
  title: string;
  year: number;

  constructor(title: string, year: number) {
    this.title = title;
    this.year = year;
  }

  display(): void {
    console.log(this.title, this.year);
  }
}

const b1 = new Book("Alchemist", 1988);
b1.display();