let someCar = { make: "Honda", model: "Accord" };

// Blue print
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
}

//let make = prompt('Enter make: ')
//let model = prompt('Enter model ')

// myCar is an actual concrete object representing Honda Accord
let myCar = new Car("Honda", "Accord"); // creating an object of Car class //  new is telling you that you are creating object
console.log(myCar);
console.log(myCar.make, myCar.model); //

let car2 = new Car("Toyota", "Camry");
console.log(car2);

class Table {
  constructor(width, height, material) {
    this.width = width;
    this.height = height;
    this.material = material;
  }
}

// creating an object/instance of a Table
let cherryWoodTable = new Table(100, 100, "Wood");
console.log(cherryWoodTable);

let plasticTable = new Table(20, 20, "Plastic");
console.log(plasticTable);

cherryWoodTable.width = 99;
console.log(cherryWoodTable);

// A company can have many employees

class Company {
  constructor(name) {
    // this means that the property will be available to the objects of type Company
    this.name = name;
    this.employees = [];
  }
}

class Employee {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.hoursWorked = 0;
    this.eligibleForBonus = false;
  }

  work() {
    // increment hoursWorked by +8 hours
    this.hoursWorked += 8;

    if (this.hoursWorked > 40) {
      this.eligibleForBonus = true;
    }
  }
}

let company = new Company("HEB");
console.log(company.name);

let employee = new Employee("John", "Doe");
console.log(employee.hoursWorked);
employee.work();
console.log(employee.hoursWorked);
employee.work();
employee.work();
employee.work();
employee.work();
employee.work();
console.log(employee);

// add employee to a company
company.employees.push(employee);
console.log(company.employees);

let newEmployee = new Employee("Steven", "Doe");
console.log(newEmployee);

newEmployee = employee;
console.log(newEmployee);
newEmployee.firstName = "Mary";

console.log(newEmployee);
console.log(employee);

console.log(company.name);
for (let index = 0; index < company.employees.length; index++) {
  let emp = company.employees[index];
  console.log(emp.firstName);
  console.log(emp.lastName);
  console.log(emp.hoursWorked);

  /*
  console.log(company.employees[index].firstName)
  console.log(company.employees[index].lastName)
  console.log(company.employees[index].hoursWorked)
  */
}
