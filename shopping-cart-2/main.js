let shop = document.getElementById("shop");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop = () => {
  return shop.innerHTML = shopItemsData.map((shopItemData) => {
    let { id, name, price, desc, img } = shopItemData;
    let search = basket.find((shopItemData) => shopItemData.id === id) || [];
    return `
    <div id=product-id-${id} class="item">
    <img width="220" src=${img} alt="">
    <div class="details">
      <h3>${name}</h3>
      <p>${desc}</p>
      <div class="price-quantity">
        <h2>$ ${price} </h2>
        <div class="buttons">
          <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
          <div id=${id} class="quantity">
          ${search.item === undefined ? 0 : search.item}
          </div>
          <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
        </div>
      </div>
    </div>
  </div>
`;
  })
  .join("");
};

generateShop();


let increment = (id) => {
  let selectedItem = id;

  update(selectedItem.id);

  localStorage.setItem("data", JSON.stringify(basket));
}

let decrement = (id) => {
  let selectedItem = id;

  let search = basket.find((shopItemData) => shopItemData.id === selectedItem.id);

  if(search === undefined) return;
  else if(search.item === 0) return;
  else {
    search.item -= 1;
  }

  update(selectedItem.id);
  basket = basket.filter((shopItemsData) => shopItemsData.item !== 0);

  // basketの中に何か入っていたら、localStorageにsetする
  localStorage.setItem("data", JSON.stringify(basket));
}

let update = (id) => {
  let search = basket.find((shopItemsData) => shopItemsData.id === id);

  document.getElementById("id").innerHTML = search.item;

  caltulration();
} 

let calsultation = () => {
  let cartIcon = document.getElementById("cartAmount");

  cartIcon.innerHTML = basket.map((shopItemsData) => shopItemsData.item).reduce((shopItemsData, y) => x + y, 0); 
}

/*
======= reduce() =======
reduce(total, currentValue)
total: initial value, or the previous returned value

currentValue: the value of the current element


const numbers = [175, 50, 25];

document.getElementById("demo").innerHTML = numbers.reduce(myFunc);

function myFunc(total, num) {
  return total - num;

1. 175 - 50;
2. 125 - 25;
}
*/