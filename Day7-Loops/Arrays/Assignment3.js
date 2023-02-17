let input = prompt("Enter a number to find out if it is prime.");

let number = parseInt(input);

let primeNumber = true;

if (number == 1) {
  console.log("1 is not a prime  or composite number.");
} else if (number == 2) {
  console.log("2 is a prime number.");
} else if (number > 2) {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      primeNumber = false;
      console.log("That number is NOT prime.");
    } else {
      console.log("That number is prime.");
    }
  }
}



