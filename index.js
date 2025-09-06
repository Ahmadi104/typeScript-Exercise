"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var age = 100;
var name = "ezatullah";
var isActive = true;
// function greeting(name: string lastname?:string): string {
//   return `Hello My Friend ${name}`;
// }
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
// const getName =()=> void {
// return nothing
// }
// console.log(greeting("Ezatullah"));
// Array
var myScore = [13, 12, 22, 32];
var genericList = ["a", "b", "c"];
var tuple = ["hello", 100, false];
var names = ["Ali", "Ahmad"];
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var item = names_1[_i];
    console.log(item);
}
function getDistanceFromOrigin(_a) {
    var x = _a[0], y = _a[1];
    return Math.sqrt(x * x + y * y);
}
var p1 = [3, 4];
console.log(getDistanceFromOrigin(p1));
// Enum : is special type that are constant uder a name
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["down"] = 1] = "down";
    Direction[Direction["left"] = 2] = "left";
    Direction[Direction["right"] = 3] = "right";
})(Direction || (Direction = {}));
console.log(Direction.Up); //output= 0
var Roles;
(function (Roles) {
    Roles["Admin"] = "ADMIM";
    Roles["User"] = "USER";
    Roles["Guest"] = "GUESt";
})(Roles || (Roles = {}));
var Status;
(function (Status) {
    Status[Status["OK"] = 200] = "OK";
    Status[Status["NotFound"] = 404] = "NotFound";
})(Status || (Status = {}));
function showStatus(status) {
    if (status === Status.OK) {
        return "Request was successful";
    }
    else if (status === Status.NotFound) {
        return "Request Not found";
    }
    else {
        return "Unknown status code";
    }
}
console.log(showStatus(Status.OK));
// Any
// let data: any = 13;
// data = "hello";
// data = true;
var data;
function printData(data) {
    if (typeof data === "string") {
        console.log("string value", data.toUpperCase());
    }
    else {
        console.log("Number value", data * 2);
    }
}
//Void
function getArray(arr) {
    arr.forEach(function (item, index) {
        console.log("index:".concat(index, "-value:").concat(item));
    });
}
console.log(getArray([13, 14, 12, 15]));
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
// Set : store unique value
var mySet = new Set();
mySet.add(2);
mySet.add(23);
//Map: A Map is a built in object that stores key value pairs
var myMap = new Map();
myMap.set("first", 1);
myMap.set("second", 2);
//Narrowing
function getPadding(pading, input) {
    if (typeof pading === "number") {
        return " ".repeat(pading) + input;
    }
    return pading + input;
}
