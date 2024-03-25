// let item_container_content = document.querySelector(".item-container");
let shopping_cart_data = document.querySelector(".shopping-cart-data");
let listCart = document.querySelector(".list-cart");
let iconCartSpan = document.querySelector(".badge");
let shopping_cart_items = document.querySelector(".shopping_cart_items");
let closeCart = document.querySelector(".close");
let body = document.querySelector("body");
let cart = [];
let quantity = null;

// check if items n loclhost

// let cartItems = localStorage.getItem("cartItems")
//   ? JSON.parse(localStorage.getItem("cartItems"))
//   : [];
// addItem to crt
let number_in_cart = cartItems.length;
let cartCount = number_in_cart;
iconCartSpan.textContent = number_in_cart;
if (cartCount === 0) {
  iconCartSpan.style.display = "none";
} else {
  iconCartSpan.style.display = "block";
}
if (cartItems) {
  cartItems.map((item) => {
    listCart.innerHTML += `<div class='item' data-id='${item.id}'>
    <div class="image"><img class="thumbanil" src="${item.imageUrl}" /> </div><div class="name">${item.title}</div>
   <div class="totalPrice">${item.price}</div>
    <div class="quantity">
            <span class="minus" data-id='${item.id}'>&lt;</span>
            <span>1</span>
            <span class="plus" data-id='${item.id}'>&gt;</span>
        </div>
    </div>

    `;
  });
}

function updateCartCount() {
  iconCartSpan.style.display = "block";
  iconCartSpan.textContent = cartCount;
}

function addItem(id) {
  quantity = 0;
  cartCount++;
  updateCartCount();
  // get choosen item
  let chooseItem = products.find((product) => product.id === id);
  if (cart[chooseItem.id]) {
    cart[chooseItem.id].quantity++;
    console.log(cart[chooseItem.id]);
  } else {
    cart[chooseItem.id] = { ...cartItems, quantity: 1 };
  }

  listCart.innerHTML += `<div class='item'>
  <div class="image"><img class="thumbanil" src="${chooseItem.imageUrl}" /> </div><div class="name">${chooseItem.title}</div>
 <div class="totalPrice">${chooseItem.price}</div>
  <div class="quantity">
          <span class="minus" data-id='${chooseItem.id}'>&lt;</span>
    cart[chooseItem.id].quantity++;
          <span>${chooseItem.quantity}</span>
          <span class="plus" data-id='${chooseItem.id}'>&gt;</span>
      </div>
  </div>

    `;

  // put items in localStorage s strings
  // cartItems = [...cartItems, chooseItem];
  // localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

// set product in localStorage & cart
