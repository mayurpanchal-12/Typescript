type Book = {
  title: string;
  year: number;
};

type Status = "success" | "error" | "loading";

const b1: Book = {
  title: "Alchemist",
  year: 1988
};

let state: Status = "success";

console.log(b1, state);