let information = {
  firstname: "George",
  lastName: "Angelidis",
  addresses: [
    {
      street: "100 Cool Way",
      state: "Florida",
      city: "Tampa",
      zipCode: "34567",
    },
    {
      street: "200 Notcool Road",
      state: "New York",
      city: "The Hamptons",
      zipCode: "11995",
    },
  ],
};

console.log(information.addresses);

for (let i = 0; i < information.addresses.length; i++) {
  console.log(information.addresses[i].city);
}
