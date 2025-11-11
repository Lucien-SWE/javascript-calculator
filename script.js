const display = document.getElementById("display");
const numInput = document.getElementsByClassName("num-btn");
const add = document.getElementById("addition");
const subtract = document.getElementById("subtraction");
const divide = document.getElementById("division");
const equalsButton = document.getElementById("equals-btn");
const clearButton = document.getElementById("clear-btn");

let calcStorage = "";
let operator = "";

for (let i = 0; i < numInput.length; i++){
  numInput[i].addEventListener("click", function(){
    parseInt(this.textContent);
    calcStorage += this.textContent;
    display.value += this.textContent;
  });
}

clearButton.addEventListener("click", function(){
  display.value = ("");
});

add.addEventListener("click", function(){
    if (display.value == ("")){
    display.value += ("");
  }
  else {
    display.value += this.textContent;
  }
  
});


