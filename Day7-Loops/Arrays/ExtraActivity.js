let numbers = [5, 10, 15, 43];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i];
}
console.log(sum);

let numbers6 = ["alice", "mary", "tom", "drew"];
for (let i = 0; i < numbers6.length; i++) {
  let humans = numbers6[i];
  for (let j = 0; j < humans.length; j++){
    console.log(humans)
  }

}

let numbers2 = [10, -30, 0.5, -300];

for (let i = 0; i > 0; i++) {
  if (numbers2[i] > 0) {
    console.log(numbers2[i]);
  }
}

let numbers3 = [50, 30, -6, 10];

for (let i = 0; i < numbers.length; i++) {
  if (numbers3[i] >= 50) {
    console.log(numbers3[i]);
  }
}

let books = ["Red Riding Hood", "Gone Girl", "Your Lie in April"];

for (let i = 0; i < books.length; i++) {
  console.log(books);
}

let numbers4 = [565, 678, 2, 74];
for (let i = 0; i < numbers4.length; i++) {
  console.log(numbers4[i] * numbers4[i]);
}

let people = ["Angie", "Tom", "Bryce", "Alexander", "Joy"];
for (let i = 0; i < people.length; i++) {
  let word = people[i];
  for (let j = 0; j < word.length; j++) {
    if (word[j] == "e") {
      console.log(word);
    }
  }
}

let numbers5 = [34, 12, 15, 77, 6, 5];

for (let i = 0; i < numbers5.length; i++) {
  if (numbers5[i] % 3 == 0) {
    console.log(numbers5[i]);
  }
}

let sum1 = 0;
let products = [
  { name: "milk", price: 5 },
  { name: "pizza", price: 50 },
  { name: "apples", price: 500 },
];
for (let i = 0; i < products.length; i++) {
  sum1 = sum1 + products[i].price;
}
console.log(sum1);
