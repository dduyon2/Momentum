const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todo = todoForm.querySelector("input");
const TODO_KEY = "todo-list"
let lst = [];

function deleteTodo(todo) {
    const toDelete = todo.target.parentElement;
    toDelete.remove();
    
    // lst = lst.filter(todo => todo.id !== parseInt(toDelete.id));
    // saveTodo(lst);
}

function printTodo(v) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const delBtn = document.createElement("button");
    delBtn.innerText ="x";
    delBtn.addEventListener("click", deleteTodo);
    li.id = v.id;
    li.appendChild(span);
    li.appendChild(delBtn);
    span.innerText = v.text;
    todoList.appendChild(li);
}

function saveTodo(event) {
    localStorage.setItem(TODO_KEY, JSON.stringify(event));
}

function todoSubmitHandler(event) {
    event.preventDefault();
    const todoObject = {
        text: todo.value,
        id: Date.now()
    }
    printTodo(todoObject);
    lst.push(todoObject)
    saveTodo(lst);
    todo.value="";
}

todoForm.addEventListener("submit", todoSubmitHandler);

const items = localStorage.getItem(TODO_KEY);
if(items) {
    lst = items;
    JSON.parse(items).forEach(printTodo);
}