const clock = document.querySelector('#clock');
const todayDate = document.querySelector('#today');


function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    // const seconds = String(date.getSeconds()).padStart(2, '0');

    clock.innerHTML = `${hours}:${minutes}`;
}

function getToday() {
    const todayDate = document.querySelector('#today');
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date().toLocaleDateString('en-US', options);
    todayDate.innerHTML = today;
}

getClock();
setInterval(getClock, 1000);

getToday();
setInterval(getToday, 1000 * 60 * 60 * 24);