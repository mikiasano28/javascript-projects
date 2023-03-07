// DOM elements
const boxes = document.querySelectorAll(".box");
const image = document.querySelector(".image");

// loop through each boxes element
boxes.forEach((box) => {
  // draggble element dragged over a box element 
  box.addEventListener("dragover", (e) => {
    e.preventDefault();
    box.classList.add("hovered");
  });

  // draggable element leaves box element 
  box.addEventListener("dragleave", () => {
    box.classList.remove("hovered");
  });

  // draggable element is dropped on a box element 
  box.addEventListener("drop", () => {
    box.appendChild(image);
    box.classList.remove("hovered");
  });
})



/*
1. dropover -> e.preventDefault()
2. dropleave
3. drop -> appendChild
*/