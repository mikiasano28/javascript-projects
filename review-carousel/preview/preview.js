// local reviews data
const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "web developper",
        img: "image/a.jpg",
        text: "ohgangalkbailvlainagahguayg9paohlnvlkjblagvag",
    },
    {
        id: 2,
        name: "miki asano",
        job: "ui desinger",
        img: "image/b.jpg",
        text: "ohgangalkbailvlainagahguayg9paohlnvlkjblagvag",
    },
    {
        id: 3,
        name: "ashish vardhan",
        job: "programer",
        img: "image/c.jpg",
        text: "ohgangalkbailvlainagahguayg9paohlnvlkjblagvag",
    },
    {
        id: 4,
        name: "susie doe",
        job: "ux desinger",
        img: "image/d.jpg",
        text: "ohgangalkbailvlainagahguayg9paohlnvlkjblagvag",
    },
];

// select items 
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const randomBtn = document.querySelector(".random-btn");
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");



// set starting item
let currentIndex = 0

// load initial item
window.addEventListener("DOMContentLoaded", () => {
    showPerson();
})

// show person based on item
function showPerson() {
    const item = reviews[currentIndex];
    img.src = item.img;
    author.innerText = item.name;
    job.innerText = item.job;
    info.innerText = item.text;
}
// show next person
nextBtn.addEventListener("click", () => {
    currentIndex++;
    if(currentIndex > reviews.length - 1) {
        currentIndex = 0;
    }
    showPerson();
})

// show prev person
prevBtn.addEventListener("click", () => {
    currentIndex--;
    if(currentIndex < 0) {
        currentIndex = reviews.length - 1;
    }
    showPerson();
})

// show random person
randomBtn.addEventListener("click", () => {
    currentIndex = Math.floor(Math.random() * reviews.length);
    // console.log(currentIndex);
    showPerson();

})

