const text = document.getElementById("text");
const showQuotes = document.getElementById("showQuotes");
const quoteNameHeading = document.getElementById("quoteNameHeading");
const quotePriceHeading = document.getElementById("quotePriceHeading");

letintervalID = 0;
showQuotes.addEventListener("click", function () {
  window.clearInterval(intervalID);
  const symbol = quoteTextBox.value;

  intervalID = window.setInterval(function () {
    const quote = getStockQuote(symbol);

    quoteNameHeading.innerHTML = quote.name;
    quotePriceHeading.innerHTML = quote.price;
  }, 2000);
});
