const button = document.querySelector('button');
const h1 = document.querySelector('h1');

button.addEventListener('click', () => {
    const newColor = makeRandColor();
    document.body.style.backgroundColor = newColor;
    h1.innerHTML = newColor;
})

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    if (r + g + b >= 100) {
        h1.style.color = 'black';
    }  else if (r + g + b < 100) {
        h1.style.color = 'white';
    }
    return `rgb(${r}, ${g}, ${b})`;
}

