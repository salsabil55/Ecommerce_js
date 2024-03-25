let shopping_cart_data = document.querySelector(".shopping-cart-data");
let listCart = shopping_cart_data.querySelector(".list-cart");
// let iconCart = document.querySelector(".right-section .shop-icon");
let iconCartSpan = document.querySelector(".badge");
let shopping_cart_items = document.querySelector(".shopping_cart_items");
let closeList = document.querySelector(".close");
// let body = document.querySelector("body");
let cart = [];
let quantity = null;

// iconCart.addEventListener("click", () => {
//   body.classList.toggle("activeTab");
// });
closeList.addEventListener("click", () => {
  body.classList.toggle("activeTab");
});

// setProductInCart
// const setProductInCart = (productId, item) => {
//   let positionProductInCart = cart.findIndex(
//     (item) => item.product_id == productId
//   );
//   let prodName = products[positionProductInCart].title;
//   let img = products[positionProductInCart].imageUrl;
//   console.log(prodName, img);
//   if (item <= 0) {
//     cart.splice(positionProductInCart, 1);
//   } else if (positionProductInCart < 0) {
//     cart.push({
//       product_id: productId,
//       prodName: prodName,
//       img: img,
//       quantity: 1,
//     });
//   } else {
//     cart[positionProductInCart].quantity = item;
//   }
//   localStorage.setItem("cart", JSON.stringify(cart));
//   addCartToList();
// };
const setProductInCart = (
  productId,
  item,
  prodName,
  img,
  prodPrice,
  prodStock
) => {
  let positionProductInCart = cart.findIndex(
    (item) => item.product_id == productId
  );

  // if (positionProductInCart !== -1) {
  //   let prodName = products[positionProductInCart].title;
  //   let img = products[positionProductInCart].imageUrl;
  // }

  if (item <= 0) {
    cart.splice(positionProductInCart, 1);
  } else if (positionProductInCart < 0) {
    cart.push({
      product_id: productId,
      product_title: prodName, // It should be 'prodName' instead of 'prodName'
      product_imageUrl: img, // It should be 'img' instead of 'img'
      product_price: prodPrice,
      product_stock: prodStock,
      quantity: 1,
    });
  } else {
    cart[positionProductInCart].quantity = item;
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  addCartToList();
};

const addCartToList = () => {
  listCart.innerHTML = "";

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
      listCart.appendChild(newItem);
      newItem.innerHTML = `
        <div class="image">
        <img src="${prodInfo.imageUrl}">
        </div>
        <div class="name">
        ${prodInfo.title}
        </div>
        <div class="totalPrice">${
          prodInfo.price.toFixed(0) * item.quantity
        }</div>
        <div class="quantity">
            <span class="minus" data-id="${prodInfo.id}">-</span>
            <span>${item.quantity}</span>
            <span class="plus" data-id="${prodInfo.id}">+</span>
        </div>
        `;
    });
  }
  iconCartSpan.innerText = totalQuantity;
};
// hndle ny cutton clicked in ny pge
document.addEventListener("click", (event) => {
  let buttonClick = event.target;
  let productId = buttonClick.dataset.id;
  let quantity = null;
  let positionProductInCart = cart.findIndex(
    (item) => item.product_id == productId
  );
  let prodName = products[productId - 1].title;
  let img = products[productId - 1].imageUrl;
  let prodPrice = products[productId - 1].price;
  let prodStock = products[productId - 1].stock;
  console.log("test", products[productId - 1]);

  // switch between button case
  switch (true) {
    case buttonClick.classList.contains("addCart"):
      quantity =
        positionProductInCart < 0
          ? 1
          : cart[positionProductInCart].quantity + 1;
      setProductInCart(
        productId,
        quantity,
        prodName,
        img,
        prodPrice,
        prodStock
      );
      break;
    case buttonClick.classList.contains("minus"):
      quantity = cart[positionProductInCart].quantity - 1;
      setProductInCart(
        productId,
        quantity,
        prodName,
        img,
        prodPrice,
        prodStock
      );

      break;
    case buttonClick.classList.contains("plus"):
      quantity = cart[positionProductInCart].quantity + 1;
      setProductInCart(
        productId,
        quantity,
        prodName,
        img,
        prodPrice,
        prodStock
      );
      break;
    default:
      break;
  }
});

const initApp = () => {
  if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
    console.log(cart);
    addCartToList();
  }
};
initApp();
