let word = "dad";

let wordArray = word.split("");

let reverseWordArray = [];
for (let i = wordArray.length - 1; i >= 0; i--) {
  reverseWordArray.push(wordArray[i]);
}
console.log(reverseWordArray);
let newString = reverseWordArray.join("");
console.log(newString);
if (newString == word) {
  console.log("This is a Palindrome");
} else {
  console.log("This is NOT a Palindrome.");
}
