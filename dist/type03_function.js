"use strict";
function printUser(name, age) {
    return `Hello${name} age ${age}`;
}
printUser("green");
function showName(name) {
    return `Hello ${name} || 'aaa'`;
}
function showName2(name = "aaa") {
    return `Hello ${name}`;
}
showName('green');
showName();
showName2("green");
showName2();
function addArr(...nums) {
    console.log(nums);
}
addArr(1, 2, 3);
addArr(1, 2, 3, 4, 5, 6, 7, 8);
let yellow = {
    name: "yellow"
};
function printUsername() {
    console.log(this.name);
}
const myFun = printUsername.bind(yellow);
myFun;
