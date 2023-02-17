let age = 10; // integer (numbers)
let name = "John"; // String
let pi = 3.142; // Double
let isPublished = true; // Boolean
let address = "2300 Richmond Ave Houston, TX";

let studentName = "John Doe";
let studentCohort = "DigitalCrafts 2023";
let year = "2023";

let welcomeMessage = studentName + studentCohort;
console.log(welcomeMessage);

//Template Literals

let anotherWelcomeMessage = `Hello, ${studentName}, Welcome to ${studentCohort} for the year ${year}`;

console.log(anotherWelcomeMessage);

// PROMPTS

let firstName = prompt("Enter first name: ");
let lastName = prompt("Enter last name: ");
let myAge = prompt("Enter age: ");
console.log(firstName, lastName);
console.log(parseInt(myAge) + 10);

// CONDITIONS

let userAge = 21;
let resident = "TX";

if (userAge > 18 && resident == "TX") {
  console.log("User is greater than 18.");
  console.log("Welcome");
  console.log("You are greater than 18");
  console.log("You are from TEXAS");
} else {
  console.log("You are NOT greater than 18 or from Texas");
}

if ((userAge > 19 || resident == "TX") && citizen == "US") {
  console.log("You are either older than 19 or a resident of Texas");
  console.log("You are a US citizen.");
} else if (resident == "CA") {
  console.log("You are a resident of Canada.");
} else {
  console.log("You are NOT a resident of US or Canada.");
}

// &&
// ||
// >= greater than or equal to
// > greater than
// < less than
// <= less than or equal to
// == equal to
// === exact equal to

// FUNCTIONS 

// lines of code that serves a common purpose 

// Functions are small and they are doing one job only

// function with no argument 
/*
function displayAnnualReport() {
} */

// function with one argument 
function displayAnnualReport(name) {
    console.log('------------------------')
    console.log('-------WEEKLY REPORT-----------')
    console.log(`-------Employee Name: ${name}-----------`)
    console.log('1 34 2 4 1     2  ')
    console.log('------------------------')
}

// function with two arguments 
function displayWeeklyReport(name, state) {
    // employeeStatus is a local variable that is only available 
    // inside the function 
    let employeeStatus = 'Manager'
    console.log(name, state)
}

displayAnnualReport('John Doe') 

if(userAge > 18) {
 displayAnnualReport('Mary Doe') 
}

displayWeeklyReport('Steven', 'TX')

// When it comes to passing arguments to a function then less is always more 

//console.log(employeeStatus) // Error, there is no employeeStatus variable 


// a function that returns a value 
function add(a, b) {
    //let result = a + b 
    return a + b 
    // These lines are not executed 
}

function subtract(a, b) {
   // let result = a - b 
    return a - b  
}

let result = add(2,3)
console.log(result)

// A function to find out if a number is even or odd 

// evenOrOdd -> 'EVEN' OR ODD 

// isEven -> Bool 

function isEven(no) {
    // write code to check whether number is even or not 
    // return true or false 
}

// deposit money into the bank account 

function deposit(amount) {

}

// I want to find out is a particular user is an employee or not 

function isEmployee(userId) {
    //return true/false 
}

function getTransmissionFluid(make, model) {
    return // type of transmission fluid 
}

function performCarService(make, model) {
    let transmissionFluid = getTransmissionFluid(make, model)
    // additional code to perform service 
}