//select DOM
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteTodo);
filterOption.addEventListener("click", filterTodo);


//functions
function addTodo (event) {
    event.preventDefault();
    //create todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //create list 
    const newTodo = document.createElement("li");
    newTodo.innerHTML = todoInput.value;
    
    //save to loca - do this last



    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    todoInput.value = "";
    //create completed button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = "Completed";
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //create trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = "Trash";
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //attach final todo
    todoList.appendChild(todoDiv);
}

function deleteTodo(event) {
    // console.log(event.target);
    const item = event.target;
    if(item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        todo.remove();
        removeLocalTodos(todo);
    }
    if(item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
        console.log(todo);
    }

}

function saveLocalTodos(todo) {
    let todos;
    if(localStorage.getItem("todos") === null) {
        todos = [];
    }else {
        localStorage.setItem("todos", JSON.stringify(todos));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function removeLocalTodos(todo) {
    let todos;
    if(localStorage.getItem("todos") === null) {
        todos = [];
    }else {
        todos = JSON.parse(localStorage.getItem("todos"))
    }

    const todoIndex = todo.children[0].innerHTML;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos))

}

function getTodos() {
    let todos;
    
}
