let input = prompt("Enter a number to find its factorial.");

let number = parseInt(input);

let value = 1;
if (number == 0 || number == 1) {
  console.log(1);
} else {
  while (number > 1) {
    value = value * number;
    number--;
  }
  console.log(value);
}
