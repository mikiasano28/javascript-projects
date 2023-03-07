const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

//edit option
let editElement;
let editFlag = false;
let editID = "";

// ******* EVENT LISTENERS ******
// submit form 
form.addEventListener("submit", addItem);
// clear items
clearBtn.addEventListener("click", clearItems);
// load items
window.addEventListener("DOMContentLoaded", setupItems);

// ******* FUNCTIONS ********
function addItem(e) {
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString();

    if(value && !editFlag) {
        // console.log(editFlag);
        // editFlag = false, then why do i have to define line 11, editFlag = false???
        // display alert
        displayAlert("item added to the list", "success");
        createListItem(id, value);
        // show container
        container.classList.add("show-container");
        // add to local storage
        addToLocalStorage(id, value);
        // set back to default
        setBackToDefault();



    }else if (value && editFlag) {
        editElement.innerHTML = value;
        displayAlert("value chnaged", "success");
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
    }, 1000)
}

// delete function
function deleteItem(e) {
    // console.log(e.currentTarget);
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
    // console.log(element);
    list.removeChild(element);
    if(list.children.length === 0) {
        container.classList.remove("show-container");
    }
    displayAlert("item removed", "danger");
    setBackToDefault();
    // remove item from local storage
    removeFromLocalStorage(id);

}

// edit function
function editItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    // set edit item
    editElement = e.currentTarget.parentElement.previousElementSibling;
    // console.log(editElement);
    grocery.value = editElement.innerHTML;
    editFlag = true;
    editID = element.dataset.id;
    // console.log(editID);
    submitBtn.innerText = "edit";
}

// clear items
function clearItems() {
    const items = document.querySelectorAll(".grocery-item");
    // console.log(items);

    // this is bad example
    // if(items.length > 0) {
    //     list.remove(items);
    // }

    if(items.length > 0) {
        items.forEach(item => {
            list.removeChild(item);
        })
    }

    container.classList.remove("show-container");
    displayAlert("empty list", "danger");
    setBackToDefault();
    localStorage.removeItem("list");
}

// set back to default
function setBackToDefault() {
    grocery.value = "";
    editFlag = false;
    editID = "";
    submitBtn.innerText = "submit";
}

// ********* LOCAL STORAGE *******
function addToLocalStorage(id, value) {
    const grocery = {id, value};
    // console.log(grocery);
    let items = getLocalStorage()
    console.log(items);

    items.push(grocery);
    localStorage.setItem("list", JSON.stringify(items));
}

function removeFromLocalStorage(id) {
    let items = getLocalStorage();

    items = items.filter(item => {
        if(item.id !== id) {
            return item;
        }
    });
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
// ******** SETUP ITEMS ********
function setupItems() {
    let items = getLocalStorage();

    if(items.length > 0) {
        items.forEach(item => {
            createListItem(item.id, item.value);
        })
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
    // console.log(attr.value);
    element.setAttributeNode(attr);
    element.innerHTML = `
            <p class="title">${value}</p>
            <div class="button-container">
                <button type="button" class="edit-btn">edit</button>
                <button type="button" class="delete-btn">delete</button>
            </div>
    `;
    const deleteBtn = element.querySelector(".delete-btn");
    const editBtn = element.querySelector(".edit-btn");
    deleteBtn.addEventListener("click", deleteItem);
    editBtn.addEventListener("click", editItem);
    // append child
    list.appendChild(element);
}