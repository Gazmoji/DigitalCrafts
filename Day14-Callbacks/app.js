// getCounter updates the counter variable every second
function getCounter(counterUpdated) {
  let counter = 0;
  window.setInterval(function () {
    counter++;
    counterUpdated(counter);
  }, 1000);
}

// The getCounter function is called here but how do we get the value of the updated counter
// pass a callback function to the getCounter function below and get the updated counter value and then display it on the console

getCounter(function (count) {
  console.log(count);
});
console.log(count());
