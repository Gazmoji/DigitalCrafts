let input1 = prompt("Enter your first number.");

let inputInteger1 = parseInt(input1);

let input2 = prompt("Enter your operand, +, -, *, /");

let input3 = prompt("Enter your second number.");

let inputInteger2 = parseInt(input3);

function add(a, b) {
  let result = a + b;
  console.log(result);
}

function subtract(a, b) {
  let result = a - b;
  console.log(result);
}

function multiply(a, b) {
  let result = a * b;
  console.log(result);
}

function divide(a, b) {
  let result = a / b;
  console.log(result);
}

if (input2 == "+") {
  add(inputInteger1, inputInteger2);
} else if (input2 == "-") {
  subtract(inputInteger1, inputInteger2);
} else if (input2 == "*") {
  multiply(inputInteger1, inputInteger2);
} else if (input2 == "-") {
  divide(inputInteger1, inputInteger2);
} else {
  console.log("You did something wrong.");
}
