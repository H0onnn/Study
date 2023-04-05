const toDoForm = document.querySelector('#todo-form');
const toDoInput = document.querySelector('#todo-input');
const toDoList = document.querySelector('#todo-list');
const showTodoButton = document.getElementById('show-todo');
const todoContainer = document.getElementById('todo-container');
const deleteAllBtn = document.getElementById('delete-all-btn');
const TODOS_KEY = 'todos';

let toDos = [];

showTodoButton.addEventListener('click', () => {
    todoContainer.classList.toggle('hidden');
    toDoInput.focus();
});

deleteAllBtn.addEventListener('click', () => {
    // local storage에서 todos 항목 삭제
    localStorage.removeItem('todos');

    // todo-list의 모든 자식 요소(li)를 삭제한다.
    while (toDoList.firstChild) {
        toDoList.removeChild(toDoList.firstChild);
    };
});

function updatePercent(e) {
    const totalTodos = document.querySelectorAll('li').length;
    const checkedCount = document.querySelectorAll('input[type="checkbox"]:checked').length;
    const checkbox = e.target;
    const li = checkbox.parentNode;
    const span = li.querySelector("span");

    // 체크박스가 체크되었으면 텍스트 색상을 연하게 하고 가운데 줄 긋기
    if (checkbox.checked) {
        span.style.textDecoration = "line-through";
        span.style.opacity = 0.5;
    }
    // 체크박스가 체크되지 않았으면 텍스트 스타일 초기화
    else {
        span.style.textDecoration = "none";
        span.style.opacity = 1;
    }

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
    const container = li.parentElement;
    li.remove();
    container.remove();
    toDos = toDos.filter(v => v.id !== parseInt(li.id));
    saveToDos();
    updatePercent();
}

function paintToDo(newTodo) {
    const container = document.createElement('div');
    const li = document.createElement('li');
    li.id = newTodo.id;
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    const span = document.createElement('span');
    span.innerHTML = newTodo.text;
    const button = document.createElement('button');
    container.classList.add('todo-container');
    button.addEventListener('click', deleteToDo);
    checkbox.addEventListener('click', updatePercent); // 체크박스를 클릭할 때마다 달성률 업데이트
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(button);
    container.appendChild(li);
    toDoList.appendChild(container);
    toDoInput.value = '';
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