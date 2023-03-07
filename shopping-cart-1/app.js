// select elements
const productsEl = document.querySelector(".products");
const cartItemsEl = document.querySelector(".cart-items");
const subtotalEl = document.querySelector(".subtotal");
const totalItemsInCart = document.querySelector(".total-items-in-cart");

// render products
function renderProducts() {
    products.forEach((product) => {
        productsEl.innerHTML += `
            <div class="item">
                <div class="item-container">
                    <div class="item-img">
                        <img src="${product.imgSrc}" alt="${product.name}">
                    </div>
                    <div class="item-desc">
                        <h2>${product.name}</h2>
                        <h2><small>$</small>${product.price}</h2>
                        <p>
                            ${product.description}
                        </p>
                    </div>
                    <div class="add-to-wishlist">
                        <img src="" alt="add to wish list">
                    </div>
                    <div class="add-to-cart" onclick="addToCart(${product.id})">
                        <img src="" alt="add to cart">
                    </div>
                </div>
            </div>
        `;
    });
}

renderProducts();


// cart array
let cart = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();


// add to cart
function addToCart(id) {
    // check if item already exists in cart
    if(cart.some((item) => item.id === id)) {
        alert("You already have this product in your cart");
    }else {
        const item = products.find((item) => item.id === id);   
        cart.push({
            ...item,
            numberOfUnits: 1,
        });
        // console.log(cart);
    }

    updateCart();
}


// update cart
function updateCart() {
    renderCartItems();
    renderSubtotal();

    // save cart to local storage
    localStorage.setItem("CART", JSON.stringify(cart));
}


// calculate and render subtotal
function renderSubtotal() {
    let totalPrice = 0,
        totalItems = 0;

    cart.forEach((item) => {
        totalPrice += item.price * item.numberOfUnits;
        totalItems += item.numberOfUnits
    }) 
    subtotalEl.innerHTML = `Subtotal(${totalItems}items): $${totalPrice.toFixed(2)}`;
    totalItemsInCart.innerHTML = totalItems;
}



// render cart items
function renderCartItems() {
    cartItemsEl.innerHTML = "";
    cart.forEach((item) => {
      cartItemsEl.innerHTML += `
        <div class="cart-item">
          <div class="item-info" onclick="removeItemFromCart(${item.id})">
            <img src="${item.imgSrc}" alt="${item.name}">
            <h4>${item.name}</h4>
          </div>
          <div class="unit-price">
            <h4><small>$</small>${item.price}</h4>
          </div>
          <div class="units">
            <div class="btn minus" onclick="changeNumberOfUnits('minus', ${item.id})">-</div>
            <div class="number">${item.numberOfUnits}</div>
            <div class="btn plus" onclick="changeNumberOfUnits('plus', ${item.id})">+</div>
          </div>
        </div>
      `;
    });
  }
  　　
  
  // remove item from cart　カート内の商品の削除
  function removeItemFromCart(id) {
    // array.filter() -> 特定の値を除いた新しい配列を作る
    cart = cart.filter((item) => item.id !== id);
  
    updateCart();
  }
  
  


// remove item from cart
function removeItemFromCart(id) {
    // array.filter() -> 特定の条件の値を除いた配列を作る
    cart = cart.filter((item) => item.id !== id);

    updateCart();
}


// change number of units
function changeNumberOfUnits(action, id) {
    cart = cart.map((item) => {
  
      let numberOfUnits = item.numberOfUnits;
  
      if(item.id === id) {
        if(action === "minus" && numberOfUnits > 1) {
          numberOfUnits--;
        }else if(action === "plus" && numberOfUnits < item.instock) {
          numberOfUnits++;
        }
      };
  
      return {
        ...item,
        numberOfUnits,
      };
    });
  
    updateCart();
  }



