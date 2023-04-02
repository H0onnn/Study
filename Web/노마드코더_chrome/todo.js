const toDoForm = document.querySelector('#todo-form');
const toDoInput = document.querySelector('#todo-input');
const toDoList = document.querySelector('#todo-list');

function paintToDo(newTodo) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    li.appendChild(span);
    span.innerHTML = newTodo;
    toDoList.appendChild(li);
}

function handleToDoSumit(e) {
    e.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = '';
    paintToDo(newTodo);
}

toDoForm.addEventListener('submit', handleToDoSumit);
