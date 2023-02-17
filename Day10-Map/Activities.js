let numbers = [10, 8, 5, 3, 5, 6, 23];

let newArray = numbers.map(function (no) {
  return no * 2;
});
console.log(newArray);

let string = ["alice", "john", "alex", "liv"];

let newString = string.map(function (name) {
  return name.toUpperCase();
});
console.log(newString);

let stuff = [
  { name: "model", location: "here", information: "history" },
  { name: "iceCream", location: "there", information: "math" },
  { name: "park", location: "somewhere", information: "science" },
];

let newStuff = stuff.filter(function (random) {
  return random.name();
});
console.log(newStuff);
