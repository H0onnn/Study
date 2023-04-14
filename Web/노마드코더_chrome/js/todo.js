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
    const container = document.createElement('div'); // 새로운 할 일을 담을 컨테이너 div 생성
    const li = document.createElement('li'); // 할 일 리스트 아이템 생성
    li.id = newTodo.id; // li 아이템의 id 속성을 새로운 할 일의 id로 설정
    const checkbox = document.createElement('input'); // 체크박스 생성
    checkbox.type = 'checkbox'; // 체크박스의 타입을 checkbox로 설정
    const span = document.createElement('span'); // 할 일 내용을 담을 span 생성
    span.innerHTML = newTodo.text; // span의 내용을 새로운 할 일의 내용으로 설정
    const button = document.createElement('button'); // 삭제 버튼 생성
    container.classList.add('todo-container'); // 컨테이너 div에 todo-container 클래스 추가
    button.addEventListener('click', deleteToDo); // 삭제 버튼에 클릭 이벤트 추가
    checkbox.addEventListener('click', updatePercent); // 체크박스를 클릭할 때마다 달성률 업데이트
    li.appendChild(checkbox); // li 아이템에 체크박스 추가
    li.appendChild(span); // li 아이템에 span 추가
    li.appendChild(button); // li 아이템에 삭제 버튼 추가
    container.appendChild(li); // 컨테이너 div에 li 아이템 추가
    toDoList.appendChild(container); // 할 일 목록에 컨테이너 div 추가
    toDoInput.value = ''; // 할 일 입력창 초기화
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