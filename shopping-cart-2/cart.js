/*
======= reduce() が使えるとき ========
1. 配列の要素を足したり引いたりしたい -> 合計値を求める


 */


let label = document.getElementById("label");
let shoppingCart = document.getElementById("shopping-cart");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0)
};

calculation();


let totalAmount = () => {
  if(basket.length !== 0) {
    let amount = basket.map((x) => {
      let { item, id } = x;
      let search = shopItemsData.find((y) => y.id === id) || [];

      return item * search.price;
    })
    .reduce((x, y) => x + y, 0);
    label.innerHTML = `
    <h2>Total Bill : $ ${amount}</h2>
    <button class="checkout">Checkout</button>
    <button onclick="clearCart()" class="removeAll">Clear Cart</button>
    `;
  }else return;
}

totalAmount();