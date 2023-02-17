function totalCalc(price, tip) {
  let total = (tip / 100) * price + tip;
  return total;
}
let price = prompt("Enter the price of your meal: ");
let tip = prompt("Enter your tip as percentage%: ");

console.log(totalCalc(parseInt(price), parseInt(tip)));
