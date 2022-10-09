"use strict";

let displayText = document.getElementById("display-text");
const numBtn = document.querySelectorAll(".number");
const del = document.getElementById("delete");
const clear = document.getElementById("clear");
const add = document.getElementById("plus");
const subtract = document.getElementById("minus");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const power = document.getElementById("power");
let firstVarArr = [];
let secondVarArr = [];
let currentArr = firstVarArr;
let currentOp = "";
let answer = "";


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
            currentOp = "";
            currentArr = firstVarArr;
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
        currentArr = firstVarArr;
    }
});

function operate(a, b) {
    switch (currentOp) {
        case "add":
            answer = a + b;
            break;
        case "subtract":
            answer = a - b;
            break;
        case "multiply":
            answer = a * b;
            break;
        case "divide":
            answer = a / b;
            break;
        case "power":
            answer = a ** b;
            break;
    }
}