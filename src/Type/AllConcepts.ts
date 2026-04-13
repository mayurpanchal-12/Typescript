// type is used to create shape of objects, primitives, unions, tuples, etc
// it is more flexible than interface
// can hold primitives, unions, intersections, tuples, functions
// supports union (|) and intersection (&)
// does NOT support declaration merging (duplicate type name gives error)
// extends using & (intersection)
// duplicate keys while intersecting:
//   - same type → ok (narrowed)
//   - different type → becomes never
// gives error for missing properties during object creation
// extra properties allowed only in some cases (less strict than interface in certain scenarios)

type Cat = {
  name: string
};

type Dog = {
  colour: string
};

type Bull = {
  weight: number | string
};

// extending using &
type Animal = Cat & Dog & Bull & {
  colour: string,   // same key + same type → no error
  breed: string
};

let AnimalInfo: Animal = {
  name: 'aaa',
  colour: "red",
  weight: 65,
  breed: "ccc"
};

let { name, colour, weight, breed } = AnimalInfo;


// 🔥 extra examples (only possible with type)

// union
type Status = "pass" | "fail";

// primitive
type Id = string | number;

// function type
type Add = (a: number, b: number) => number;

const sum: Add = (a, b) => a + b;


// ⚠️ conflict example
type A = { name: string };
type B = { name: number };

type C = A & B; 
// { name: never } ❌ impossible type