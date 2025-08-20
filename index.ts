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
