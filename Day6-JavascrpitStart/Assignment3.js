let input = prompt("Please enter a number.");

if (input % 3 == 0 && input % 5 == 0) {
  console.log("FizzBuzz");
} else if (input % 3 == 0) {
  console.log("Fizz");
} else if (input % 5 == 0) {
  console.log("Buzz");
} else {
  console.log("Your number is not divisible by 3 or 5.");
}

function fizzBuzz(no) {
  if (no % 3 == 0 && no % 5 == 0) {
    return "FizzBuzz";
  } else if (no % 3 == 0) {
    return "Fizz";
  } else if (no % 5 == 0) {
    return "Buzz";
  } else {
    console.log("Not Fizz or Buzz");
  }
}
