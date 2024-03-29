let product_container = document.querySelector(".product-container");

// poduct ui
function drawProductsUI(products = []) {
  let productsItem = JSON.parse(localStorage.getItem("cart")) || products;
  console.log(productsItem);
  let productsUI = productsItem.map((item) => {
    return `<div class="item-card">
    <a onclick="saveItemId(${item.product_id})">
      <div class="item-card-img">
      <img src="${item.product_imageUrl}" class="zoom-img"/>
      </div>
      <div class="item-card-info">
        <div class="item-desc">
          <p>
            ${item.product_title}
          </p>
        </div>
        <div class="item-price">
          <p><span>Price : $${item.product_price} </span></p>
          <span class="stock">Number in Stock : ${item.product_stock}</span>
        </div>
        </a>
        <div class="item-action">
          <button class="addCart" data-id="${item.product_id}">Add to cart</button>
          <button class="minus" data-id="${item.product_id}">remove from cart</button>
        </div>
      </div>
    </div>`;
  });

  if (product_container !== null) {
    product_container.innerHTML = productsUI;
    console.log("yes");
  } else {
    console.log("err");
  }
}

drawProductsUI();
// remove
// function removeItem(id) {
//   cartCount--;
//   updateCartCount();
//   let productsInCart = localStorage.getItem("cartItems");
//   if (productsInCart) {
//     let items = JSON.parse(productsInCart);
//     let filterItems = items.filter((item) => item.id !== id);
//     localStorage.setItem("cartItems", JSON.stringify(filterItems));
//     console.log("empty");
//     updateCartCount();
//     drawProductsUI(filterItems);
//   }
// }

// set product id
function saveItemId(id) {
  localStorage.setItem("itemDetId", id);
  window.location = "productDetail.html";
}
// get product detil
let content = document.querySelector(".listProduct");
let prodId = localStorage.getItem("itemDetId");
let thisProduct = products.filter((value) => value.id == prodId)[0];

let product_content = document.querySelector(".product-detail-section");
product_content.querySelector(".big-img img").src = thisProduct.imageUrl;
let product_description = document.querySelector(".product-description");
product_description.querySelector(".title h2").innerText = thisProduct.title;
product_description.querySelector(".price").innerText = "$" + thisProduct.price;
product_description.querySelector(".addCart").dataset.id = prodId;
product_description.querySelector(".minus").dataset.id = prodId;
product_description.querySelector(".plus").dataset.id = prodId;
// product_description.querySelector(".quantity_num").innerText =
//   thisProduct.quantity;

// drw thum
function drawthumb(thumbnil = []) {
  let thumb_img = document.querySelector(".thumb-img");
  let thumbs = thisProduct.thumbs;
  let thumb = thumbs.map((thumb) => {
    return `<div class="item-card-img">
    <a ><img src="${thumb.url}" class="zoom-img"/></a>
    </div>`;
  });
  thumb_img.innerHTML = thumb;
}
drawthumb();
