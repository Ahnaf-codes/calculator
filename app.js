"use strict";

let displayText = document.getElementById("display-text");
const numBtn = document.querySelectorAll(".number");
const del = document.getElementById("delete");
const clear = document.getElementById("clear");
let firstVarArr = [];
let secondVarArr = [];
let currentArr = firstVarArr;


numBtn.forEach(num => {
    num.addEventListener("click", () => {
        firstVarArr.push(num.innerHTML);
        displayText.innerHTML = firstVarArr.join("");
    });
});

del.addEventListener("click", () => {
    firstVarArr.pop();
    if (firstVarArr.length > 0) {
        displayText.innerHTML = firstVarArr.join("");
    } else {
        displayText.innerHTML = "";
    }
});

clear.addEventListener("click", () => {
    firstVarArr = [];
    displayText.innerHTML = "";
});