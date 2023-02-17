// ARRAYS
// variable names use plural names, fruits, animals, customers
let names = ["John", "Alex", "Mary", "Steven"];

console.log(names);

let numbers = [1, 34, 656, 23, 19];

let items = ["John", "Alex", 12, true, 4.56];

// accessing items of the array

let no = numbers[0];

console.log(no);

// returns undefined
console.log(numbers[9]);

let anotherNumber = numbers[3]; // 23

console.log(numbers);

// adding into the array
numbers.push(1024);

console.log(numbers);

// empty array
let animals = [];

animals.push("Cat");
animals.push("Dog");
animals.push("Rabbit");

console.log(animals);

// iterate through the array

animals.push("Lion");
animals.push("Rhino");
animals.push("Mouse");
animals.push("Tiger");

console.log(animals.length);

// LOOPS
// for(start of the loop, condition, how the loop increments)

for (let index = 0; index < animals.length; index++) {
  console.log(animals[index]);
}
