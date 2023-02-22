const Title = document.getElementById("number");
const Button = document.getElementById("timer");

Button.addEventListener("click", function () {
  let counter = 10;
  let timerID = window.setInterval(function () {
    counter--;
    if (counter <= 0) {
      window.clearIntervel(timerID);
      document.body.style.backgroundColor = "blue";
    } else {
      Title.innerHTML = counter;
    }
  }, 1000);
});
