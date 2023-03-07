'use strict';

const titleIntput = document.querySelector("#title");
const authorIntput = document.querySelector("#author");
const isbnIntput = document.querySelector("#isbn");
const button = document.querySelector(".add-button");
const bookList = document.querySelector("#book-list");

button.addEventListener("click", (e) => {
    e.preventDefault();

    if(titleIntput.value === "" &&
       authorIntput.value === "" &&
       isbnIntput.value === ""
    ) {
        alert("Enter any input");
    }else {
        const bookListRow = document.createElement("tr");

        const newTitle = document.createElement("td");
        newTitle.innerHTML = titleIntput.value;
        bookListRow.appendChild(newTitle);

        const newAuthor = document.createElement("td");
        newAuthor.innerHTML = authorIntput.value;
        bookListRow.appendChild(newAuthor);

        const newIsbn = document.createElement("td");
        newIsbn.innerHTML = isbnIntput.value;
        bookListRow.appendChild(newIsbn);

        bookList.appendChild(bookListRow);

        titleIntput.value = "";
        authorIntput.value = ""
        isbnIntput.value = ""
    }
})



