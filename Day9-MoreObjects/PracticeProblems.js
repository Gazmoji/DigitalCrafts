class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.greeting = "";
  }
  greet() {
    this.greeting = "Hello, How Are you?";
  }
}

let thisPerson = new Person("George Angelidis", 24, "Male");

thisPerson.greet();
console.log(thisPerson.greeting);

class Animal {
  constructor(species) {
    this.species = species;
    this.sound = "";
  }
  makeSound() {
    this.sound = "The animal makes a sound to the console.";
  }
}

let thisAnimal = new Animal("koala");

thisAnimal.makeSound();
console.log(thisAnimal.sound);

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.area = 0;
  }
  calculateArea() {
    this.area = this.width * this.height;
  }
}

let newRectangle = new Rectangle(10, 30);
newRectangle.calculateArea();
console.log(newRectangle.area);

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.log = "";
  }
  getinfo() {
    this.log = "The book `${title}` was written by `${author}`.";
  }
}

let BookMotto = new Book("Gone with the Wind, Meryl Streep");
BookMotto.getinfo();
console.log(BookMotto.log);

class Student {
  constructor(name1, age1) {
    this.name1 = name1;
    this.age1 = age1;
  }
  greet() {
    this.information = `Hello, my name is ${this.name1} and ${this.age1} years old.`;
  }
}

let newStudent = new Student("Michael", 17);

newStudent.greet();
console.log(newStudent.information);

class BankAccount {
  constructor(owner) {
    this.balance = 0;
    this.owner = owner;
  }
  deposit(amount) {
    this.balance += amount;
  }
  withdraw(amount) {
    this.balance -= amount;
  }
  transfer(amount, destinationAccount) {
    this.balance -= amount;
    destinationAccount.balance += amount;
  }
}

let Chase = new BankAccount("George");
let MidFirst = new BankAccount("George");

Chase.deposit(500);
Chase.transfer(500, MidFirst);

class Liv {
  constructor(gaslight) {
    this.gaslight = gaslight;
    this.gatekeep = "gatekeep";
    this.girlboss = "girlboss";
  }
  queen() {
    this.girlqueen = `Hello I am Liv. I love to ${this.gaslight}, ${this.gatekeep}, ${this.girlboss}.`;
  }
}

let Olivia = new Liv("gaslight");

Olivia.queen();

console.log(Olivia.girlqueen);
