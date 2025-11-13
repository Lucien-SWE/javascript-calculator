const display = document.getElementById("display");
const numInput = document.getElementsByClassName("num-btn");
const add = document.getElementById("addition");
const subtract = document.getElementById("subtraction");
const divide = document.getElementById("division");
const equalsButton = document.getElementById("equals-btn");
const clearButton = document.getElementById("clear-btn");

let calcStorage = "";
let operator = "";
let num1 = 0;
let num2 = 0;
let currentOperator = "";
let output = "";

for (let i = 0; i < numInput.length; i++) {
  numInput[i].addEventListener("click", function () {

    if (display.value == 0) {
      display.value = "";
      calcStorage = "";
    }

    parseFloat(this.textContent);
    calcStorage += this.textContent;
    display.value += this.textContent;
    console.log(calcStorage);


  });
}

clearButton.addEventListener("click", function () {
  calcStorage = "";
  display.value = ("0");
});

add.addEventListener("click", function () {
  if (currentOperator = ""){
    currentOperator = "+";
  }
  else {
    currentOperator = "";
    currentOperator = "+";
  }
  if (display.value == ("")) {
    display.value += ("");
  }
  else {
    display.value += this.textContent;
  }
  if (num1 == 0){
  num1 = calcStorage;
  calcStorage = "";
  }

});

subtract.addEventListener("click", function () {
  if (currentOperator = ""){
    currentOperator = "-";
  }
  else {
    currentOperator = "";
    currentOperator = "-";
  }
  if (display.value == ("")) {
    display.value += ("");
  }
  else {
    display.value += this.textContent;
  }
  if (num1 == 0){
  num1 = calcStorage;
  calcStorage = "";
  }
});

divide.addEventListener("click", function () {
  if (currentOperator = ""){
    currentOperator = "/";
  }
  else {
    currentOperator = "";
    currentOperator = "/";
  }
  if (display.value == ("")) {
    display.value += ("");
  }
  else {
    display.value += this.textContent;
  }
  if (num1 == 0){
  num1 = calcStorage;
  calcStorage = "";
  }
});

equalsButton.addEventListener("click", function(){
  if (display.value == ("")){
    display.value +=("");
  }
  else {
    switch(currentOperator){
      case "+":
        output = addition(parseFloat(num1), parseFloat(calcStorage));
        display.value = output;
        break;

      case "-":
        output = subtraction(parseFloat(num1), parseFloat(calcStorage));
        display.value = output;
        break;
      
      case "/":
        output = division(parseFloat(num1), parseFloat(calcStorage));
        display.value = output;
        break;
    }
  }
});

function addition(x, y){
  return x + y;
}
function subtraction(x, y){
  return x - y;
}
function division(x, y){
  return x / y;
}




