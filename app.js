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
        if (currentArr === firstVarArr) {
            firstVarArr.push(num.innerHTML);
            displayText.innerHTML = firstVarArr.join("");
            currentArr = firstVarArr;
        } else {
            secondVarArr.push(num.innerHTML);
            displayText.innerHTML = secondVarArr.join("");
            currentArr = secondVarArr;
        }
    });
});

del.addEventListener("click", () => {
    if (currentArr === firstVarArr) {
        firstVarArr.pop();
        if (firstVarArr.length > 0) {
            displayText.innerHTML = firstVarArr.join("");
        } else {
            displayText.innerHTML = "";
        }
        currentArr = firstVarArr;
    } else {
        secondVarArr.pop();
        if (secondVarArr.length > 0) {
            displayText.innerHTML = secondVarArr.join("");
        } else {
            displayText.innerHTML = "";
        }
        currentArr = secondVarArr;
    }

});

clear.addEventListener("click", () => {
    if (currentArr === firstVarArr) {
        firstVarArr = [];
        displayText.innerHTML = "";
        currentArr = firstVarArr;
    } else {
        secondVarArr = [];
        displayText.innerHTML = "";
        currentArr = secondVarArr;
    }
});