import products from "./products.js";
const cart = () => {
  let listCartHTML = document.querySelector(".listCart");
  let iconCart = document.querySelector(".icon-cart");
  let iconCartSpan = iconCart.querySelector("span");
  let body = document.querySelector("body");
  let closeCart = document.querySelector(".close");
  let cart = [];

  // close & open TabCart
  iconCart.addEventListener("click", () => {
    body.classList.toggle("activeTabCart");
  });
  closeCart.addEventListener("click", () => {
    body.classList.toggle("activeTabCart");
  });

  // setProductInCart
  const setProductInCart = (productId, item) => {
    let positionProductInCart = cart.findIndex(
      (item) => item.product_id == productId
    );
    if (item <= 0) {
      cart.splice(positionProductInCart, 1);
    } else if (positionProductInCart < 0) {
      cart.push({
        product_id: productId,
        quantity: 1,
      });
    } else {
      cart[positionProductInCart].quantity = item;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    addCartToList();
  };
  // addCartToList
  const addCartToList = () => {
    listCartHTML.innerHTML = "";
    let totalQuantity = 0;
    if (cart.length > 0) {
      cart.forEach((item) => {
        totalQuantity = totalQuantity + item.quantity;
        let newItem = document.createElement("div");
        newItem.classList.add("item");
        newItem.dataset.id = item.product_id;
        // get img,price from products
        let positionProduct = products.findIndex(
          (prod) => prod.id == item.product_id
        );
        let prodInfo = products[positionProduct];
        listCartHTML.appendChild(newItem);
        newItem.innerHTML = `
        <div class="image">
        <img src="${prodInfo.image}">
        </div>
        <div class="name">
        ${prodInfo.name}
        </div>
        <div class="totalPrice">$${prodInfo.price * item.quantity}</div>
        <div class="quantity">
            <span class="minus" data-id="${prodInfo.id}"><</span>
            <span>${item.quantity}</span>
            <span class="plus" data-id="${prodInfo.id}">></span>
        </div>
        `;
      });
    }
    iconCartSpan.innerText = totalQuantity;
  };
  // find id of product onclicked button
  document.addEventListener("click", (event) => {
    let buttonClick = event.target;
    let productId = buttonClick.dataset.id;
    let quantity = null;
    let positionProductInCart = cart.findIndex(
      (item) => item.product_id == productId
    );
    // switch between button case
    switch (true) {
      case buttonClick.classList.contains("addCart"):
        quantity =
          positionProductInCart < 0
            ? 1
            : cart[positionProductInCart].quantity + 1;
        setProductInCart(productId, quantity);
        break;
      case buttonClick.classList.contains("minus"):
        quantity = cart[positionProductInCart].quantity - 1;
        setProductInCart(productId, quantity);

        break;
      case buttonClick.classList.contains("plus"):
        quantity = cart[positionProductInCart].quantity + 1;
        setProductInCart(productId, quantity);
        break;
      default:
        break;
    }
  });
  const initApp = () => {
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
      addCartToList();
    }
  };
  initApp();
};

export default cart;
