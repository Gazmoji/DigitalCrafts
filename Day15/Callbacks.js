function delay(callback, theTime) {
  setTimeout(function () {
    callback();
  }, theTime);
}

function message() {
  console.log("Hello World");
}

delay(message, 2000);

function repeat(theCallBack, therealTime) {
  setInterval(function () {
    theCallBack();
  }, therealTime);
}

function intervalTime() {
  console.log("GoodbyeWorld!");
}

repeat(intervalTime, 5000);

let numbers = [1, 2, 3, 4, 5, 6, 7];

function filter(array, callback) {
  callback(array);
}

function filterArray(array) {
  const thatArray = array.filter((number) => {
    return number % 2 === 0;
  });
  console.log(thatArray);
}

filter(numbers, filterArray);

let names = ["Sally", "Andrew", "Diana"];

function map(arrayValue, anotherCallBack) {
  anotherCallBack(arrayValue);
}

function mapArray(arrayValue) {
  const theMap = arrayValue.map((theNames) => {
    return theNames == "Sally";
  });
  console.log(theMap);
}
map(names, mapArray);

//5 ----------------------------------------------
let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function reduce(arr, callback, initial) {
  callback(arr, initial);
}
function reduceArr(array, initial) {
  let combinedArray = array.reduce(function (combined, current) {
    return combined + current;
  }, initial);
  console.log(combinedArray);
}
reduce(values, reduceArr, 10);

let vision = [20, 20];

function see(callback, eyes) {
  callback(eyes);
}

function theMessage(eyes) {
  let newMessage = eyes.reduce(function (twenty, twentee) {
    return twenty + twentee;
  });
  console.log(newMessage);
}

see(theMessage, vision);

let money = [40, 20, 60, 800];

function cash(callback, dollars) {
  callback(dollars);
}

function dinero(dollars) {
  let theMoney = dollars.map(function (amount) {
    return amount * 2;
  });
  console.log(theMoney);
}

cash(dinero, money);
