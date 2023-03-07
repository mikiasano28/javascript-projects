'use strict';

{
    //local reviews data
    const reviews = [
        {
            id: 1,
            name: "ashish singh vardhan",
            job: "programer",
            img: "image/a.jpg",
            text: "hello, my name is bla blakjahg;oajz;o haoapjahoaj;aoh;haah:ah;ahg;a!!!",
        },
        {
            id: 2,
            name: "miki singh vardhan",
            job: "ui designer",
            img: "image/b.jpg",
            text: "hello, my name is bla blakjahg;oajz;o haoapjahoaj;aoh;haah:ah;ahg;a!!!",
        },
        {
            id: 3,
            name: "miki smith",
            job: "ux designer",
            img: "image/c.jpg",
            text: "hello, my name is bla blakjahg;oajz;o haoapjahoaj;aoh;haah:ah;ahg;a!!!",
        },
        {
            id: 3,
            name: "john doe",
            job: "programer",
            img: "image/d.jpg",
            text: "hello, my name is bla blakjahg;oajz;o haoapjahoaj;aoh;haah:ah;ahg;a!!!",
        },
    ];

    const img = document.getElementById("person-img");
    const author = document.getElementById("author");
    const job = document.getElementById("job");
    const info = document.getElementById("info");

    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const randomBtn = document.querySelector(".randomm-btn");

    //set starting item
    let currentItem = 0;

    //load initial item
    window.addEventListener("DOMContentLoaded", () => {
        showPerson();
    })

    //show person based on item
    function showPerson() {
        const item = reviews[currentItem];
        img.src= item.img;
        author.innerText = item.name;
        job.innerText = item.job;
        info.innerText = item.text;
    }

    //show next person
    nextBtn.addEventListener("click", () => {
        currentItem++;
        if(currentItem > reviews.length - 1) {
            currentItem = 0;
        } 
        showPerson();
    })

    //show previous person
    prevBtn.addEventListener("click", () => {
        currentItem--;
        if(currentItem < 0) {
            currentItem = reviews.length - 1;
        }
        showPerson();
    })

    //show random person
    randomBtn.addEventListener("click", () => {
        currentItem = Math.floor(Math.random() * reviews.length);
        console.log(currentItem);
        showPerson();
    })



}