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

let newStuff = stuff.map(function (random) {
  return random.name;
});
console.log(newStuff);

let numbs = [4, 56, 7, 13, 7];

let newNumbs = numbs.filter(function (ni) {
  return ni % 2 == 0;
});

console.log(newNumbs);

let people = ["angie", "katherine", "alexander", "tom"];

let newPeople = people.filter(function (nu) {
  return nu.length > 5;
});
console.log(newPeople);

let property = [
  { Name: "Susie", Age: 15 },
  { Name: "Katie", Age: 24 },
  { Name: "Thomas", Age: 35 },
];

let newProperty = property.filter(function (na) {
  return na.Age > 18;
});
console.log(newProperty);

let multipleItems = [
  { Color: "Blonde", Height: 5 },
  { Color: "Black", Height: 6 },
  { Color: "Red", Height: 4 },
];

let heightMultipleItems = multipleItems.filter(function (ec) {
  return ec.Height >= 5;
});

let newMultipleItems = heightMultipleItems.map(function (ee) {
  return ee.Color.toUpperCase();
});
console.log(newMultipleItems);

let nambers = [34, 456, 121, 45.6, 2];

let newNambers = nambers.map(function (Nu) {
  return Nu * 2;
});
console.log(newNambers);

let crowd = ["tenko", "ibuki", "kaede", "ryoma"];

let theCrowd = crowd.map(function (mb) {
  return mb.toUpperCase();
});

console.log(theCrowd);

let homies = [
  { who: "Makoto", where: "Hopes Peak" },
  { who: "Hajime", where: "Jabborwack Island" },
  { who: "Shuichi", where: "Ultimate Acadamy" },
];

let theHomies = homies.filter(function (dg) {
  return dg.who;
});

let realHomies = theHomies.map(function (df) {
  return df.who.toUpperCase();
});

console.log(realHomies);

let hours = [45, 78, 67, 3];

let realHours = hours.find(function (he) {
  return he > 5;
});

console.log(realHours);

let apple = ["red", "green", "black", "zebra"];

let realApple = apple.find(function (ap) {
  return ap.includes("z");
});
console.log(realApple);

let whoever = [
  { ppl: "John", email: "hehemailgmail.com" },
  { ppl: "Josh", email: "haha@gmail.com" },
];

let yeaWhoever = whoever.filter(function (heh) {
  return heh.email.includes("@") && heh.email.includes("com");
});

console.log(yeaWhoever);

let numbas = [4, 5, 6, 7, 8, 9];

let newNumbas = numbas.reduce(function (ff, hh) {
  return ff + hh;
});

console.log(newNumbas);

let peeps = ["Tom", "Nancy", "Mike", "Will"];

let thesePeeps = peeps.reduce(function (ss, rr) {
  return ss + rr;
});
console.log(thesePeeps);

let weather = [
  { type: "sunny", degrees: 50 },
  { type: "rainy", degrees: 40 },
];

let sadWeather = weather.map(function (xx) {
  return xx.degrees;
});
let theWeather = sadWeather.reduce(function (kk, cc) {
  return (kk + cc) / 2;
});

let pennies = [44, 55, 66, 77];

let totalPennies = pennies.reduce(function (hh, dd) {
  return hh + dd;
});
console.log(totalPennies);

let dimes = [44, 2323, 56, 7];
let totalDimes = dimes.reduce(function (jj, ww) {
  return Math.max(jj, ww);
});
console.log(totalDimes);

console.log(theWeather);

let money = [45, 67, 23, 8.9, 2, 76];

let evenMoney = money.filter(function (bb) {
  return bb % 2 == 0;
});

let doubleMoney = evenMoney.map(function (zz) {
  return zz * 2;
});
console.log(doubleMoney);

let artists = [
  { genre: "Pop", sells: 60 },
  { genre: "Punk", sells: 700 },
];

let newArtists = artists.filter(function (mm) {
  return mm.sells > 300;
});

let nameArtists = newArtists.map(function (nn) {
  return nn.genre;
});

console.log(nameArtists);

let costs = ["Water", "Mail", "Apple", "Orange"];

let newCosts = costs.map(function (vv) {
  return vv.toUpperCase();
});

let togetherCosts = newCosts.reduce(function (pp, ll) {
  return pp + ll;
});

console.log(togetherCosts);
