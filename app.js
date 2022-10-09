"use strict";

let displayText = document.getElementById("display-text");
const limitText = document.getElementById("limit-text");
const numBtn = document.querySelectorAll(".number");
const opBtn = document.querySelectorAll(".operator");
const del = document.getElementById("delete");
const clear = document.getElementById("clear");
const equal = document.getElementById("equal");
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const decimal = document.getElementById("decimal");
let firstVarArr = [];
let secondVarArr = [];
let currentArr = firstVarArr;
let currentOp = "";
let answer = "";


numBtn.forEach(num => {
    num.addEventListener("click", () => {
        if (currentArr.length <= 14) {
            if (currentArr === firstVarArr) {
                firstVarArr.push(num.innerHTML);
                displayText.innerHTML = firstVarArr.join("");
                currentArr = firstVarArr;
            } else {
                secondVarArr.push(num.innerHTML);
                displayText.innerHTML = secondVarArr.join("");
                currentArr = secondVarArr;
            }
        }
        else {
            limitText.style.visibility = "visible";
        }
    });
});

decimal.addEventListener("click", () => {
    if (!currentArr.includes(".")) {
        if (currentArr === firstVarArr) {
            firstVarArr.push(decimal.innerHTML);
            displayText.innerHTML = firstVarArr.join("");
            currentArr = firstVarArr;
        } else {
            secondVarArr.push(decimal.innerHTML);
            displayText.innerHTML = secondVarArr.join("");
            currentArr = secondVarArr;
        }
    }
});

opBtn.forEach(op => {
    op.addEventListener("click", () => {
        if (firstVarArr.length > 0 && currentOp === "") {
            currentOp = op.id;
        }
        displayText.innerHTML = "";
        currentArr = secondVarArr;
        if (secondVarArr.length > 0) {
            operate(Number(firstVarArr.join("")), Number(secondVarArr.join("")));
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
            currentArr = secondVarArr;
        } else {
            displayText.innerHTML = firstVarArr.join("");
            currentOp = "";
            currentArr = firstVarArr;
        }
    }

});

clear.addEventListener("click", () => {
    location.reload();
});

equal.addEventListener("click", () => {
    if (secondVarArr.length > 0) {
        operate(Number(firstVarArr.join("")), Number(secondVarArr.join("")));
    } else {
        displayText.innerHTML = firstVarArr.join("");
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
            if (b == 0) {
                answer = "ERROR 404";
            } else {
                answer = a / b;
            }
            break;
        case "power":
            answer = a ** b;
            break;
    }
    if (typeof answer === "string") {
        displayText.style.color = "#ff0000";
        displayText.innerHTML = answer;
    } else {
        displayText.innerHTML = Math.round(answer * 10000) / 10000;
        firstVarArr = String(answer).split("");
    }

    secondVarArr = [];
    currentOp = "";
}