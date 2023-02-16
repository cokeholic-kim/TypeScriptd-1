"use strict";
var week;
(function (week) {
    week[week["sun"] = 0] = "sun";
    week[week["mon"] = 1] = "mon";
    week[week["tue"] = 2] = "tue";
    week[week["wed"] = 3] = "wed";
    week[week["thu"] = 4] = "thu";
    week[week["fri"] = 5] = "fri";
    week[week["sat"] = 6] = "sat";
})(week || (week = {}));
var Color;
(function (Color) {
    Color["Red"] = "red";
    Color["Green"] = "green";
    Color["Blue"] = "blue";
})(Color || (Color = {}));
console.log(week[0]);
console.log(week[1]);
console.log(Color.Red);
console.log(Color['Green']);
let aaa = Color.Red;
