let user_info = document.querySelector("#user_info");
let user = document.querySelector("#user");
let links = document.querySelector("#links");
let logout = document.querySelector("#logout");
let iconCart = document.querySelector(".right-section .shop-icon");
let itemContainerContent = document.querySelector(".item-container");
let user_value = localStorage.getItem("username");
let main_content = document.getElementById("main_content");
// let add_to_cart_btn = document.querySelector(".add-to-cart");
let add_to_cart_btn = document.querySelectorAll(".item-action .add-to-cart");
let activeTab = document.querySelector("body.activeTab");
let body = document.querySelector("body");

let isCartHidden = true;

// close & open TabCart

iconCart.addEventListener("click", () => {
  body.classList.toggle("activeTab");
});

if (activeTab) {
  add_to_cart_btn.textContent = "";
}

// check if loclstorge
if (user_value) {
  links.remove();
  user_info.style.display = "flex";
  user.innerHTML = user_value;
} else {
  user_info.remove();
  logout.remove();
}
logout.addEventListener("click", function (e) {
  e.preventDefault();
  localStorage.clear();
  setTimeout(() => {
    window.location = "register.html";
  }, 1500);
});
// poductui
function drawProductsUI() {
  let productsUI = products.map((product) => {
    return `<div class="item-card" id="productList">
    
  </div>`;
  });
  itemContainerContent.innerHTML = productsUI;
}
drawProductsUI();

// shopping-cart-data dr
// searchInput

// Function to render product items based on search query
function renderProducts(searchQuery) {
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Render filtered product items
  const productListElement = document.getElementById("productList");
  productListElement.innerHTML = ""; // Clear previous items

  filteredProducts.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.classList = "product_card";
    productElement.innerHTML = `<a onclick="saveProductId(${product.id})"><div class="item-card-img">
    <img src="${product.imageUrl}" class="zoom-img"/>
  </div>
  <div class="item-card-info">
    <div class="item-desc">
        ${product.title}
    </div>
    <div class="feedback">
    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"/>
  </svg>
  <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"/>
</svg>  <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
<path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"/>
</svg>  <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
<path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"/>
</svg>  <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
<path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"/>
</svg>
  
    </div>
    <div class="item-price">
      <p>${product.price}</p>
      <span class="stock">${product.stock}in stock</span>
    </div>
    </a>
    <div class="item-action">
      <button class="addCart" data-id="${product.id}">Add to cart</button>
      <button class="add-to-fv" data-id="${product.id}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"></path></svg></button>
    </div>
  </div>`;
    productListElement.appendChild(productElement);
  });
}

// Event listener for search input
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", () => {
  const searchQuery = searchInput.value.trim();
  renderProducts(searchQuery);
  main_content.scrollIntoView({ behavior: "smooth" }); // This will scroll smoothly to the top of the topSection
});

// Initial rendering of all products
renderProducts("");

// set product id
function saveProductId(id) {
  localStorage.setItem("itemDetId", id);
  window.location = "productDetail.html";
  // window.location.href = `productDetail.html/${id}`;
}

// toggle menu btn
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggle-button");
  const menu = document.getElementById("menu");
  const openMenu = document.querySelector(".toggle-menu .open-icon");
  const closeMenu = document.querySelector(".toggle-menu .close-icon");
  const sidemenu = document.querySelector("aside");
  const banner = document.querySelector("section.banner");

  toggleButton.addEventListener("click", function () {
    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
      menu.classList.add("visible");
      banner.classList.remove("full");
    } else {
      menu.classList.remove("visible");
      menu.classList.add("hidden");
      banner.classList.add("full");
    }
  });
});
