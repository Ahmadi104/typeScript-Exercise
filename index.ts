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
// console.log(greeting("Ezatullah"));
// Array
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
