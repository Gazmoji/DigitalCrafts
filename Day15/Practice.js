let numbers = [4, 5, 6, 7];

function hello(callback, numbs) {
  callback(numbs);
}

function theNumbs(numbs) {
  console.log(numbs);
}

hello(theNumbs, numbers);

let numbers1 = [15, 30, 2, 56];

function firstFun(callback, numbs1) {
  callback(numbs1);
}

function firstMap(numbs1) {
  let theMap = numbs1.map(function (theNumbs) {
    return theNumbs * theNumbs;
  });
  console.log(theMap);
}

firstFun(firstMap, numbers1);

let numbers2 = [78, 98, 2, 4];

function adding(callbackz, numbs2) {
  callbackz(numbs2);
}

function firstReduce(numbs2) {
  let theReduce = numbs2.reduce(function (theNumbs1, theNumbs2) {
    return theNumbs1 + theNumbs2;
  });
  console.log(theReduce);
}

adding(firstReduce, numbers2);

let string = "hello";

function something(callbacks, reverse) {
  callbacks(reverse);
}

function theString(reverse) {
  let stringz = reverse.split("").reverse().join("");
  console.log(stringz);
}

something(theString, string);

let numbers3 = [4, 6, 7, 89, 0, 23];

function comeBack(callbacker, numbs3) {
  callbacker(numbs3);
}

function baby(numbs3) {
  let babyComeBack = numbs3.filter(function (hehe) {
    return hehe % 2 == 0;
  });
  console.log(babyComeBack);
}

comeBack(baby, numbers3);

let names = ["Sally", "Alex", "Rebecca", "Mary"];

function theNames(callbackx, returned) {
  callbackx(returned);
}

function theFilter(returned) {
  let filterz = returned.filter(function (cx) {
    return cx.length >= 5;
  });
  console.log(filterz);
}

theNames(theFilter, names);

let finalNumbs = [5, 6, 7, 8, 9, 0, 1, 2];

function vil(callbacku, numbs5) {
  callbacku(numbs5);
}

function vill(numbs5) {
  let villl = numbs5.reduce(function (xD, Dx) {
    return Math.max(xD, Dx);
  });
  console.log(villl);
}

vil(vill, finalNumbs);
