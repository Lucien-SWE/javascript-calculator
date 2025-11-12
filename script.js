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
  if (display.value == ("")) {
    display.value += ("");
  }
  else {
    display.value += this.textContent;
  }
  if (num1 == 0){
  num1 = calcStorage;
  calcStorage = "";
  console.log(num1);
  console.log(calcStorage);
  }

});

equalsButton.addEventListener("click", function(){
  if (display.value == ("")){
    display.value +=("");
  }
  else {
    num2 = calcStorage;
    calcStorage = "";

    display.value = (parseFloat(num1)+ parseFloat(num2));
  }
});


