const age: number = 100;
const name: string = "ezatullah";
const isActive: boolean = true;
// function greeting(name: string lastname?:string): string {
//   return `Hello My Friend ${name}`;
// }

// Uninons:
function getTicketInfo(id: string | number) {
  if (typeof id === "string") {
    const parsedId = id.split("-")[1];
    if (!parsedId) {
      return `invalid ticket number`;
    }
    const numberId = parseInt(parsedId);
    return `Processing ticket :${numberId}`;
  }
}
console.log(getTicketInfo("ticket-2"));

// const getName =()=> void {
// return nothing
// }

// console.log(greeting("Ezatullah"));

// Array
const myScore: number[] = [13, 12, 22, 32];
const genericList: Array<string> = ["a", "b", "c"];
let tuple: [string, number, boolean] = ["hello", 100, false];

let names: string[] = ["Ali", "Ahmad"];
for (const item of names) {
  console.log(item);
}

// function averageScore(rating: number[]) {
//   if (rating.length === 0) return 0;
//   return (
//     rating.reduce((rating, sum) => {
//       return rating + sum;
//     }, 0) / rating.length
//   );
// }
// console.log(averageScore([2, 4]));

// Heterogeneous Array...
// function interpolateComment(
//   id: string,
//   comment: string,
//   comments: (string | number)[]
// ) {
//   const index = comments.findIndex((c) => c === id);
//   if (index === -1) return;
//   comments[index] = comment;
// }

// console.log(

// );

// Tuple
// descriping a tuple is like an array just with specifice element type
type Point = [number, number];
function getDistanceFromOrigin([x, y]: Point): number {
  return Math.sqrt(x * x + y * y);
}
const p1: Point = [3, 4];
console.log(getDistanceFromOrigin(p1));

// Enum : is special type that are constant uder a name
enum Direction {
  Up,
  down,
  left,
  right,
}
console.log(Direction.Up); //output= 0
enum Roles {
  Admin = "ADMIM",
  User = "USER",
  Guest = "GUESt",
}
enum Status {
  OK = 200,
  NotFound = 404,
}
function showStatus(status: Status) {
  if (status === Status.OK) {
    return "Request was successful";
  } else if (status === Status.NotFound) {
    return "Request Not found";
  } else {
    return "Unknown status code";
  }
}
console.log(showStatus(Status.OK));

// Any
// let data: any = 13;
// data = "hello";
// data = true;
let data: number | string;
function printData(data: string | number) {
  if (typeof data === "string") {
    console.log("string value", data.toUpperCase());
  } else {
    console.log("Number value", data * 2);
  }
}

//Void
function getArray(arr: any[]): void {
  arr.forEach((item, index) => {
    console.log(`index:${index}-value:${item}`);
  });
}
console.log(getArray([13, 14, 12, 15]));

// Rest parameter
function formatLabels(...labels: string[]) {
  if (labels.length === 0) return "No Labels";
  if (labels.length === 1) return `Labels: ${labels[0]}`;
  return `Labels: ${labels.join(", ")}`;
}

// Evolning Any[]
function collectSupportData(id: number, resolved: boolean) {
  const supportData = [];
  supportData.push("Support session started");
  supportData.push(id);
  supportData.push(resolved);
  return supportData;
}

// Object Literal Types
export type Mali = {
  from: string;
  to: string[];
  subject: string;
  body: string;
  urgent: boolean;
};
function processMail(mail: Mali) {
  return `From ${mail.from}
  To: ${mail.to}
  Subject: ${mail.urgent ? "[Urgent]" : ""}${mail.subject}
 body: ${mail.body}
  `;
}
type Car = {
  type: string;
  modle: string;
  year: number;
};
//const cars: Car = { type: "bmw", modle: "newmodel", year: 2018 };
const cars: { type: string; modle: string; year: number } = {
  type: "corlla",
  modle: "new",
  year: 2002,
};

//Type Assertions
let someValue: unknown = "this is a string";
const strLength: number = (someValue as string).length;
console.log(strLength);

//Extra proporties: it means that are not defined in the type or interface.

//Optional object properties:
type Supperhero = {
  name: string;
  age: number;
  email?: string;
};

//Discriminted Union : is a union of object types that share a common property
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; side: number };

// Set : store unique value
const mySet = new Set<number>();
mySet.add(2);
mySet.add(23);

//Map: A Map is a built in object that stores key value pairs
const myMap = new Map<string, number>();
myMap.set("first", 1);
myMap.set("second", 2);

//Narrowing
function getPadding(pading: number | string, input: string): string {
  if (typeof pading === "number") {
    return " ".repeat(pading) + input;
  }
  return pading + input;
}

//Type Predicate
type Fish = { swin: () => void };
type Bird = { fly: () => void };
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swin !== undefined;
}
// Discriminated Unions : in every type exist a common property
type Shapes =
  | { kind: "circle"; radius: number }
  | { kind: "square"; side: number }
  | { kind: "rectangle"; width: number; height: number };
function area(shape: Shapes): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side * shape.side;
    case "rectangle":
      return shape.width * shape.height;

    default:
      return 0;
  }
}

// In Opreator Narrowing
type Dog = { bark: () => void };
type Cat = { meow: () => void };
function speak(animal: Dog | Cat) {
  if ("bark" in animal) {
    animal.bark();
  } else {
    animal.meow();
  }
}
// Extende Interface
interface Person {
  name: string;
  age: number;
  country?: string;
}
interface Employee extends Person {
  empolyeeId: number;
}
const emp: Employee = {
  name: "ali",
  age: 23,
  empolyeeId: 110,
};
console.log(emp);

// Keyof type operator
type PersonKeys = keyof Person;
const person = { name: "Mahdi", age: 25, country: "Aghanistan" };
type PersonType = typeof person;
//Indexes Access Type
type nametype = Person["name"];

//Conditional Type
type isNumber<T> = T extends number ? "yes Number" : "no Number";
type Test1 = isNumber<12>; //yes Number
type Test2 = isNumber<"1">; // no Number
