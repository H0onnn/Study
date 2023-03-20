// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

for (let i = 1; i <= 151; i++) {
    const poketmon = document.createElement('div');
    poketmon.classList.add('poketmon');
    const label = document.createElement('span');
    label.innerText = `#${i}`
    const newImg = document.createElement('img');
    newImg.src = `${baseURL}${i}.png`;
    poketmon.appendChild(newImg);
    poketmon.appendChild(label);
    container.appendChild(poketmon);
}