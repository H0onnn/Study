const toDoForm = document.querySelector('#todo-form');
const toDoInput = document.querySelector('#todo-input');
const toDoList = document.querySelector('#todo-list');

function deleteToDo(e) {
    const li = e.target.parentElement;
    li.remove();
}

function paintToDo(newTodo) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.innerHTML = newTodo;
    const button = document.createElement('button');
    button.innerHTML = 'X';
    button.addEventListener('click', deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSumit(e) {
    e.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = '';
    paintToDo(newTodo);
}

toDoForm.addEventListener('submit', handleToDoSumit);
