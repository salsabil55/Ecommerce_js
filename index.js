import products from "./products.js";
import cart from "./cart.js";
let app = document.getElementById("app");
let tempararyContent = document.getElementById("tempararyContent");

// load layout file

const loadTemplate = () => {
  fetch("/template.html")
    .then((response) => response.text())
    .then((html) => {
      app.innerHTML = html;
      let contentTab = document.getElementById("contentTab");
      contentTab.innerHTML = tempararyContent.innerHTML;
      tempararyContent.innerHTML = null;
      cart();
      initApp();
    });
};
loadTemplate();
// load list product

const initApp = () => {
  let listProduct = document.querySelector(".listProduct");
  listProduct.innerHTML = null; // delete entire text
  products.forEach((product) => {
    let newProduct = document.createElement("div");
    newProduct.classList.add("item");
    newProduct.innerHTML = `<a href="/detail.html?id=${product.id}">
    <img src="${product.image}">
</a>
    <h2>${product.name}</h2>
    <div class='price'>$${product.price}</div>
    <button class='addCart' data-id=${product.id}>Add to cart</button>`;
    listProduct.appendChild(newProduct);
  });
};
