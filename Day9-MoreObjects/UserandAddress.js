class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.addresses = [];
  }
}

class Address {
  constructor(street, city, state, zipCode) {
    this.street = street;
    this.city = city;
    this.state = state;
    this.zipCode = zipCode;
  }
}

let user = new User("John", "Doe");

let address = new Address("100 May St", "Tampa", "Florida", "33444");
let address1 = new Address("1200 May St", "Miami", "Florida", "33447");
let address2 = new Address("13th Street", "Tampa", "Florida", "33456");

user.addresses.push(address, address1, address2);
console.log(user.addresses);

for (let i = 0; i < user.addresses.length; i++) {
  console.log(user.addresses[i]);
}

