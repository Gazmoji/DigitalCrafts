// getCounter updates the counter variable every second
function getCounter(counterUpdated) {
  let counter = 0;
  setInterval(function () {
    counter++;
    counterUpdated(counter);
  }, 1000);
}

// The getCounter function is called here but how do we get the value of the updated counter
// pass a callback function to the getCounter function below and get the updated counter value and then display it on the console

getCounter(function (heheh) {
  console.log(heheh);
});
