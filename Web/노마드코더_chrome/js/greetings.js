const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('input');
const greeting = document.querySelector('#greeting');
const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function onLoginSubmit(e) {
    e.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    const percent = document.querySelector('#percent');
    const form = document.querySelector("#todo-form");
    const greeting = document.querySelector("#greeting");
    const showTodo = document.querySelector('#show-todo');
    form.classList.remove("hidden"); // 로그인 후 todo-form을 보이도록 함
    percent.classList.remove("hidden"); // 로그인 후 percnet가 보이도록 함
    showTodo.classList.remove("hidden"); // 로그인 후 ToDos 버튼이 보이도록 함
    greeting.innerHTML = `Have a nice day '${username}' !`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', onLoginSubmit);
} else {
    paintGreetings(savedUsername);
    loginForm.classList.add(HIDDEN_CLASSNAME);
}