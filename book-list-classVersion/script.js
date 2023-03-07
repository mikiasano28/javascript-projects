'use strict';

class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    addBookToList(book) {
        const list = document.getElementById("book-list");
        const row = document.createElement("tr");
        row.innerHTML = `
           <td>${book.title}</td>
           <td>${book.author}</td>
           <td>${book.isbn}</td>
           <td><a class="delete">X</a></td>
        `;
        list.appendChild(row);
    }

    deleteBook(target) {
        if(target.classList.contains("delete")) {
            target.parentElement.parentElement.remove();
        }
    }

    // deleteBook(target) {
    //     if(target.className === "delete") {
    //         target.parentElement.parentElement.remove();
    //     }
    // }
    
    clearFields() {
        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
        document.getElementById("isbn").value = "";
    }
}

//Event Listener
document.getElementById("book-form").addEventListener("submit", (e) => {
    e.preventDefault();

    //Get form data
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const isbn = document.getElementById("isbn").value;

    //Instantiate book
    const book = new Book(title, author, isbn);

    //Instantiate UI
    const ui = new UI();

    //Validate
    if(title === "" || author === "" || isbn === "") {
        alert("Please fill in all fields");
        ui.clearFields();
    }else {
        //Add book to list 
        ui.addBookToList(book);

        //clear fields
        ui.clearFields();
    }
})

//Event Listener for delete
document.getElementById("book-list").addEventListener("click", (e) => {
    // console.log(e.target);

    //Instanticate UI
    const ui = new UI();

    //delete book
    ui.deleteBook(e.target);


})