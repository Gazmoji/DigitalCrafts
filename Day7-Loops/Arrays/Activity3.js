let names = [];

while (true) {
  let namesPrompt = prompt("Enter the requested names or press q to quit.");
  if (namesPrompt == "q") {
    break;
  }
  names.push(namesPrompt);
  console.log(namesPrompt);
}
