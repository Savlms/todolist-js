function handleFormSubmit (event) {
    event.preventDefault();
    const toDo = event.target.todo.value.toUpperCase();
    if (toDo.trim() === '') {
        event.target.elements.todo.value = "";
        return;
    }
    addToDo(toDo);
    event.target.elements.todo.value = "";
}

function addToDo(text) {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("click", checkComplete);
    const span = document.createElement("span");
    span.textContent =  text;
    span.classList.add('todo-text');
    const btn = document.createElement("btn");
    btn.classList.add('todo-remove');
    btn.textContent = '.';
    btn.addEventListener('click', removeItem);
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(btn);
    document.querySelector(".todo-list").appendChild(li);
}

function checkComplete() {
    this.parentElement.classList.toggle('completed');
}

function removeItem() {
    this.parentElement.remove();
}

document.querySelector("form").addEventListener("submit", handleFormSubmit);