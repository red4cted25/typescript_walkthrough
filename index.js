"use strict";
var firstName = "Nico";
var coolio = true;
var age = 17;
let greeting = "Welcome to Jurassic Park";
// age = "Month"
firstName = "Angie";
function add(n1, n2) {
    return n1 + n2;
}
console.log(add(152689, 524189));
function printResult(num) {
    console.log('Result: ' + num);
    return num;
}
const addArrow = (n1, n2) => n1 + n2;
const printResultArrow = (num) => {
    console.log('Result: ' + num);
    // return num
};
let person;
let product;
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 0] = "READ_ONLY";
    Role[Role["AUTHOR"] = 100] = "AUTHOR";
})(Role || (Role = {}));
let answer;
function greet(user) {
    console.log("Hi, I am " + user.name);
}
function isOlder(user, checkAge) {
    return checkAge > user.age;
}
