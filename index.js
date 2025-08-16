"use strict";
// function greeting(name: string): string {
//   return `Hello My Friend ${name}`;
// }
Object.defineProperty(exports, "__esModule", { value: true });
// Uninons:
function getTicketInfo(id) {
    if (typeof id === "string") {
        var parsedId = id.split("-")[1];
        if (!parsedId) {
            return "invalid ticket number";
        }
        var numberId = parseInt(parsedId);
        return "Processing ticket :".concat(numberId);
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
function formatLabels() {
    var labels = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        labels[_i] = arguments[_i];
    }
    if (labels.length === 0)
        return "No Labels";
    if (labels.length === 1)
        return "Labels: ".concat(labels[0]);
    return "Labels: ".concat(labels.join(", "));
}
// Evolning Any[]
function collectSupportData(id, resolved) {
    var supportData = [];
    supportData.push("Support session started");
    supportData.push(id);
    supportData.push(resolved);
    return supportData;
}
function processMail(mail) {
    return "From ".concat(mail.from, "\n  To: ").concat(mail.to, "\n  Subject: ").concat(mail.urgent ? "[Urgent]" : "").concat(mail.subject, "\n body: ").concat(mail.body, "\n  ");
}
