const toDoForm = document.querySelector('#todo-form');
const toDoInput = document.querySelector('#todo-input');
const toDoList = document.querySelector('#todo-list');
const TODOS_KEY = 'todos';

let completedTodos = 0;

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(e) {
    const li = e.target.parentElement;
    li.remove();
    toDos = toDos.filter(v => v.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement('li');
    li.id = newTodo.id;
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    const span = document.createElement('span');
    span.innerHTML = newTodo.text;
    const button = document.createElement('button');
    button.addEventListener('click', deleteToDo);
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
    updatePercent();
}

// function handleCheck() {
//     if (this.checked) {
//         completedTodos++;
//     } else {
//         completedTodos--;
//     }

//     updatePercent();

//     if (completedTodos === checkboxes.length) {
//         alert('오늘의 할 일 완료 !');
//     }
// }

// function updatePercent() {
//     const percentValue = checkboxes.length === 0 ? 0 : Math.round((completedTodos / checkboxes.length) * 100);
//     percent.innerHTML = `${percentValue}%`;
// }

function handleToDoSumit(e) {
    e.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = '';
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    };
    toDos.push(newTodoObj);
    if (toDoList.children.length < 5) { // 할 일이 5개 미만인 경우에만 추가
        paintToDo(newTodoObj);
    } else {
        alert('할 일은 최대 5개까지만 추가할 수 있습니다.');
    };
    saveToDos();
}

toDoForm.addEventListener('submit', handleToDoSumit);


const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}