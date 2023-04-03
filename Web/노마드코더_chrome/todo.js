const toDoForm = document.querySelector('#todo-form');
const toDoInput = document.querySelector('#todo-input');
const toDoList = document.querySelector('#todo-list');
const TODOS_KEY = 'todos';

let toDos = [];

function updatePercent() {
    const totalTodos = document.querySelectorAll('li').length;
    const checkedCount = document.querySelectorAll('input[type="checkbox"]:checked').length;
    let percent = 0;
    if (totalTodos !== 0) {
        percent = (checkedCount / totalTodos) * 100;
    }
    const percentDisplay = document.querySelector('#percent');
    percentDisplay.textContent = `달성률: ${percent.toFixed(2)}%`;
    if (percent === 100) {
        percentDisplay.textContent = '오늘의 할 일 완료 !';
    }
}

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(e) {
    const li = e.target.parentElement;
    li.remove();
    toDos = toDos.filter(v => v.id !== parseInt(li.id));
    saveToDos();
    updatePercent();
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
    checkbox.addEventListener('click', updatePercent); // 체크박스를 클릭할 때마다 달성률 업데이트
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

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