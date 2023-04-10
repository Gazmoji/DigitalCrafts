// getCounter updates the counter variable every second
const clickme = document.getElementById("clickme");
const answer = document.getElementById("answer");

function getCounter(counterUpdated) {
  let counter = 0;
  setInterval(function () {
    counter++;
    counterUpdated(counter);
  }, 1000);
}

// The getCounter function is called here but how do we get the value of the updated counter
// pass a callback function to the getCounter function below and get the updated counter value and then display it on the console

/*getCounter(function (heheh) {
  console.log(heheh);
});

function vowels(word, callback) {
  const vowels = ["a", "e", "i", "o", "u"];
  const wordArray = word.split("");
  const vowelArray = wordArray.filter((letter) => vowels.includes(letter));

  if (vowelArray.length > 0) {
    return callback(vowelArray);
  } else {
    return incorrect;
  }
}

const incorrect = "there is no vowel";
const word = "hello";

vowels(word, function (yes) {
  console.log(yes);
});

function helloWorld(number, callback) {
  callback(number);
}

let number = 10;

helloWorld(number, function (result) {
  console.log(result);
});

function Kal(array, callback) {
  const addArray = array.reduce((sum, currentValue) => {
    return sum + currentValue;
  }, 0);
  callback(addArray);
}

let array = [4, 5, 6];

Kal(array, function (result) {
  console.log(result);
});

function addingArray(array, callback) {
  const addition = array.reduce((sum, value) => {
    return sum + value;
  }, 0);
  callback(addition);
}

addingArray(array, function (hello) {
  console.log(hello);
});

*/

function theAnswer(names, callback) {
  const filterName = names.filter((name) => {
    return name.length >= 6;
  });

  callback(filterName);
}

let names = ["Alison", "George", "Brian"];

theAnswer(names, function (result) {
  console.log(result);
});

function Chandler(Joey, Monica) {
  const splitString = Joey.split("");
  const reverseIt = splitString.reverse();
  const combine = reverseIt.join("");
  return Monica(combine);
}

let Joey = "How You Doin";

Chandler(Joey, function (English) {
  console.log(English);
});

function Rachel(Pheobe, Ross) {
  Pheobe.sort();
  Ross(Pheobe);
}

Pheobe = ["Pheebs", "Apple"];

Rachel(Pheobe, function (OnABrek) {
  clickme.addEventListener("click", () => {
    answer.innerHTML = OnABrek.join("");
  });
});
