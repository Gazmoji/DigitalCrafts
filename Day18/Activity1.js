const ul = document.getElementById("ul");

fetch("https://api.escuelajs.co/api/v1/products")
  .then((response) => response.json())
  .then((products) => {
    const productItems = products.map(function (product) {
      return `<li>
        ${product.title}
        ${product.description}
        </li>`;
    });
    ul.innerHTML = productItems.join("");
  });
