// ******** SELECT ITEMS *******
const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// edit option
let editElement;
let editFlag = false;
let editID = "";

// ******** EVENT LISTENERS *******
// submit form
form.addEventListener("submit", addItem);
// clear items
clearBtn.addEventListener("click", clearItems);
// load items
window.addEventListener("DOMContentLoaded", setupItems);

// ******** FUNCTIONS *******:
function addItem(e) {
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString();  // toString(): convert number to a string

    if(value && !editFlag) {
        createListItem(id, value);
        // display alert
        displayAlert("item added to the list", "success");
        // show container
        container.classList.add("show-container");
        // add to local storage
        addTOLocalStorage(id, value);
        // set back to default
        setBackToDefault();
    }else if(value && editFlag) {
        editElement.innerHTML = value;
        displayAlert("value changed", "success");
        // edit local storage
        editLocalStorage(editID, value);
        setBackToDefault();
    }else {
        displayAlert("please enter value", "danger");

    }

}

// display alert
function displayAlert(text, action) {
    alert.innerText = text;
    alert.classList.add(`alert-${action}`);

    // remove alert
    setTimeout(function() {
        alert.innerText = "";
        alert.classList.remove(`alert-${action}`);
    }, 1000);
}

// clear items
function clearItems() {
    const items = document.querySelectorAll(".grocery-item"); // NodeList

    if(items.length > 0) {
        items.forEach(item => {
            list.removeChild(item);
        });
    }
    container.classList.remove("show-container");
    displayAlert("empty list", "danger");
    setBackToDefault();
    localStorage.removeItem("list");
}

// edit function
function editItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    // set edit item
    editElement = e.currentTarget.parentElement.previousElementSibling;
    // console.log(editElement);

    // set form value
    grocery.value = editElement.innerHTML;
    editFlag = true;
    editID = element.dataset.id;
    submitBtn.innerHTML = "edit";
}

// delete function
function deleteItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    // console.log(element);
    const id = element.dataset.id;
    // console.log(id);
    list.removeChild(element);
    if(list.children.length === 0) {
        container.classList.remove("show-container");
    }
    displayAlert("item removed", "danger");
    setBackToDefault();
    // remove from local storage
    removeFromLocalStorage(id);
}

// set back to default
function setBackToDefault() {
    grocery.value = "";
    editFlag = false;
    editID = "";
    submitBtn.innerHTML = "submit";
}

// ******** LOCAL STORAGE *******
function addTOLocalStorage(id, value) {
    const grocery = {id, value};
    // console.log(grocery);
    let items = getLocalStorage();
    // console.log(items);
    items.push(grocery);
localStorage.setItem("list", JSON.stringify(items));
}

function removeFromLocalStorage(id) {
    let items = getLocalStorage();
    // console.log(items);

    items = items.filter(item => {
        if(item.id !== id) {
            return item;
        }
    })

    localStorage.setItem("list", JSON.stringify(items));
}

function editLocalStorage(id, value) {
    let items = getLocalStorage();
    items = items.map(item => {
        if(item.id === id) {
            item.value = value;
        }
        return item;
    });
    localStorage.setItem("list", JSON.stringify(items));
}

function getLocalStorage() {
    return localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : [];
}

// ******** SETUOP ITEMS ******* 
function setupItems() {
    let items = getLocalStorage();
    if(items.length > 0) {
        items.forEach(item => {
            createListItem(item.id, item.value);
        });
        container.classList.add("show-container");
    }

}

function createListItem(id, value) {
    const element = document.createElement("article");
    // add class
    element.classList.add("grocery-item");
    // add id
    const attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = `
    <p class="title">${value}</p>
    <div class="btn-container">
        <button type="button" class="edit-btn"><i class="fa-solid fa-marker"></i></button>
        <button type="button" class="delete-btn"><i class="fa-solid fa-trash-can"></i></button>
    </div>
    `;
    // edit button
    const editBtn = element.querySelector(".edit-btn");
    // delete button
    const deleteBtn = element.querySelector(".delete-btn");
    editBtn.addEventListener("click", editItem);
    deleteBtn.addEventListener("click", deleteItem);

    // append child
    list.appendChild(element);
}